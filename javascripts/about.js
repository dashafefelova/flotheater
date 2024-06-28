document.addEventListener("DOMContentLoaded", function(){
    let ball2 = document.querySelector('.ballcursor2');
   window.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;
        ball2.animate([
            {transform : `translate(${x}px,${y}px)`}
        ],{
            duration: 3000
        })
   })

    document.querySelectorAll('.firstly img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.secondly').style.display = 'block';
    }
    });

    document.querySelectorAll('.secondly img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.thirthly').style.display = 'block';
    }
    });

    document.querySelectorAll('.thirthly img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.fourthly').style.display = 'block';
    }
    });

    let actor = document.querySelector(".firstactorleft img");

    actor.addEventListener("click", function(){

        if (actor.getAttribute("src") == "./image/Frame 245.png"){

            actor.src = "./image/Frame 245-2.png"}

        else{

            actor.src = "./image/Frame 245.png"}
    })

    let actortwo = document.querySelector(".secondactorleft img");

    actortwo.addEventListener("click", function(){

        if (actortwo.getAttribute("src") == "./image/actori10001 3 1.png"){

            actortwo.src = "./image/Frame 244.png"}

        else{

            actortwo.src = "./image/actori10001 3 1.png"}
    })




});