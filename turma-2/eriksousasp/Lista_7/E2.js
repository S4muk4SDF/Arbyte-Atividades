var rs = require('readline-sync');

var numero = rs.questionInt('Digite um numero maior que 1: ')

while (numero <= 1) {
    var numero = rs.questionInt('Digite um numero maior que 1: ')
}

function primo(numero) {
    var divisores = 0;
    for (i = 0; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++
        }
    }
    if (divisores == 2) {
        return console.log('Este número é primo ;)');
    } else {
        return console.log('Este número não é primo :( ');
    }
}
console.log(primo(numero))