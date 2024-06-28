

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.onelist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.twolist').style.display = 'block';
    }
    });

    document.querySelectorAll('.twolist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.threelist').style.display = 'block';
    }
    });

    document.querySelectorAll('.threelist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.fourlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.fourlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.fivelist').style.display = 'block';
    }
    });

    document.querySelectorAll('.fivelist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.sixlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.sixlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.sevenlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.sevenlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.eightlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.eightlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.ninelist').style.display = 'block';
    }
    });

    document.querySelectorAll('.ninelist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.tenlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.tenlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.elevenlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.elevenlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.twelvelist').style.display = 'block';
    }
    });

    document.querySelectorAll('.twelvelist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.thirteenlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.thirteenlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.fourteenlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.fourteenlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.fiveteenlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.fiveteenlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.sixteenlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.sixteenlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.seventeenlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.seventeenlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.eightteenlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.eightteenlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.nineteenlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.nineteenlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.tenteenlist').style.display = 'block';
    }
    });

    document.querySelectorAll('.tenteenlist img').forEach(img =>{
        img.onclick = () => {
        document.querySelector('.eleventeenlist').style.display = 'block';
    }
    });

    let ball4 = document.querySelector('.cursorball');
    window.addEventListener('mousemove',(e)=>{
     let x = e.clientX;
     let y = e.clientY;
         ball4.animate([
             {transform : `translate(${x}px,${y}px)`}
         ],{
             duration: 3000
         })
    })

});

