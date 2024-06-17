const hex = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];

const mainPart = document.querySelector('main');
const btnChangeColour = document.querySelector('#cta-changeColour');

function genHexColour()
{
    let hexColour = '#';
    for(let i = 0; i < 6; i++){
        let randomNum = Math.floor(Math.random() * hex.length);
        hexColour += hex[randomNum];
    }
    return hexColour;
}
btnChangeColour.addEventListener('click', () =>{
    mainPart.style.backgroundColor = genHexColour();
})

