var globalVar = 'Sou uma variável global';
console.log(globalVar);
function exemplo(){
    console.log(globalVar); // acessível aqui
}
exemplo();
