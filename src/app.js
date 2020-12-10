
const start = document.getElementById('start')
const stope = document.getElementById('stop')
let strTime = document.getElementById('startTime')
let stpTime = document.getElementById('stopTime')
let finTime = document.getElementById('finTime')
let hTime = document.getElementById('heure')
let minTime = document.getElementById('min')
let secTime = document.getElementById('sec')
let moneyCounter = document.querySelector("#money")
let h = 0;
let min = 0;
let sec = 0;
let total ;

const srt = function startTimer(){
    setInterval(
        function(){
            hTime.innerHTML = h
            minTime.innerHTML = ' : ' + min
            secTime.innerHTML = ' : ' + sec++
            if(sec == 61){
                sec = 0;
                min++
                if(min == 60){
                    min = 0;
                    h++
                }
            }
        }, 1000  
    );
}
start.addEventListener("click", srt)

stope.addEventListener("click", function(){
    strTime.style.display = 'none'
    finTime.innerHTML = h + ' : ' + min + ' : ' + sec++  
    total = ((h*60)+min + (sec/60))*20
    console.log(total)
    moneyCounter.innerHTML = total + ' Ar'
})
if('serviceWorker' in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log('service worker');
        console.log(registration)
    }).catch(error => {
        console.log('failed sw');
        console.log(error)
    })
}

let listePc = [
    
];

const add = document.getElementById("addPc");
const modal = document.querySelector(".modal")
const delet = document.querySelector(".delete")
const remove = document.getElementById('removePc')
const idPc = document.querySelector('#idPc')
const namePc = document.querySelector('#namePc')
const save = document.getElementById("saveBtn")
delet.addEventListener("click", function(){
    modal.style.display = "none"
})
add.addEventListener("click", function(){
    console.log('pc is added')
    modal.style.display = "block"
})
save.addEventListener('click', function(){
    listePc.push({
        id: parseInt(idPc.value),
        nom: namePc.value
    });
    console.clear()
    for (let i = 0; i < listePc.length; i++) {
        console.log(listePc[i].nom)
        
    }
    namePc.value = '' 
    idPc.value = ''
})
remove.addEventListener("click", function(){
    console.log('pc is removed')
    let index = listePc.indexOf({
        id: idPc.value,
        nom: namePc.value
    }, 1)
    listePc.splice(index, 1)
    console.clear()
    for (let i = 0; i < listePc.length; i++) {
        console.log(listePc[i].nom)
    }
})


