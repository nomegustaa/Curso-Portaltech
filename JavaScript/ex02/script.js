function calculadora(){
   let n1 = Number(prompt('Digite um número: '))
   let n2 = Number(prompt('Digite um número: '))
   let operacao = Number(prompt('Digite a operação a ser executada \n [1] = + \n [2] = - \n [3] = x \n [4] = %'))
   let soma
   switch(operacao){
    case 1:
        soma = n1 + n2
        alert(`o resultado de ${n1} + ${n2} é igual a ${soma}`)
        break;
    case 2:
        soma = n1 - n2
        alert(`o resultado de ${n1} - ${n2} é igual a ${soma}`)
        break;
   case 3:
        soma = n1 * n2
        alert(`o resultado de ${n1} x ${n2} é igual a ${soma}`)
        break;
    case 4:
        soma = n1 / n2
        alert(`o resultado de ${n1} % ${n2} é igual a ${soma}`)
        break;
    default:
        alert('0')
    }
}

calculadora()