

let photoSpace= document.getElementById("display")
document.querySelector(".hamilton").addEventListener("click" , hamiltonPhoto);
document.querySelector(".music").addEventListener("click", musicPhoto);
document.querySelector(".wicked").addEventListener("click", wickedPhoto);
document.querySelector(".phantom").addEventListener("click", phantomPhoto);
document.querySelector(".funny").addEventListener("click", funnyPhoto);
document.querySelector(".future").addEventListener("click", futurePhoto);
document.querySelector(".oklahoma").addEventListener("click", oklaPhoto);
document.querySelector(".west").addEventListener("click", westPhoto);
document.querySelector(".newsies").addEventListener("click", newsiesPhoto);
document.querySelector(".kinky").addEventListener("click", kinkyPhoto);





function hamiltonPhoto(){
photoSpace.style.backgroundImage = "url(https://media.giphy.com/media/jSpcm3BuYv7eQ2eeQu/giphy.gif)"
// photoSpace.classList.add("full")
// photoSpace.style.backgroundColor= "brown";
}

function musicPhoto(){
    photoSpace.style.backgroundImage = "url(https://media.giphy.com/media/MDZbLrlfKTO4y4yFTL/giphy.gif)";
    // photoSpace.style.backgroundRepeat = "no-repeat";
}

function wickedPhoto(){
    photoSpace.style.backgroundImage = "url(https://media.giphy.com/media/nq2VDouzZsgw8y0rN4/giphy.gif)"
}

function phantomPhoto(){
    photoSpace.style.backgroundImage = "url(https://media.giphy.com/media/oHwYt2BNJF2GYlT2aL/giphy.gif)"
}

function funnyPhoto(){
    photoSpace.style.backgroundImage = "url(https://media.giphy.com/media/ar2u3oiAjqUUM/giphy.gif)"
}

function futurePhoto(){
    photoSpace.style.backgroundImage = "url(https://media.giphy.com/media/CkYl1qlzkxPRbklfXx/giphy.gif)"
}

function oklaPhoto(){
    photoSpace.style.backgroundImage = "url(https://media.giphy.com/media/Id156iXo0UZSEpXLLp/giphy-downsized-large.gif)"
}

function westPhoto(){
    photoSpace.style.backgroundImage = "url(https://media.giphy.com/media/8MdlNK9D79cd1ivOvE/giphy-downsized-large.gif)"
}

function newsiesPhoto(){
    photoSpace.style.backgroundImage = "url(https://media.giphy.com/media/3o6ZtgHg1TSukf4C6A/giphy.gif)"
}

function kinkyPhoto(){
    photoSpace.style.backgroundImage = "url(https://media.giphy.com/media/l4hLPsldHc2BfOulO/giphy.gif)"
}

