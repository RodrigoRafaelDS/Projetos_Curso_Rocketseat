// process.stdout.write("teste\n")

const questions=[
    "o que aprendi hoje?",
    "frase 2",
    "frase 3",
    "frase4"
]

const ask=(index=0)=>{
    process.stdout.write(questions[index]+"\n\n\n")
}

ask(0)

// process.stdin.on("data",data=>{
//     process.stdout.write(data.toString().trim()+"\n\n\n")
// })

