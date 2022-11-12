const containerEl = document.querySelector(".container");
const adjectives = ["beautiful", "loved", "worthy", "one of a kind", "free to live a healthy life"]

let adjIndex = 0
let characterIndex = 0
updateText();

function updateText(){
characterIndex++
containerEl.innerHTML = `<h1>I am ${adjectives[adjIndex].slice(0,characterIndex)}</h1>`;
if(characterIndex===adjectives[adjIndex].length){
    adjIndex++
    characterIndex = 0
}

if(adjIndex === adjectives.length){
    adjIndex = 0
}
setTimeout(updateText, 300)
}