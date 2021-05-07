const timeOut=1000
const fim =()=>console.log("fim")

let timer = setTimeout(fim,timeOut)
console.log("2")
clearTimeout(timer)
