function exemplo() {
console.log(x)
let x = 10;
}
exemplo();

//Com o ECMAScript 6, as palavras-chave let e const foram introduzidas para aprimorar o escopo de bloco e reduzir problemas associados ao hoisting. Elas também são elevadas, mas, ao contrário do var, não podem ser acessadas antes de sua declaração, resultando em um erro se tentarmos usá-las antes de sua definição. Assim, elas são elevadas ao início do bloco, mas não podem ser acessadas antes da linha de declaração, criando um "Temporal Dead Zone" (Zona Morta Temporal). Assim, se uma variável let for usada antes de sua declaração, um erro será gerado. 

//Veja um exemplo no quadro acima:

