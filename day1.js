var nome = prompt("Qual \u00e9 seu nome, j\u00f3vem?");
var age = prompt("E sua idade?");
var gender = prompt("Qual o seu sexo?" + " m ou f ");
/* "var" cria uma váriável com o valor descrito após o = 
Neste caso como usamos o comando "prompt", um janela irá mostrar a mensagem que está dentro do () e receberá do usuário
o valor que será armazenado na variável.
sintaxe: var nome da variável = 
*/

for(var data of [
    nome,
    age,
    gender
]){
    console.log(data);
}
/* o statement "for" gera um loop 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for
for ([inicialização]; [condição]; [expressão final])
   declaração
*/

alert(`Muito bem ${nome} então você tem ${age}anos?`);
if (gender === "m"){
    document.write(`Ai Jão, o arrombado do ${nome} tem ${age} anos.`);
}
    else if (gender === "f"){
        document.write(`Ai Jão, a kamofa da ${nome} tem ${age} anos.`);
} else{ 
    document.write(`Tá burro ${nome} ? `);
}
console.log(`Cochicha aqui pra nós o genero ${gender}`);

/* "alert" retorna o que está entre parênteses em uma caixa de diálogo
`` transforma tudo no interior em string, e ${} faz com que a variável no interior das chave vire string*/
