//isto e um trigger
function onEdit(e) {
  if (!e || !e.range) return; // Verifica se o evento e a propriedade range existem
  
  var range = e.range;
  var coluna = range.getColumn();
  
  if (coluna != 4) return; // Se não foi na coluna D, sai da função
  
  var linha = range.getRow();
  var planilha = range.getSheet();
  
  // Obtém o valor da última célula atualizada na coluna D
  var ultimaLinha = planilha.getLastRow();
  var resultado = planilha.getRange(ultimaLinha, 4).getValue();
  
  // Envia o resultado para o formulário
  enviarResultadoParaForms(resultado);
}
function enviarResultadoParaForms(resultado) {
  var formId = '1PLR_FuX6V6x2CqXWb6jlycAn3lQy_S-64xSLFShN7r4';
  var form = FormApp.openById(formId);
  
  if (!form) {
    throw new Error("Formulário não encontrado. Verifique se o ID do formulário está correto.");
  }
  
  var items = form.getItems(FormApp.ItemType.TEXT);
  var itemPerguntaTexto = items[0]; // Supondo que seja o primeiro item do formulário
  
  // Criar uma nova resposta para a pergunta de texto
  var resposta = itemPerguntaTexto.asTextItem().createResponse(resultado);
  
  // Enviar a resposta para o formulário
  form.submitForm([resposta]);
}
