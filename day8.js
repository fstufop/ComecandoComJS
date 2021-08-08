//Calculadora
var num1 = prompt(`Digite o primeiro número`,"Digite Aqui");
var num2 = prompt(`Digite o segundo número`,"Digite Aqui");
var op = prompt(`Digite o operador: \nAdição(+), \nSubtração(-), \nMultiplicação(*), \ndivisão(/)`);
var result;

switch(op){
    case"+":
    result = parseFloat(num1) + parseFloat(num2);
    break
    case"-":
    result = parseFloat(num1) - parseFloat(num2);
    break
    case"*":
    result = parseFloat(num1) * parseFloat(num2);
    break
    case"/":
    result = parseFloat(num1) / parseFloat(num2);
    break
    
}
document.write(result);