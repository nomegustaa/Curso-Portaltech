let nome = prompt('Digite seu nome: ');





function inicio(){

    let soma

    let n1 = Number(prompt('Digite o primeiro número: '))
    let n2 = Number(prompt('Digite o segundo número: '))

    let operacao = Number(prompt('Digite a operação a ser executada \n [1] = + \n [2] = - \n [3] = x \n [4] = % \n [5] - Sair'))

    switch(operacao){
        case 1:
            soma = n1 + n2
            alert(`o resultado de ${n1} + ${n2} é igual a ${soma}`)
            sair()

            break;
        case 2:
            soma = n1 - n2
            alert(`o resultado de ${n1} - ${n2} é igual a ${soma}`)
            sair()

            break;
       case 3:
            soma = n1 * n2
            alert(`o resultado de ${n1} x ${n2} é igual a ${soma}`)
            sair()

            break;
        case 4:
            soma = n1 / n2
            alert(`o resultado de ${n1} % ${n2} é igual a ${soma}`)
            sair()

            break;
        case 5:
            sair();
            break;
        default:
            alert('Essa opção não existe')
            inicio()
        }

}


function sair(){
    let sair = confirm('Deseja sair: ')
    if(sair){
        alert(`${nome}, foi um prazer ter você por aqui`)
        window.close()
    }else{
        inicio()
    }
}

inicio()