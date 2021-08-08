/* Operadores aritméticos
+ soma
- subtração
* Multiplicação
/ divisão
% resto da divisão
** exponenciação
*/

var x = prompt(`Digite o primeiro valor`);
var y = prompt(`Digite o segundo valor`);
if (y==0){
    var y = prompt(`Zero não vai rolar né fera? Digite número para o segundo valor`);    
}
var x = parseInt(x);
var y = parseInt(y);
alert(`Você digitou ${x} e ${y}`);
/*document.write(typeof x == 'number');
document.write(`A soma deu ${x+y}`);
document.write("\n"); "\n" dá espaço entre os document.write
document.write(`A subtração deu ${x-y}`);
document.write("\n");
document.write(`A multiplicação deu ${x*y}`);
document.write("\n");
document.write(`A divisão deu ${x/y} com resto igual a ${x%y}`);
document.write("\n");
document.write(`A exponenciação deu ${x**y}`);*/
var soma = x+y;
var sub = x-y;
var mult = x*y;
var div = x/y;
var rest = x%y;
var exp = x**y;
document.write(`A soma deu ${soma}`);
document.write("<br>"); //"<br>" dá um newline para o próximo document.write
document.write(`A subtração deu ${sub}`);
document.write("<br>");
document.write(`A multiplicação deu ${mult}`);
document.write("<br>");
document.write(`A divisão deu ${div} com resto igual a ${rest}`);
document.write("<br>");
document.write(`A exponenciação deu ${exp}`);
document.write("<br>");
/* Operadores relacioais
== igualdade
!= diferença
> maior que
< menor que
>= maior ou igual
<= menor ou igual
*/
var test1 = x>y;
var test2 = x<y;
var test3 = x>=y;
var test4 = x<=y;
var test5 = x==y;
var test6 = x!=y;
var test7 = x===y;
if (test1 == true){
    document.write(` ${x} é maior que ${y}` );
}else {
    document.write(` ${x} não é maior que ${y}` );
};
document.write("<br>");
if (test2 == true){
    document.write(` ${x} é menor que ${y}` );
}else {
    document.write(` ${x} não é menor que ${y}` );
};
document.write("<br>");
if (test3 == true){
    document.write(` ${x} é maior ou igual a ${y}`)
}else{
    document.write(`${x} não é maior ou igual a ${y}`)
};
document.write("<br>");
if (test4 == true){
    document.write(` ${x} é menor ou igual a ${y}` );
}else {
    document.write(` ${x} não é menor ou igual a ${y}` );
};
document.write("<br>");
if (test5 == true){
    document.write(` ${x} é igual a ${y}` );
}else {
    document.write(` ${x} não é igual a ${y}` );
};
document.write("<br>");
if (test6 == true){
    document.write(` ${x} é diferente de ${y}`)
}else{
    document.write(`${x} não é diferente de ${y}`)
};
document.write("<br>");
if (test7 == true){
    document.write(`${x} e ${y} são do mesmo tipo`)
}else{
    document.write(`${x} e ${y} não são do mesmo tipo`)
}