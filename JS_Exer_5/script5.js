const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
]

const captionArray = [
    "ArE yOu duMb??",
    "when I realized",
    "Me:",
    "I cOuLd NeeEveRrrR"
]

const randomMeme = document.getElementById("random-meme");
const randomCaption = document.getElementById("random-caption");
const generatorBtn = document.getElementById("generator-button");

generatorBtn.addEventListener('click', function(){
    let random1 = Math.floor(Math.random()*memeArray.length);
    let random2 = Math.floor(Math.random()*captionArray.length);

    randomMeme.src = memeArray[random1];
    randomCaption.innerText = captionArray[random2];

});