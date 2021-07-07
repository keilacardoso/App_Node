const questions = [
    "O que eu aprendi hoje?",
    "O que me deixou feliz hoje?",
    "O que me deixou triste hoje?",
]

const ask = (index = 0) =>{
    process.stdout.write(questions[index] + "\n")
}

ask()
const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()
    }
    
})

process.on('exit', () =>{
    console.log(`
    Que legal!

    Você aprendeu: ${answers[0]}

    O que te deixou feliz foi: ${answers[1]}

    O que me deixou triste foi: ${answers[2]}
    `)
})