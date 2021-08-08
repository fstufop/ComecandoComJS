// Calcular horas extra
var cargaHorariaSemanal = 44;
var saldoHoras = 0;
var funcionário = prompt(`Informe nome do funcionário`);
var horasTrabalhadas = prompt(`Informe o total de horas trabalhadas pelo funcionário`,`Digite aqui`);
var dataCompleta = new Date;
var mes = dataCompleta.getMonth();
if (mes = 0 ){
    mes = "Janeiro"
}else if (mes = 1){
    mes = "Fevereiro"
}else if (mes = 2){
    mes = `Março`
}else if (mes = 3){
    mes = "Abril"
}else if (mes = 4){
    mes = "Maio"
}else if (mes = 5){
    mes = "Junho"
}else if (mes = 6){
    mes = "Julho"
}else if (mes = 7){
    mes = "Agosto"
}else if (mes = 8){
    mes = "Setembro"
}else if (mes = 9){
    mes = "Outubro"
}else if (mes = 10){
    mes = "Novembro"
}else if (mes = 11){
    mes = "Dezembro"
}else{
    mes = "Deu zebra"
}
saldoHoras = horasTrabalhadas-cargaHorariaSemanal; 

if (saldoHoras > 0){
    document.write(`O funcionário ${funcionário} fez ${saldoHoras} horas extras no mês de ${mes}`)
}
