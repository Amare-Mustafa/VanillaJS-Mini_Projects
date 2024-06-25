const value = document.querySelector("#number");
const btns = document.querySelectorAll(".btn");

let counter = 0;

function handleButtonClick(e){
    const classList = e.currentTarget.classList;

    switch (true) {
        case classList.contains('decrease'):
            counter--;
            break;
        case classList.contains('increase'):
            counter++;
            break;
        case classList.contains('reset'):
            counter = 0;
            break;
    }

    value.style.color = counter > 0 ? "green" : counter < 0 ? "red" : "black";

    
    value.textContent = counter;
}

btns.forEach(btn => {
    btn.addEventListener("click",handleButtonClick);
});

/*const value = document.querySelector("#number");
const btns = document.querySelectorAll(".btn");

let counter = 0;

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            counter--;
        }else if(styles.contains('increase')){
            counter++;
        }else if(styles.contains('reset')){
            counter = 0;
        }

    });
});             */