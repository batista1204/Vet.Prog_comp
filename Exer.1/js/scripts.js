function aprendVetor (){
    let vet = [] 
    vet.push("São paulo") // adiciona o valor ao vetor
    vet.length // mostra o tamanho do vetor
    vet.pop() // remove o último valor do vetor
    vet.unshift("Rio de janeiro") // adiciona o valor no começo do vetor
    vet.shift() // remove o primeiro valor do vetor
    vet.indexOf("São paulo") // procura o valor no vetor e retorna o índice
    vet.includes("São paulo") // verifica se o valor está no vetor e retorna true ou false
    vet.sort() // ordena o vetor em ordem alfabética
    vet.reverse() // inverte a ordem do vetor
    vet.splice(1, 2) // remove 2 valores a partir do índice 1
    vet.slice(1, 3) // retorna uma cópia do vetor a partir do índice 1 até o índice 3 (não inclui o índice 3)
    vet.forEach(function(item, index) { // percorre o vetor e executa a função para cada item
        console.log(`Item ${index}: ${item}`); // exibe o item e seu índice
    });
    vet.forEach(item => console.log(item)); // outra forma de percorrer o vetor
    vet.map(item => item.toUpperCase()); // cria um novo vetor com os itens em maiúsculas
    vet.filter(item => item.startsWith("S")); // cria um novo vetor com os itens que começam com "S"
    vet.reduce((acc, item) => acc + item, ""); // concatena todos os itens do vetor em uma única string
    vet // mostra tudo que tem no vetor
    vet = vet.filter(item => item.length > 5); // filtra o vetor para manter apenas os itens com mais de 5 caracteres
    vet = vet.map(item => item.toLowerCase()); // transforma todos os itens do vetor em minúsculas
    vet = vet.sort((a, b) => a.localeCompare(b)); // ordena o vetor em ordem alfabética
    vet = vet.reverse(); // inverte a ordem do vetor
    vet = vet.slice(0, 3); // retorna os 3 primeiros itens do vetor
    vet = vet.slice(-3); // retorna os 3 últimos itens do vetor
    vet = vet.concat(["Novo item"]); // adiciona um novo item ao final do vetor
}

function exervet1() {
    let vetor = [];
    let numpar = 0;
    let numimpar = 0;

    // Entrada de dados
    for (let i = 0; i < 6; i++) {
        vetor.push(Number(prompt(`Informe o ${i + 1}º número:`)));
    }

    // Processamento
    let par = [], impares = []
    for (let i = 0; i < 6; i++) {
        if (vetor[i] % 2 === 0) {
            par.push(vetor[i])
        } else {
            impares.push(vetor[i])
        }
    }

    // Saída final
    alert(`Quantidade de números pares: ${numpar}, os elementos pares são: ${par}`);
    alert(`Quantidade de números ímpares: ${impares}, os elementos imparas são: ${impares}`);
}