const rs = require('readline-sync')

class Usuario {
  constructor(nome, saldoNoCartao) {
    this.nome = nome
    this.saldoNoCartao = saldoNoCartao
    this.carrinho = []
  }
}

// criei o pedro e dei 50 reais pro pedro
let usuario = new Usuario('Pedro', 50)

// tô criando um produto, que tem código, nome e valor
class Produto {
  constructor(codigo, nome, valor) {
    this.codigo = codigo
    this.nome = nome
    this.valor = valor
  }
}

class Mercado {
  constructor() {
    // colocando produtos no mercado
    // Quando eu crio um produto, esses são os parâmetros
    // constructor(codigo, nome, valor)
    let maca = new Produto(
      1, // código = id
      'Maçã', // nome
      2.30 // valor, R$ 2
    )
    let uva = new Produto(2, 'Uva', 8)
    let uvaSemCaroco = new Produto(3, 'Uva Sem Caroço', 16)
    this.produtos = [maca, uva, uvaSemCaroco]

  }

  listarProdutos() {

    // this.produtos: [
    //   0: Produto { codigo: 1, nome: 'Maçã', valor: 2.3 },
    //   1: Produto { codigo: 2, nome: 'Uva', valor: 8 },
    //   2: Produto { codigo: 3, nome: 'Uva Sem Caroço', valor: 16 }
    // ]
    // this.produtos.length é o tamanho da lista que eu tenho
    // i++ é o que fala "vai pro próximo"
    // começo no 0 (let i = 0) e depois vou fazendo i++ ("vai pro próximo")
    // vou andar em cada produto e exibir na tela
    for(let i = 0; i < this.produtos.length; i++) {

      // pego o produto atual de acordo com o índice
      // [i] estou acessando o que tiver na posição i
      let produtoAtual = this.produtos[i]
      console.log("[" + produtoAtual.codigo + "] - " +
        produtoAtual.nome + " custa R$ " + produtoAtual.valor)
    }
  }
}

let roberto = new Usuario('Roberto', 25)
let mercado = new Mercado()

// dentro disso, eu tenho um usuário
// qual usuário? o Roberto que eu criei ali em cima
// então o usuário (que é, a Classe Usuário), tem as propriedades dele
// então, pra acessar a propriedade, eu uso o PONTO
// mercado . dono (acessei a propriedade dono)
// mercado . dono . nome (acessei a propriedade nome do dono do mercado)
// pensar no . como se fosse um DO (dô)
// console.log("Mostrando o que eu encontro dentro do mercado.dono")
// console.log(mercado.dono)
// console.log("\n\n\n\n")
// console.log("Bem-vindo ao " + mercado.nome + "! Aqui quem manda é o " + mercado.dono.nome + "\n\n\n")

function comprar() {

  mercado.listarProdutos()
  let produtoEscolhido
  let valorTotalDaCompra = 0
  produtoEscolhido = rs.question("Escolha seu produto")

  // console.log("Opção: " + produtoEscolhido)
  while (produtoEscolhido > 0 && produtoEscolhido < 4) {

    // encontrando o produto escolhido dentro da lista de produtos do mercado
    let produto = mercado.produtos[produtoEscolhido-1]
    console.log("Produto que o usuário escolheu é: " + produto.nome)

    // adicionar ao carrinho o produto, que é um objeto Produto
    // é um objeto da classe produto quando criei o mercado
    usuario.carrinho.push(produto)
    valorTotalDaCompra = valorTotalDaCompra + produto.valor

    // valorTotalDaCompra += produto.valor é o mesmo comando da linha acima
    console.log("\nAté agora, a sua compra está saindo R$ " + valorTotalDaCompra + "\n")
    let continuar = rs.questionInt("\n\n\nMais alguma coisa?\n1 - sim\n2 - não\n")

    // se o continuar for 1, a resposta foi "sim" e o usuário quer continuar
    if (continuar === 1) {
      
      // mostro a lista de novo
      mercado.listarProdutos()

      // pergunto para o usuário qual o produto que ele quer
      produtoEscolhido = rs.question("Escolha seu produto")
    } // se não for 1, quer dizer que ele não quer continuar
    else {
      break
    }
  }

  // só estou mostrando o carrinho no final
  console.log("Carrinho: ")
  console.log(usuario.carrinho)
  console.log("E o total da sua compra é de R$ " + valorTotalDaCompra)
  console.log("Processando...")
  passarCartao(valorTotalDaCompra)
    .then(respostaQuandoDeuCerto => {
      // quando eu chamar o resolve dentro da promise
      // vem para o then
      // dentro do respostaQuandoDeuCerto eu capturo o que eu passei de parâmetro
      // para o resolve
      // se quando eu chamei o resolve, eu chamei assim resolve("TRANSAÇÃO ACEITA")
      // o que vai vir no respostaQuandoDeuCerto é o "TRANSAÇÃO ACEITA"
      console.log(respostaQuandoDeuCerto) // e o output esperado desse console.log é TRANSAÇÃO ACEITA
    })
    .catch(respostaQuandoDeuErrado => {
      // quando eu chamar o reject dentro da promise
      // vem para o catch
      // dentro do respostaQuandoDeuErrado eu capturo o que eu passei de parâmetro
      // para o reject
      // se quando eu chamei o reject, eu chamei assim reject("SALDO INSUFICIENTE")
      // o que vai vir no respostaQuandoDeuErrado é o "SALDO INSUFICIENTE"
      console.log(respostaQuandoDeuErrado)
    })
}

function passarCartao(valorTotalDaCompra) {
  // aqui funciona também sem setTimeout
  // setTimeout NÃO É OBRIGATÓRIO
  // if (valorTotalDaCompra <= usuario.saldoNoCartao) {
  //   resolve("TRANSAÇÃO ACEITA")
  // } else {
  //   reject("SALDO INSUFICIENTE")
  // }
  // o setTimeout não é sempre necessário
  // colocamos aqui, só para aguardar um pouco
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valorTotalDaCompra <= usuario.saldoNoCartao) {
        usuario.saldoNoCartao = usuario.saldoNoCartao - valorTotalDaCompra
        resolve("TRANSAÇÃO ACEITA")
      } else {
        reject("SALDO INSUFICIENTE")
      }
    }, 5000);
    // sempre esse número é dividido por 1000, então 5000 = 5seg, 3000 = 3seg e por aí
  })
}
comprar()