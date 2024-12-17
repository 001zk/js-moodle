//Uma característica peculiar do JavaScript é que as variáveis podem ser usadas antes de serem declaradas, sem causar um erro. Esse comportamento é conhecido como "elevação " ou "hoisting". Ele ocorre porque, quando um script é carregado, o JavaScript move as declarações de variáveis para o início (topo) do escopo.
console,log(x)
var x = 10;
console.log(x);

//No exemplo acima, a primeira declaração console.log(x); não gera um erro porque a declaração de  x foi elevada para o topo do escopo, mas como a inicialização ocorre depois, o valor da variável é undefined .

