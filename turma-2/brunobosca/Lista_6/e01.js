
let readlineSync = require('readline-sync')
let jogadorA = readlineSync.question('Qual o seu nome? Você será o jogador A ')
let jogadorB = readlineSync.question('Qual o seu nome? Você será o jogador B ')
let numerosJA = [];
let numerosJB = [];
for(let contador = 0; contador < 5; contador++) {
    let numA = readlineSync.questionInt(`${jogadorA} por favor, digite cinco numeros de 0 a 10: `)
    numerosJA.push(numA)
}
console.log('================')
for(let contador = 0; contador < 5; contador++) {
    let numB = readlineSync.questionInt(`${jogadorB} por favor, digite cinco numeros de 0 a 10: `)
    numerosJB.push(numB)
}
console.log(`${jogadorA} Seus números são: ${numerosJA} `)
console.log('===============')
console.log(`${jogadorB} Seus números são: ${numerosJB} `)
for (let contador = 0; contador <5; contador++) {
    if (numerosJA.indexOf(numerosJB[contador]) > -1) {
        console.log(`Os números iguais são ${numerosJB[contador]}`)
        }
}
console.log('==============================')







