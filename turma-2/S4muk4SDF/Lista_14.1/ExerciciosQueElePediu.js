// 1. Quando eu tentar passar o cartão, quero que ele passe o cartão para cada produto no carrinho
//    então só avisar que a compra foi concluída se todos os produtos passarem no cartão
//    Considerando esse carrinho
//    1) Produto { codigo: 3, nome: 'Uva Sem Caroço', valor: 16 },
//    2) Produto { codigo: 3, nome: 'Uva Sem Caroço', valor: 16 },
//    3) Produto { codigo: 3, nome: 'Uva Sem Caroço', valor: 16 },
//    4) Produto { codigo: 3, nome: 'Uva Sem Caroço', valor: 16 }
//    Tentar passar o primeiro produto e tirar do saldo do cartão
//    Tentar passar o segundo produto e tirar do saldo do cartão
//    e assim vai
//    a compra só é concluída se todos os produtos passarem
//    Então, seria legal se tivesse uma função para pagarProduto(produto)

// 2. Quando não passar todos os produtos, aviso quais produtos ficariam de fora (nome e valor do produto)






// 3. Depois de passar o cartão, perguntar se o usuário quer comprar mais alguma coisa, então, se ele quiser
//    voltar para o menu de produtos com um novo carrinho (criar um limparCarrinho no usuário ou uma classe Carrinho)


// 4. (Feito) Colocar uma opção para o carrinho ser entregue (usar promise e timeout)
//    (timeout para demorar um pouco para entregar)
//    Quando o usuário escolher que quer uma entrega, criar uma promise para realizar essa entrega e
//    agradecer pela compra logo depois da promise
//    "Agendamos sua entrega"
//    "Agradecemos sua compra!"
//    alguns segundos depois, com a promise concluída, aparecerá uma mensagem de "Carrinho entregue"


