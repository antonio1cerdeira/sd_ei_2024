//link do trabalho a funcionar
https://forms.gle/eShBmGNVrrevd2R69
//-------------------------------------
function cal_poli() {
    var spreadsheet = SpreadsheetApp.openById('1SavJ3fGS0-MEYsEt9RMwSw1NON9zgtWIdnOxnvxyg9k');
    Logger.log('Spreadsheet aberto: ' + spreadsheet.getName());

    var sheet = spreadsheet.getSheetByName('Cal');

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
    
    
 var resultRange = sheet.getRange(lastRowB, 4);
Logger.log('Resultado a ser definido na folha de calculo: ' + resultado); // Verificar o valor de resultado
try {
    resultRange.setValue(resultado);
    Logger.log('Resultado definido na folha de calculo com sucesso.');
} catch (error) {
    Logger.log('Erro ao definir resultado na folha de calculo: ' + error);
}   
}
function polinomio(k, x) {
    let resultado = 0;
    for (let i = 0; i <= k; i++) {
      resultado += Math.pow(x, i);
    }
    return resultado;
  }
  function doGet() {
    var template = HtmlService.createTemplateFromFile('Index');
    var data = buscarDados(); // Supondo que esta função já esteja definida
    template.data = data;
    return template.evaluate().setTitle('Resultado do Polinômio');
  }   
  function buscarDados() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('cal');
    var lastRow = sheet.getLastRow();
    // Supondo que a primeira linha seja uma linha de cabeçalho e você deseja começar a coletar dados a partir da segunda linha
    var firstDataColumn = 2; // Ajuste isso para o número da coluna da primeira célula com dados, se necessário
    var data = sheet.getRange(lastRow, firstDataColumn, 1, sheet.getLastColumn() - firstDataColumn + 1).getValues();
    return data[0];
  }

  <!DOCTYPE html>
<html>
 <head>
    <base target="_top">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
       .data-container {
            margin-top: 20px;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border: 1px solid #ddd;
            position: relative;
        }
       .data-item {
            margin-bottom: 10px;
            padding: 10px;
            background-color: #fff;
            border-radius: 8px;
            border: 1px solid #eee;
        }
       .data-item label {
            font-weight: bold;
        }
       .close-btn {
            position: absolute;
            top: 5px;
            right: 5px;
            cursor: pointer;
            background: transparent;
            border: none;
            font-size: 14px;
            color: #999;
       }
    </style>
 </head>
 <body>
    <h1>Resultado cálculo do Polinômio</h1>
    <div class="data-container">
        <button class="close-btn" onclick="this.parentElement.style.display='none';">Fechar</button>
        <div class="data-item">
            <label>Primeiro número:</label>
            <span><?= data[0]?></span>
        </div>
        <div class="data-item">
            <label>Segundo número:</label>
            <span><?= data[1]?></span>
        </div>
        <div class="data-item">
            <label>Resultado:</label>
            <span><?= data[2]?></span>
        </div>
    </div>
 </body>
</html>
