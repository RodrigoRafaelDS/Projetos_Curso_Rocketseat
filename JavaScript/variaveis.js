

let clima = true
console.log(typeof clima) // Tipo de variável

clima = "true"
console.log(typeof clima) // Tipo de variável

// const e let são variáveis locais
// var variável global 

// Escopo
{
    let nome = "rodrigo" // local
    var nome2="Rafael" // global
    const nome3="Sousa" // local
    console.log(nome)
    console.log(nome2)
    console.log(nome3)
}

// console.log(nome) // Não é global
console.log(nome2)
// console.log(nome3) // Não é global
