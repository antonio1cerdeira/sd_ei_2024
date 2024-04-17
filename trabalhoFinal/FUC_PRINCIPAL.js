function calcularPolinomio() {
   var spreadsheet = SpreadsheetApp.openById('1zCWNkCvY144BNOJn7t0l-wrFN2vTp-K75hwVlVV5ynI');
   Logger.log('Spreadsheet aberto: ' + spreadsheet.getName());

   var sheet = spreadsheet.getSheetByName('D_1');

   if (!sheet) {
       throw new Error("Pagina não encontrada.");
   }

   // Encontrar a última linha com dados na coluna B
   var lastRowB = sheet.getLastRow();
   while (lastRowB > 0 && !sheet.getRange(lastRowB, 2).getValue()) {
       lastRowB--;
   }
   var x = lastRowB > 0 ? sheet.getRange(lastRowB, 2).getValue() : null;
   Logger.log('Valor de x: ' + x);

   // Encontrar a última linha com dados na coluna C
   var lastRowC = sheet.getLastRow();
   while (lastRowC > 0 && !sheet.getRange(lastRowC, 3).getValue()) {
       lastRowC--;
   }
   var k = lastRowC > 0 ? sheet.getRange(lastRowC, 3).getValue() : null;
   Logger.log('Valor de k: ' + k);

   if (x === null || k === null) {
       throw new Error("Valores de x ou k não encontrados.");
   }

   // Chamar a função polinomio com os valores obtidos
   var resultado = polinomio(k, x);
   Logger.log('Resultado do polinômio: ' + resultado);
}