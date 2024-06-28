document.addEventListener("DOMContentLoaded", function(){
   let ball = document.querySelector('.ballcursor');
   window.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;
        // ball.style.transform = `translate(${x}px,${y}px)`
        ball.animate([
            {transform : `translate(${x}px,${y}px)`}
        ],{
            duration: 3000
        })
   })

//    document.querySelector('.abouttheater').onclick = function(event) {
//     window.location.href = 'file:///Users/darafefelova/Desktop/%D0%90%D0%9F4/about.html';
// };
    
});
