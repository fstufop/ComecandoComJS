/* Calcular uma média
var valor1 = prompt(`Digite o primeiro valor`);
var valor2 = prompt(`Digite o segundo valor`);
console.log(`O primeiro valor é ${valor1} e o segundo é ${valor2}.`);*/

var vendedor,jan,fev,mar,media,soma;
vendedor = prompt("Informe o nome do vendedor");
jan = prompt("Informe o valor das vendas de janeiro");
fev = prompt("Informe o valor das vendas de fevereiro");
mar = prompt("Informe o valor das vendas de março");
media = (parseFloat(jan)+parseFloat(fev)+parseFloat(mar))/3;
soma = media*3;
document.write(`O vendedor ${vendedor} vendeu ${soma} produtos nos últimos três meses`);
document.write("<br>");
document.write(`A média de vendas do 1º trimestre foi ${media}`);
document.write("<br>");
document.write(`Parabéns ${vendedor} você não fez mais que a sua obrigação :)`)