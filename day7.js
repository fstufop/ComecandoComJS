var data = new Date();
var semana = data.getDay();
var semanaExtenso;
switch (semana){
    case 1:
        semanaExtenso = "Segunda"
        break;
        case 2:
        semanaExtenso = "Terça"
        break; 
        case 3:
        semanaExtenso = "Quarta"
        break;
        case 4:
        semanaExtenso = "Quinta"
        break;
        case 5:
        semanaExtenso = "Sexta"
        break;
        case 6:
        semanaExtenso = "Sábado"
        break;
        default:
        semanaExtenso = "Domingo"
        break;      
    }
document.write(`Hoje é o ${semana}º dia da semana, logo `)
document.write("hoje é " + semanaExtenso + ".");
