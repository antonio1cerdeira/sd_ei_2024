function polinomio(k, x) {
   let resultado = 0;
   for (let i = 0; i <= k; i++) {
     resultado += Math.pow(x, i);
   }
   return resultado;
 }