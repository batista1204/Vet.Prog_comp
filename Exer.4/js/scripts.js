function exervet4(){
    let vet1 = []
    let vet2 = []
    let conta 
    let media = 0


    for(conta = 0; conta < 8; conta++){
            vet1[conta] = Number(prompt(`Informe o ${conta + 1} numero desejado`))
            media = media + vet1[conta]
    }
    media = media / 8

    for(conta = 0; conta < 8; conta++){
        if(vet1[conta] > media){
            vet2.push(vet1[conta])
        }
    }
    alert(`A media é: ${media}, e os numeros maiores que a media são ${vet2}`)


}