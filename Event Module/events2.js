const {inherits} = require('util')
const {EventEmitter}=require ('events')

function Character(name){
    this.name=name
}

inherits(Character,EventEmitter)

const test = new Character('chapolin')

test.on('help',()=> console.log(`eu o ${test.name} colorado!`))

console.log('quem poderá me defender? ')
test.emit('help')
