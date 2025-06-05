function exervet3() {
   let vetor = []
    let conta
    let gostou = 0
    let gostoumuito = 0
    let naogostou = 0
    let porc

    for(conta = 0; conta <10; conta++){
        do{
        vetor[conta] = (Number(prompt(`Informe a nota ${conta + 1} de satisfatação / 1 - Gostou Muito / 2 - Gostou / 3 Não gostou`)))
        }
        while(vetor[conta] != 1 && vetor[conta] != 2 && vetor[conta] !=3)
    }

    for(conta = 0; conta<10; conta++){
        if(vetor[conta] == 1){
            gostoumuito++
        }
        else if(vetor[conta] == 2){
            gostou++
        }
        else {naogostou++}
        }
        porc = naogostou / 10 * 100

        alert(`Quantidade de quem gostou muito: ${gostou}, gostou: ${gostoumuito} e não gostou: ${naogostou}`)
        alert(`% de qm gostou muito: ${porc}%`)
    }