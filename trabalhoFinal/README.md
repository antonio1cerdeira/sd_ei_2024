  # sd_ei_1700430_2024
Trabalho de sitemas distribuidos 2024 

![panda-kung fu](./Img/Po_icon.webp)

Vinho

Sporting Clube De Portugal   

Engenharia Informatica 

link:https://drive.google.com/drive/folders/12BpdiZXThZXZqyv8npe_Y21MBTgLisDP

Nome: António José Cerdeira 
Trabalho: Implementar função polinomio(k,x)

# Descrição do Trabalho
Este projeto pretende desenvolver uma solução que permita aos utilizadores calcular a soma de um polinómio, especificamente 1 + x + x^2 + ... + x^k, através da introdução dos dados num formulário no Google Forms e o cálculo no Google Sheets. A solução será implementada com ajuda Google Apps Script, que permite a criação dos scripts para automatizar tarefas com os serviços do Google Workspace, permitindo aos utilizadores inserir valores e obter o resultado de um cálculo do polinómio. A implementação utiliza os serviços disponíveis na Google Cloud para criar formulários, processar entradas de dados e apresentar os resultados.
#Desenho da arquitetura
![Arqitetura](./Img/D_Block_1700430_T5.png)
Neste sub tópico irmos demonstrar o esquema lógico utilizado 

# Implementação do Trabalho	
  Utilizando uma arquitetura Google Cloud e o Google Apps Script para simular uma interceção entre o cliente e servidor, em que o cliente (Google Forms) insere os dados e apresenta dados e o servidor representado pelo Google Sheets (servidor)processa os dados e envia para o cliente.

Criar formulário no Google Forms.
Criar uma folha do Google Sheets.
Enviar os dados recolhidos para a folha do Google Sheets.
Abrir Google Apps Script.
Criar função que vai Buscar os dados.
Criar função que vai calcular o polinómio.
Criar função que devolve um valor calculado para o Google Form.
Configurar o ‘trigger’ sempre que é introduzido dados novos calcular o polinómio.
Configurar o ‘trigger’ sempre que é editado Google Sheets enviar para Google Forms.
Devolver os valores ao Google Forms.
Apresentar os resultados em HTML.
Fim


# Funcionamento do trabalho	
// colocar imagens do trabalho a funcionar e explicar
# Conclusão
// descrever brevemente o que se fez e o que faltou fazer

# Bibliografia

