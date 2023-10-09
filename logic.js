document.addEventListener("DOMContentLoaded",function(){
    const height_cst = document.getElementById("height")
    const weight_cst = document.getElementById("weight")
    const result = document.getElementById("result")
    const but = document.getElementById("but")

    but.addEventListener("click" , function(){
        let h = (+height_cst.value) /100
        let m = +weight_cst.value
        let imt = m / h**2
        result.value=imt.toFixed(2)
    })
    if ("serviceWorker" in navigator){
        navigator.serviceWorker.register('sw.js')
        .then(registration=>{console.log("sw registred",registration)})
        .catch(error=>{console.log("SW failed",error)})
    }
})