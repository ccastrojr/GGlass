function calcTotal() {
   var qtd = Number(document.querySelector('#cmpQtd').value);
   
   document.querySelector('#cmbPreco').innerText = qtd * 1500;
}