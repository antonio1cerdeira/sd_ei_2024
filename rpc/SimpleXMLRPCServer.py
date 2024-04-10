from xmlrpc.server import SimpleXMLRPCServer
from xmlrpc.server import SimpleXMLRPCRequestHandler


# Restrict to a particular path.
class RequestHandler(SimpleXMLRPCRequestHandler):
    rpc_paths = ('/RPC2',)

# Create server
with SimpleXMLRPCServer(('localhost', 8000),
                        requestHandler=RequestHandler) as server:
    server.register_introspection_functions()

    # Register pow() function; this will use the value of
    # pow.__name__ as the name, which is just 'pow'.
    #server.register_function(pow)

    # Register a function under a different name
    def adder_function(x, y):
        return x + y
    server.register_function(adder_function, 'add')
    def sub_function(x, y):
        return x - y
    server.register_function(sub_function, 'sub')
    def div_function(x, y):
        return x / y
    server.register_function(div_function, 'div')
    def somatorio_function(z):
        total = 0
        for i in range (1, z+1):
            total += z**3
        return total
    server.register_function(somatorio_function, 'Soma')
    def imaginarios_function(a1, i1, a2, i2):
        parteReal=a1+a2
        parteIm=i1+i2
        return(parteReal, parteIm)
    server.register_function(somatorio_function, 'imaginarios_function')

    def mulimaginarios_function(a1, i1, a2, i2):
        parte_real = (a1 * a2) - (i1 * i2)
        parte_imaginaria = (a2 * i1) + (a1 * i2)
        return parte_real, parte_imaginaria
    server.register_function(mulimaginarios_function, 'mulimaginarios_function')
    def Calq_Primo(p):
        if p <= 1:
            return False
        elif p <= 3:
            return True
        elif p % 2 == 0 or p % 3 == 0:
            return False
        i = 5
        while i * i <= p:
            if p % i == 0 or p % (i + 2) == 0:
                return False
            i += 6
        return True
    server.register_function(Calq_Primo, 'Calq_Primo')
    def allPrime(x):
        primes = [i for i in range(2, x + 1) if Calq_Primo(i)]
        return primes


    def calcular_tabuada(numero):
        app=""
        for count in range(10):
            app+=("%d x %d = %d\n" % (numero, count + 1, numero * (count + 1)))
        return app
    server.register_function(calcular_tabuada, 'tabuada')
    # Register an instance; all the methods of the instance are
    # published as XML-RPC methods (in this case, just 'mul').
    class MyFuncs:
        def mul(self, x, y):
            return x * y

    server.register_instance(MyFuncs())

    # Run the server's main loop
    server.serve_forever()

