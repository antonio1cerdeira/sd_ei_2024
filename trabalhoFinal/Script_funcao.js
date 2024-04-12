
// Esta função é um gatilho que é acionado quando a folha de cálculo é aberta.
function onOpen() {
   var ui = SpreadsheetApp.getUi();
   // Cria um menu na interface da folha de cálculo chamado 'calcularPolinomio'.
   ui.createMenu('calcularPolinomio')
     // Adiciona um item chamado 'Calcular' ao menu que chama a função 'calcularPolinomio' quando clicado.
     .addItem('Calcular', 'calcularPolinomio')
     // Adiciona o menu ao interface da folha de cálculo.
     .addToUi();
 }

// Esta função é chamada quando o item 'Calcular' é selecionado no menu.
function calcularPolinomio() {
  // Obtém a folha de cálculo ativa e a folha chamada 'User'.
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('User');
  // Obtém o valor de 'x' da célula B2.
  var x = sheet.getRange('B2').getValue();
  // Obtém o valor de 'k' da célula B3.
  var k = sheet.getRange('B3').getValue();
 
  try {
     // Tenta calcular o polinómio chamando a função 'polinomio(k, x)'.
     var resultado = polinomio(k, x);
     // Define o valor do resultado na célula B4.
     sheet.getRange('B4').setValue(resultado);
  } catch (error) {
     // Se ocorrer um erro durante o cálculo, define uma mensagem de erro na célula B4.
     sheet.getRange('B4').setValue('Erro: ' + error.message);
  }
}