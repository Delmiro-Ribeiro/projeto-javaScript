import entradaDados from 'readline-sync';


console.log("======Calculadora de juros.======\n")

let valor_divida = entradaDados.question("Informe o valor da dívida: ");
let dias_atrasados = entradaDados.question("\nInforme quantos dias se passaram desde o vencimento do boleto: ");

if(valor_divida > 0){

    if(dias_atrasados > 0 && dias_atrasados <= 15){
        //Calculo de juros 5%
        let valor_juros = (valor_divida / 100) * 5;
        let valor_total_divida = Number(valor_divida) + Number(valor_juros);
        //Mostrando valores
        console.log("Valor original da dívida: R$ " + valor_divida);
        console.log("Dias atrasados: " + dias_atrasados);
        console.log("Taxa de juros: 5%");
        console.log("Valor total com juros: R$  " + valor_total_divida);
    }else if(dias_atrasados > 15){
        //Calculo de 10%
        let valor_juros = (valor_divida / 100) * 10;
        let valor_total_divida = Number(valor_divida) + Number(valor_juros);
        //Mostrando valores
        console.log("Valor original da dívida: R$ " + valor_divida);
        console.log("Dias atrasados: " + dias_atrasados);
        console.log("Taxa de juros: 10%");
        console.log("Valor total com juros: R$  " + valor_total_divida);

    }else{
        console.log("Valor original da dívida: R$ " + valor_divida);
        console.log("Dias atrasados: " + dias_atrasados);
        console.log("Valor total com juros: R$  0%")
    }
}