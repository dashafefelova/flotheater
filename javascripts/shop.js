document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.imgshop img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = img.getAttribute('src');
    }
    });

    document.querySelector('.popup span').onclick = () => {
        document.querySelector('.popup').style.display = 'none';
    };  


    let ballii = document.querySelector('.ballcur');
    window.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;
        ballii.animate([
            {transform : `translate(${x}px,${y}px)`}
        ],{
            duration: 3000
        })
   })


    let bask = document.querySelector(".basketone img");

    bask.addEventListener("click", function(){

        if (bask.getAttribute("src") == "./image/Frame 230.png"){

         bask.src = "./image/Frame 228-2.png"}

        else{

         bask.src = "./image/Frame 230.png"}
    })

    let basktwo = document.querySelector(".baskettwo img");

    basktwo.addEventListener("click", function(){

        if (basktwo.getAttribute("src") == "./image/Frame 229-2.png"){

         basktwo.src = "./image/Group 57-2.png"}

        else{

         basktwo.src = "./image/Frame 229-2.png"}
    })

    let baskthree = document.querySelector(".basketthree img");

    baskthree.addEventListener("click", function(){

        if (baskthree.getAttribute("src") == "./image/Frame 229-2.png"){

         baskthree.src = "./image/Group 57-2.png"}

        else{

         baskthree.src = "./image/Frame 229-2.png"}
    })

    let baskfour = document.querySelector(".basketfour img");

    baskfour.addEventListener("click", function(){

        if (baskfour.getAttribute("src") == "./image/Frame 231 2.png"){

         baskfour.src = "./image/Group 57 2.png"}

        else{

         baskfour.src = "./image/Frame 231 2.png"}
    })

    let baskfive = document.querySelector(".basketfive img");

    baskfive.addEventListener("click", function(){

        if (baskfive.getAttribute("src") == "./image/Frame 229-2.png"){

         baskfive.src = "./image/Group 57-2.png"}

        else{

         baskfive.src = "./image/Frame 229-2.png"}
    })

    let basksix = document.querySelector(".basketsix img");

    basksix.addEventListener("click", function(){

        if (basksix.getAttribute("src") == "./image/Frame 230.png"){

         basksix.src = "./image/Frame 228-2.png"}

        else{

         basksix.src = "./image/Frame 230.png"}
    })

    let baskseven = document.querySelector(".basketseven img");

    baskseven.addEventListener("click", function(){

        if (baskseven.getAttribute("src") == "./image/Frame 231 2.png"){

         baskseven.src = "./image/Group 57 2.png"}

        else{

         baskseven.src = "./image/Frame 231 2.png"}
    })

    let baskeight = document.querySelector(".basketeight img");

    baskeight.addEventListener("click", function(){

        if (baskeight.getAttribute("src") == "./image/Frame 229-2.png"){

         baskeight.src = "./image/Group 57-2.png"}

        else{

         baskeight.src = "./image/Frame 229-2.png"}
    })

    let basknine = document.querySelector(".basketnine img");

    basknine.addEventListener("click", function(){

        if (basknine.getAttribute("src") == "./image/Frame 230.png"){

         basknine.src = "./image/Frame 228-2.png"}

        else{

         basknine.src = "./image/Frame 230.png"}
    })




});




    




