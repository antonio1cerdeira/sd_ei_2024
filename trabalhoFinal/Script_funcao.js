
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

 function calcularPolinomio() {
   // Abre uma streed sheet específica pelo seu ID
   var spreadsheet = SpreadsheetApp.openById('1sF4HTd9BonvOOf_zE-58IpLvkgrHhrObP57lfQ2eA6k');
   // Regista no log o nome da streed sheet aberta
   Logger.log('Streed sheet aberta: ' + spreadsheet.getName());
  
   // Lista todos os nomes das folhas na streed sheet para depuração
   var sheets = spreadsheet.getSheets();
   var sheetNames = sheets.map(function(sheet) {
      return sheet.getName();
   });
   // Regista no log os nomes das folhas
   Logger.log('Sheet names: ' + sheetNames.join(', '));
  
   // Tenta obter a folha chamada 'User'
   var sheet = spreadsheet.getSheetByName('User');
  
   // Se a folha 'User' não for encontrada, lança um erro
   if (!sheet) {
       throw new Error("Streed sheet 'User' não encontrada.");
   }
  
   // Obtém os valores das células B2 e B3 da folha 'User'
   var x = sheet.getRange('B2').getValue();
   var k = sheet.getRange('B3').getValue();
  
   try {
      // Tenta calcular o polinômio com os valores obtidos e armazena o resultado na célula B4
      var resultado = polinomio(k, x); // Supõe-se que polinomio é uma função definida em outra parte do seu código
      sheet.getRange('B4').setValue(resultado);
   } catch (error) {
      // Se ocorrer um erro durante o cálculo, regista o erro na célula B4
      sheet.getRange('B4').setValue('Erro: ' + error.message);
   }
  }