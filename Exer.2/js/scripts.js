function exervet2() {
    let vetor = []
    let conta 

    for(conta = 0; conta<10; conta++){
        vetor.push(Number(prompt(`Informe o ${conta + 1} numero desejado`)))
    }
    
    for(conta = 0; conta<10 ; conta++){
        if(vetor[conta] % 2 == 0){
            vetor[conta] = vetor[conta] + 10
        }
        else{
            vetor[conta] = vetor[conta] * 5
        }
    }
    alert(`A sequencia é ${vetor}`)

}