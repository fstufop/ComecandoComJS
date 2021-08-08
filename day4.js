// Validar se candidato pode ou não iniciar o processo de CNH
var nome, idade;
nome = prompt('Digite o nome do candidato:');
idade = prompt("Digite a idade do canditato:");
if (parseInt(idade)>=18){
        alert(`O candidato ${nome} está apto a iniciar o processo`)
}else{
        alert(`O candidato ${nome} não está apto a iniciar o processo`)
};
console.log(nome,idade);
if (parseInt(idade)>=18){
    document.write(`O candidato ${nome} está apto a iniciar o processo`)
}else{
    document.write(`O candidato ${nome} não está apto a iniciar o processo`)
};