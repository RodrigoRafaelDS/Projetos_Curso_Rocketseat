const timeOut=5000
const fim =()=>console.log("fim")

let interval=setInterval(fim,500)


setTimeout(() => {
    clearInterval(interval)
}, timeOut);

