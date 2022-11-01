let dateYear = new Date();
const anoA = dateYear.getFullYear(); // ano atual
let nome;
let anoN;
let idade;

function inicio(){

    nome = prompt('Digite seu nome: ')
    anoN = Number(prompt('Digite seu ano de nascimento: '));
    
    if(anoN >= 1922 && anoN <= 2021){
        mostrarIdade();
    }else{
        error();
    }

}

function mostrarIdade(){
    idade = anoA - anoN
    alert(`Você irá fazer ${idade} anos em ${anoA}`)
}


function error(){
    alert('[ERRO] digite entre 1922 até 2021')
    inicio();
}

inicio()
