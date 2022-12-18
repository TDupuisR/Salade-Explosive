const buttonAppend = document.querySelector("#btnA");
const buttonRemove = document.querySelector("#btnR");
const list = document.querySelector("#list");

const body = document.querySelector("body");
const button = document.querySelector("#btnNM");
const h1 = document.querySelector("h1");

const legumes = ["Fraise", "Framboise", "Abricot", "Ananas", "Pèche", "Banane", "Mangue", "Citron", "Melon", "Pastèque", "Kiwi"];

let isNight = false;
let NbList = 0;

button.addEventListener("click", function(){
    if (isNight == false){
            body.style.backgroundColor = "#212100";
            body.style.color = "#f1f1f1";
            isNight = true;
    }
    else{
        body.style.backgroundColor = "#f1f1f1";
        body.style.color = "#000000";
        isNight = false;
    }
})

buttonRemove.addEventListener("click", function(){
    list.remove();
    buttonAppend.remove();
    buttonRemove.remove();
    var img = document.getElementById("salade");
    img.src = 'images/Explosion.png';
    setTimeout(function(){
        img.src = 'images/Cendre.png';
    }, 2000);
})
buttonAppend.addEventListener("click", function(){
    let num = Math.floor(Math.random() * 11);

    const li = document.createElement("li");
    const text = document.createTextNode(legumes[num]);

    li.append(text);
    list.append(li);
    NbList = NbList+1;
})