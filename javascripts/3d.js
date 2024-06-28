document.addEventListener("DOMContentLoaded", function(){
    let ball3 = document.querySelector('.ballcursor3d');
   window.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;
        ball3.animate([
            {transform : `translate(${x}px,${y}px)`}
        ],{
            duration: 3000
        })
   })

    document.getElementById('hoverImage').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'холл';
    });

    document.getElementById('hoverImage').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage2').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'холл';
    });
    
    document.getElementById('hoverImage2').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage3').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'холл';
    });
        
    document.getElementById('hoverImage3').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage4').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'буфет';
    });
            
    document.getElementById('hoverImage4').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage5').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'буфет';
    });
                
    document.getElementById('hoverImage5').addEventListener('mouseout', function() {
        document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage6').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'ульрафиолетовая кабина';
    });
                    
    document.getElementById('hoverImage6').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage7').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'водопад';
    });
                        
    document.getElementById('hoverImage7').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage8').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'сидения-вазы';
    });
                            
    document.getElementById('hoverImage8').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage9').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'большой зал';
    });
                                
    document.getElementById('hoverImage9').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage10').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'большой зал';
    });
                                    
    document.getElementById('hoverImage10').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage11').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'малый зал';
    });
                                        
    document.getElementById('hoverImage11').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage12').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'гардеробная';
    });
                                            
    document.getElementById('hoverImage12').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage13').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'гардеробная';
    });
                                                
    document.getElementById('hoverImage13').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });

    document.getElementById('hoverImage14').addEventListener('mouseover', function() {
    document.getElementById('boxword').innerText = 'гардеробная';
    });
                                                    
    document.getElementById('hoverImage14').addEventListener('mouseout', function() {
    document.getElementById('boxword').innerText = 'театр';
    });
    



});



// function changeText(imageElement, newText) {
//     let hoverTextElement = imageElement.nextElementSibling;
//     hoverTextElement.textContent = newText;
// }
// $(document).ready(function () {
// $(".longboxword").mouseover(function() {
//     $(".boxword").removeClass("boxword2")
// });
// });