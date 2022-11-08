// var texto = "Hello world!";


// function imprimirTexto(textoParaImprimir){
//     console.log(textoParaImprimir);
// }


// console.log(texto);

/*
var numero = [1,2,3,4,5];

numero [1] = 10;

console.log(numero.length);
*/

// var nome = null;
// console.log(nome + 1);

// const url = "www.tre.com.br"
// // const nome;
// console.log(url);

// console.log( "1" + 1 );
// console.log( 15 % 2 );
// console.log( true + true );

// var colecao_produtos = [
//     { id: 1, nome: "Cooktop",           preco: 380 },
//     { id: 2, nome: "Geladeira",         preco: 1350 },
//     { id: 3, nome: "Notebook",          preco: 2500 },
//     { id: 4, nome: "Liquidificador",    preco: 100 }
// ];

// console.log(colecao_produtos);
// console.log(colecao_produtos[3]);


// var usuario = {
//     id: 2,
//     nome: "Rafael Nogueira Lemos",
//     idade: 19
// };

// var atendeAClassificacaoEtaria = usuario.idade >= 18

// if ( atendeAClassificacaoEtaria === true ) {

//     console.log("O usuário ainda pode assistir o conteúdo");

// } else {

//     console.log("O usuário ainda não pode assistir o conteúdo");

// }

// var colecao_series_programacao = [
//     { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
//     { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
//     { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
//     { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
//     { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
//     { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
//     { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
// ];

// var data_atual = new Date();

// var dia_semana = data_atual.getDay();

// var serie_do_dia = colecao_series_programacao[dia_semana];

// var nome_serie = serie_do_dia.nome;
// var horario_serie = serie_do_dia.horario;
// var sinopse_serie = serie_do_dia.sinopse;

// console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
// console.log("A seguir uma visão geral da série: " + sinopse_serie);

// var curiosidades_chuck_norris = [
//     { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},
//     { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
//     { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
//     { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
//     { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
//     { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},
//     { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},
//     { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
//     { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
//     { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."}
// ];

// var tamanho_colecao = curiosidades_chuck_norris.length;

// var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

// var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

// var titulo_curiosidade = curiosidade_escolhida.titulo;
// var conteudo_curiosidade = curiosidade_escolhida.conteudo;

// console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
// console.log("Título: " + titulo_curiosidade);
// console.log("Conteúdo: " + conteudo_curiosidade);

// var numero_1 = 5;
// var numero_2 = 3;
// var numero_3 = 10;

// var resultado = numero_3 * (numero_1 - numero_2);

// console.log(resultado++);

// console.log(1 + null);

// console.log(null + false);

// console.log(true + false );

// var colecao_livros = [
//     { id: 1, nome: "Dom Quixote",           numero_paginas: 863 },
//     { id: 2, nome: "O Senhor dos Anéis",    numero_paginas: 1200 },
//     { id: 3, nome: "As Crônicas de Nárnia", numero_paginas: 752 },
//     { id: 4, nome: "O Caçador de Pipas",    numero_paginas: 371 },
//     { id: 5, nome: "A Montanha Mágica",     numero_paginas: 848 }
// ];

// console.log( colecao_livros[5].nome );


var nota = 5;
var resultado = nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(resultado);