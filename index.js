
function handleCardNum(value,elem){
    if(value === 1){
        document.getElementById("part-one").textContent = elem.value
    }
    if(value === 2){
        document.getElementById("part-2").textContent = elem.value
    }
    if(value === 3){
        document.getElementById("part-3").textContent = elem.value
    }
    if(value === 4){
        document.getElementById("part-4").textContent = elem.value
    }
}

function handleCardOwner(elem){
    document.getElementById("card-holder-name").textContent = elem.value
}

function handleExpiration(text,elem){
    if(text === "year"){
        document.getElementById("expire-year").textContent = elem.value.slice(-2)
    }
    else if(text === "month"){
        document.getElementById("expire-month").textContent = elem.value+ '/'
    }
}

function appendCcv(elem){
    document.getElementById("ccv-number").textContent = elem.value
}

function handleccv(){
    document.getElementById("back-side").style.zIndex = "199"
    document.getElementById("card").style.transform = "rotateY(180deg)"
}

function removeccv(){
    document.getElementById("back-side").style.zIndex = "-2"
    document.getElementById("card").style.transform = "rotateY(0deg)"
}