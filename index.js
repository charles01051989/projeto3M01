const prompt = require('prompt-sync')();
let jogar = "S";
while (jogar == "S"){
console.log("Você acaba de ser contratado por uma empresa\nde ramo bem peculiar (telhas e máscaras) para melhorar a gestão em 4 meses.\nAo final do prazo você será contratado ou demitido.\nDica!Não gaste muito.\nPreste atenção nos eventos que ocorrem de forma aleatória e\nfaça escolhas coerentes.");
console.log();
const dinheiroInicial = 50000;
let dinheiro = 50000;
let etica = 0;
let multa = 0;
let pgtoPropina = 0;
let gestaoProfissional = 0;
const telha = {
    nome: "TELHAS",
    valorProduto: 100.0,
    impostoProduto: 0.2,
    lucroProduto: 0.7,
    quantidade: 0,
    precoCusto: function () {
      return this.valorProduto * (this.impostoProduto + 1);
      },
    precoVenda: function () {
      return this.valorProduto * (this.impostoProduto + 1) * (this.lucroProduto + 1);
    },
  };
  const mascara = {
    nome: "MÁSCARAS",
    valorProduto: 50.0,
    impostoProduto: 0.2,
    lucroProduto: 0.7,
    quantidade: 0,
    precoCusto: function () {
      return this.valorProduto * (this.impostoProduto + 1);
    },
    precoVenda: function () {
      return this.valorProduto * (this.impostoProduto + 1) * (this.lucroProduto + 1);
    },
  };
  const tabelaProdutos = [
    {
      Nome: "Telha",
      Valor: "R$100",
      ImpostoApagar: "20%",
      Lucro: "50%",
      Custo: "R$120",
      Venda: "R$180",
    },
    {
      Nome: "Máscara",
      Valor: "R$50",
      ImpostoApagar: "20%",
      Lucro: "50%",
      Custo: "R$60",
      Venda: "R$90",
    },
  ];
for (let i = 1; i <= 4; i++) {
  console.log(`>>>>>>>>${i}º MẼS<<<<<<<<`);
  const eventoAleatorio = ["CATÁSTROFE CLIMÁTICA", "PANDEMIA"];
  let aleatorio = Math.floor(Math.random() * eventoAleatorio.length);
  let valorAleatorio = eventoAleatorio[aleatorio];
  if (valorAleatorio == "CATÁSTROFE CLIMÁTICA") {
    console.log(
      ">>>>>Plantão BlueNEws informa<<<<<<\nA tempestade de granizo arrasou a cidade.\nTelhados foram destruídos.\nHá caos em toda a cidade"
    );
    console.log();
    console.log(
      "O time de prospecção de negócios recomenda o investimento em telhas "
    );
    console.log();
  }
  if (valorAleatorio == "PANDEMIA") {
    console.log(
      ">>>>>Plantão BlueNEws informa<<<<<<\nUm vírus mortal está assolando a sua região"
    );
    console.log();
    console.log(
      "O time de prospecção de negócios recomenda o investimento em máscaras de proteção contra vírus "
    );
    console.log();
  }
  //ESCOLHA INFORMAÇÃO
  let infoProduto = prompt(
    "Deseja acessar a tabela de produtos? Digite [S] ou [N] :  "
  ).toUpperCase();
  while (infoProduto != "S" && infoProduto != "N") {
    infoProduto = prompt(
      "Deseja acessar a tabela de produtos? Digite [S] ou [N] :  "
    ).toUpperCase();
  }
  if (infoProduto == "S") {
    console.table(tabelaProdutos);
  }
  let escolhaProdutoCompra = 0;
  for (let i = 0; escolhaProdutoCompra != 0 || escolhaProdutoCompra != 1; i++) {
    const escolhaProdutoCompra = +prompt(
      `Digite [0] para comprar ${telha.nome}, [1] para comprar ${mascara.nome}: `
    );
    console.log();
    if (valorAleatorio == "CATÁSTROFE CLIMÁTICA" && escolhaProdutoCompra == 1) {
      console.log(
        `Você acaba de cometer um péssimo negócio para a empresa\nO time de negócios recomendou investimento em ${telha.nome},\nmas você optou por comprar ${mascara.nome}`
      );
      gestaoProfissional--;
      console.log();
    } else if (
      valorAleatorio == "CATÁSTROFE CLIMÁTICA" &&
      escolhaProdutoCompra == 0
    ) {
      console.log("Sua gestão foi eficiente!");
      gestaoProfissional++;
      console.log();
    }
    if (valorAleatorio == "PANDEMIA" && escolhaProdutoCompra == 0) {
      console.log(
        `Você acaba de cometer um péssimo negócio para a empresa\nO time de negócios recomendou investimento em ${mascara.nome},\nmas você optou por comprar ${telha.nome}`
      );
      gestaoProfissional--;
      console.log();
    } else if (valorAleatorio == "PANDEMIA" && escolhaProdutoCompra == 1) {
      console.log("Sua gestão foi eficiente!");
      gestaoProfissional++;
      console.log();
    }
    if (escolhaProdutoCompra == 0) {
      const compraTelhas = +prompt(
        `Digite a quantidade a ser comprada de ${telha.nome} : `
      );
      telha.quantidade += compraTelhas;
      console.log(
        `Total da sua compra de telhas R$${telha.precoCusto() * compraTelhas}`
      );
      dinheiro = dinheiro - telha.precoCusto() * compraTelhas;
      break;
    } else if (escolhaProdutoCompra == 1) {
      const compraMascara = +prompt(
        `Digite a quantidade a ser comprada de ${mascara.nome} : `
      );
      mascara.quantidade += compraMascara;
      console.log(
        `Total da sua compra de máscaras R$${
          mascara.precoCusto() * compraMascara
        }`
      );
      dinheiro = dinheiro - mascara.precoCusto() * compraMascara;
      break;
    } else {
      console.log("escolha inválida");
    }
  }
  const listaEtica = ["PROPINA", "IMPOSTO"];
  let sortetica = Math.floor(Math.random() * listaEtica.length);
  let eticaAleatorio = listaEtica[sortetica];
  console.log();
  if (eticaAleatorio == "PROPINA") {
    console.log(
      "Acaba de chegar uma proposta para alavancar consideravelmente o crescimento da empresa,\npara tanto, autoridade pública solicita pagamento de propina de R$2000 "
    );
    let propina = prompt(
      "Deseja pagar a propina? Digite [S] ou [N] :  "
    ).toUpperCase();
    while (propina != "S" && propina != "N") {
      propina = prompt(
        "Deseja pagar a propina? Digite [S] ou [N] :  "
      ).toUpperCase();
    }
    if (propina == "S") {
      console.log("Além de gerar prejuízo para empresa, você foi antiético ");
      etica--;
      pgtoPropina = 2000.0;
      dinheiro -= pgtoPropina;
    } else if (propina == "N") {
      console.log("Parabéns você teve um comportamento digno ");
      etica++;
    }
  }
  //IMPOSTO
  if (eticaAleatorio == "IMPOSTO") {
    console.log(
      "Humm!, conselho fiscal informa que há tributos devidos e não pagos na sua empresa no valor de R$785,50"
    );
    let imposto = prompt(
      "Deseja pagar o imposto? Digite [S] ou [N] :  "
    ).toUpperCase();
    while (imposto != "S" && imposto != "N") {
      imposto = prompt(
        "Deseja pagar a propina? Digite [S] ou [N] :  "
      ).toUpperCase();
    }
    if (imposto == "N") {
      console.log("Além de gerar prejuízo para empresa, você foi antiético ");
      etica--;
      multa = 785.5 * 1.5;
      dinheiro -= multa;
      console.log(
        `Você foi penalizado em multa de 50% sobre o imposto devido e não pago no valor de R$${multa}`
      );
    } else if (imposto == "S") {
      console.log("Parabéns você teve um comportamento digno ");
      etica++;
    }
  }
  console.log();
  console.log(`Total do caixa após a transação R$${dinheiro}`);
  console.log(telha.quantidade, "telhas em estoque");
  console.log(mascara.quantidade, "máscaras em estoque");
  ///////////////////INSERIR OFERTA\\\\\\\\\\\\\\\\\\\
  const listaPedido = [7, 10, 5, 6, 20, 15, 12];
  let pedido = Math.floor(Math.random() * listaPedido.length);
  let pedidoAleatorio = listaPedido[pedido];
  console.log();
  //VENDA
  let escolhaProdutoVenda = 0;
  if (valorAleatorio == "PANDEMIA") {
    console.log(
      `Acaba de chegar um pedido de ${pedidoAleatorio} ${mascara.nome}`
    );
    console.log();
  }
  if (valorAleatorio == "CATÁSTROFE CLIMÁTICA") {
    console.log(
      `Acaba de chegar um pedido de ${pedidoAleatorio} ${telha.nome}`
    );
    console.log();
  }
  for (let i = 0; escolhaProdutoVenda != 0 || escolhaProdutoVenda != 1; i++) {
    const escolhaProdutoVenda = +prompt(
      `Digite [0] para vender ${telha.nome}, [1] para vender ${mascara.nome}: `
    );
    if (valorAleatorio == "CATÁSTROFE CLIMÁTICA" && escolhaProdutoVenda == 1) {
      console.log(`Que pena, você perdeu uma boa opotunidade de negócios.`);
      gestaoProfissional--;
    } else if (
      valorAleatorio == "CATÁSTROFE CLIMÁTICA" &&
      escolhaProdutoVenda == 0
    ) {
      console.log("Bom negócio!");
      gestaoProfissional++;
    }
    if (valorAleatorio == "PANDEMIA" && escolhaProdutoVenda == 0) {
      console.log(`Que pena, você perdeu uma boa oportunidade de negócios.`);
      gestaoProfissional--;
    } else if (valorAleatorio == "PANDEMIA" && escolhaProdutoVenda == 1) {
      console.log("Bom negócio!");
      gestaoProfissional++;
    }
    if (escolhaProdutoVenda == 0) {
      // console.log(telha.quantidade);
      let vendaTelhas = +prompt(
        `Digite a quantidade a ser vendida de ${telha.nome} : `
      );
      for (let i = 0; telha.quantidade - vendaTelhas < 0; i++) {
        console.log(`Você não possui a quantidade nescessária no estoque`);
        vendaTelhas = +prompt(
          `Digite a quantidade a ser vendida de ${telha.nome} : `
        );
      }
      for (let i = 0; pedidoAleatorio - vendaTelhas < 0; i++) {
        console.log(
          `A quantidade a ser vendida deve ser menor ou igual ao pedido`
        );
        vendaTelhas = +prompt(
          `Digite a quantidade a ser vendida de ${telha.nome} : `
        );
      }
      telha.quantidade -= vendaTelhas;
      console.log(
        `O total da sua venda de telhas R$${telha.precoVenda() * vendaTelhas}`
      );
      dinheiro = dinheiro + telha.precoVenda() * vendaTelhas;
      break;
    } else if (escolhaProdutoVenda == 1) {
      let vendaMascara = +prompt(
        `Digite a quantidade a ser vendida de ${mascara.nome} : `
      );
      for (let i = 0; mascara.quantidade - vendaMascara < 0; i++) {
        console.log(`Você não possui a quantidade nescessária no estoque`);
        vendaMascara = +prompt(
          `Digite a quantidade a ser vendida de ${mascara.nome} : `
        );
      }
      for (let i = 0; pedidoAleatorio - vendaMascara < 0; i++) {
        console.log(
          `A quantidade a ser vendida deve ser menor ou igual ao pedido`
        );
        vendaMascara = +prompt(
          `Digite a quantidade a ser vendida de ${mascara.nome} : `
        );
      }
      mascara.quantidade -= vendaMascara;
      console.log(
        `O total da sua venda de máscaras R$${
          mascara.precoVenda() * vendaMascara
        }`
      );
      dinheiro = dinheiro + mascara.precoVenda() * vendaMascara;
      break;
    } else {
      console.log("escolha inválida");
      console.log();
    }
  }
  console.log(`Balanço do ${i}º mês`);
  const saldoAtual = dinheiro - dinheiroInicial;
  const statusMes = [
    {
      Caixa: dinheiro,
      SaldoAtual: saldoAtual,
      Multas: multa,
      Etica: etica,
      Gestao: gestaoProfissional,
    },
    {
        EstoqueTelha : telha.quantidade,
        EstoqueMascara : mascara.quantidade,
    },
  ];
  console.table(statusMes)
}
const dinheiroFinal = dinheiro
const saldoFinal = dinheiro - dinheiroInicial
//RESULTADO FINAL
function projecao(x, y){
    const resultado = (saldoFinal * x)/y
    return resultado;
}
console.log(`Evolução de saldo esperado em R$ nos próximos 3 anos`);
const resultado = [
    {
        UmAno : projecao(12, 4),
        DoisAnos : projecao(24, 4),
        TresAnos : projecao(36 , 4),
    }
]
console.table(resultado);
function percent4(){
    const resPercent4 = (((dinheiroFinal/dinheiroInicial)-1)*100).toFixed(2);
    return resPercent4;
}
function percent1(){
    const resPercent1 = ((((dinheiroFinal/dinheiroInicial)-1)*100)/4).toFixed(2)
    return resPercent1;
}
const resultPercent4 = percent4 ();
const resultPercent1 = percent1 ();
// console.log(resultPercent4);
// console.log(resultPercent1);
if (resultPercent4 > 0){
    console.log(`Sua empresa cresceu ${resultPercent4}% considerando os 4 meses`);
    console.log(`Sua empresa cresceu ${resultPercent1}% ao mês considerando os 4 meses`);
}else {
    console.log(`Sua empresa teve prejuízo`);
    console.log(`>>>>>>VOCÊ ESTÁ DEMITIDO<<<<<<<`);
}
if(etica+gestaoProfissional >= 10){
  console.log("Sua gestão é ética e profissional");
}else if(etica+gestaoProfissional > 5 && etica+gestaoProfissional < 10){
  console.log("Sua gestão precisa melhorar quanto a ética e profissionalismo, porém você observa as leis na maior parte da sua gestão ");
}else if(etica+gestaoProfissional > 0 && etica+gestaoProfissional < 5){
  console.log("Sua empresa não observa as leis e não é profissional, contrate um bom advogado, caso não queira ser preso ");
}else if (etica+gestaoProfissional <= 0){
  console.log("Além de não saber administrar a empresa você pode ser preso a qualquer momento, ");
}
if (etica+gestaoProfissional >= 10 == true && resultPercent4 > 0 == true){
    console.log(">>>>>>VOCÊ PASSOU NO TESTE E ACABA DE SER CONTRATADO<<<<<<<");

}else if (etica+gestaoProfissional > 5 && etica+gestaoProfissional < 10 == true && resultPercent4 > 0 == true){
    console.log(">>>>>>VOCÊ PASSOU NO TESTE E ACABA DE SER CONTRATADO<<<<<<<");
}
else if(etica+gestaoProfissional > 0 && etica+gestaoProfissional < 5 == true){
    console.log(">>>>>>VOCÊ ESTÁ DEMITIDO<<<<<<<");
}
else if (etica+gestaoProfissional <= 0) {
    console.log(">>>>>>VOCÊ ESTÁ DEMITIDO<<<<<<<");
}
jogar = prompt(
    "Deseja jogar novamente? Digite [S] ou [N] :  "
  ).toUpperCase();
while (jogar != "S" && jogar != "N") {
    jogar = prompt(
      "Deseja jogar novamente? Digite [S] ou [N] :  "
    ).toUpperCase();
}
}