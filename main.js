const but__left = document.querySelector(".but__left");

const but__right = document.querySelector(".but__right");

const slider__line = document.querySelector(".slider__line");

let temp_move = 0;

const change_minus = () =>{
    temp_move +=320;
    if (temp_move>0) temp_move = -960;
    slider__line.style.left=`${temp_move}px`
}



const change_plus = () =>{
    temp_move -=320;
    if (temp_move<=-1280) temp_move = 0;
    slider__line.style.left=`${temp_move}px`
}
but__left.addEventListener("click", change_minus);
but__right.addEventListener("click", change_plus);


