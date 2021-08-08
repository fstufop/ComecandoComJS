//Verificar se é dia, tarde ou noite
var dataCompleta, horaAtual;
dataCompleta = new Date;
diaMes = dataCompleta.getDay();
horaAtual = dataCompleta.getHours();

if (horaAtual < 12){
    document.writeln("Bom dia cuzão")
} else if(horaAtual > 18){
    document.writeln("Boa noite arrombado")
} else{
    document.writeln(`Boa tarde dedo no cú`)
}
document.write("<br>")
if (diaMes < 15){
    document.writeln("Estamos na primeira quinzena")
} else if(diaMes >= 15 && diaMes <= 17){
    document.writeln(`Caralho cacaroto, já estamos no meio do Mês`)
} else{
    document.writeln(`Caralho jow, já passou da metade do mês`)
}