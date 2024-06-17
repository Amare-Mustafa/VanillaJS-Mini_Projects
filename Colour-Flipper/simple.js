const colours = [
    "#FF5733", // Red-Orange
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FF33A1", // Pink
    "#FF9F33", // Orange
    "#8D33FF", // Purple
    "#33FFF6", // Cyan
    "#FFD700", // Gold
    "#4CAF50", // Forest Green
    "#FF4500"  // Orange-Red
];

const btnChangeColour = document.querySelector('#cta-changeColour');
const mainPart = document.querySelector('main');
const colourName = document.querySelector('.colourName');

let colourNum = 0;
btnChangeColour.addEventListener('click',() => {
    mainPart.style.backgroundColor = colours[colourNum];

    if(colourNum >=9){
        colourNum = 0;
    }else{
        colourNum++;
    }
    console.log(colourNum);

})