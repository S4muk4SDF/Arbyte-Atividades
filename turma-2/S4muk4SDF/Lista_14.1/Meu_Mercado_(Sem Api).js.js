const rs = require('readline-sync')
const axios = require('axios')

class Usuario {
  constructor(nome, saldoNoCartao) {
    this.nome = nome
    this.saldoNoCartao = saldoNoCartao
    this.carrinho = []
  }
}

class Produto {
  constructor(codigo, nome, valor) {
    this.codigo = codigo
    this.nome = nome
    this.valor = valor
  }
}

class Mercado {
  constructor() {

    let maca = new Produto(1, 'Carne', 24.50)
    let uva = new Produto(2, 'Leite', 3.40)
    let uvaSemCaroco = new Produto(3, 'Papel Higienico', 5.50)
    this.produtos = [maca, uva, uvaSemCaroco]

  }

  listarProdutos() {

    for(let i = 0; i < this.produtos.length; i++) {
      let produtoAtual = this.produtos[i]
      console.log(`Id: [${produtoAtual.codigo}] - Nome: ${produtoAtual.nome} - Valor: R$${produtoAtual.valor}`);
    }
  }
}

let usuario = new Usuario('Samuel', 100)
let mercado = new Mercado()

function passarCartao(valorTotalDaCompra) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (valorTotalDaCompra <= usuario.saldoNoCartao) {
          usuario.saldoNoCartao = usuario.saldoNoCartao - valorTotalDaCompra
          resolve("Transação aceita!")
        } else {
          reject("Saldo Insuficiente!")
        }
      }, 5000);
    })
  }

function entregaCarrinho(cep, numero){
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            axios.get(cep)
                .then(res =>{
                    console.log(`Carrinho entregue na: ${res.data.logradouro}, ${numero}`);   
                })
    }, 5000)
  })
}


function comprar() {
    
  mercado.listarProdutos()

  
  let valorTotalDaCompra = 0
  let produtoEscolhido = rs.question("Escolha seu produto: ")

  while (produtoEscolhido > 0 && produtoEscolhido < 4) {

    let produto = mercado.produtos[produtoEscolhido-1]
    console.log("Produto que o usuário escolheu é: " + produto.nome)

    usuario.carrinho.push(produto)

    valorTotalDaCompra = valorTotalDaCompra + produto.valor

    console.log(`\nValor total da compra: R$${valorTotalDaCompra}\n`);
    // console.log("\nAté agora, a sua compra está saindo R$ " + valorTotalDaCompra + "\n")

    let continuar = rs.questionInt("Mais alguma coisa?\n1 - sim\n2 - não\n")

    if (continuar === 1) {
  
      console.log('\n'); 

      mercado.listarProdutos()

      produtoEscolhido = rs.question("Escolha seu produto: ")

    } 
    else {

      break

    }
  }

  console.log("Carrinho: ")
  console.log(usuario.carrinho)
  console.log("E o total da sua compra é de R$ " + valorTotalDaCompra)
  
  console.log('\nDeseja que o carrinho seja entregue na sua casa?')
  console.log('Digite 1 caso SIM');
  console.log('Digite 2 caso NÂO');
  let perguntaEntregaCarrinho = rs.questionInt('')

    if (perguntaEntregaCarrinho === 1){

        let perguntaCep = rs.question('Digite seu CEP: ')
        let perguntaNumeroCasa = rs.questionInt('Digite o número da sua casa: ')
        let cepUsuario = ` https://api.postmon.com.br/v1/cep/${perguntaCep}`

        entregaCarrinho(cepUsuario, perguntaNumeroCasa)
            .then(res =>{
                
            })
            .catch(err =>{
                console.log(err);
            })
    }

  
  console.log("Processando...")

  passarCartao(valorTotalDaCompra)
    .then(respostaQuandoDeuCerto => {
        console.log(respostaQuandoDeuCerto);
    })
    .catch(respostaQuandoDeuErrado => {

      console.log(respostaQuandoDeuErrado)
    })
}

comprar()

