const {EventEmitter}=require ('events')

const ev = new EventEmitter()
const list='Dizendo algo'
// console.log(ev)


// Executa apenas 1 vez
ev.once(list,(message)=>{
    console.log('Escutando algo'+message)
})


ev.on(list,(message)=>{
    console.log('Escutando algo'+message)
})

ev.emit('Dizendo algo'," O que foi dito")
ev.emit('Dizendo algo', ' 5')