document.addEventListener("DOMContentLoaded", function() {
    let ball3 = document.querySelector('.ballcursor3');
    window.addEventListener('mousemove',(e)=>{
     let x = e.clientX;
     let y = e.clientY;
         ball3.animate([
             {transform : `translate(${x}px,${y}px)`}
         ],{
             duration: 3000
         })
    })

    const modal = document.getElementById("modal");
    const openclicker = document.querySelector(".boxposters");
    const closeModal = document.querySelector(".close");

    // Открыть окно
    openclicker.addEventListener("click", function() {
    modal.style.display = "block";
    });

    // Закрыть окно
    closeModal.addEventListener("click", function() {
    modal.style.display = "none";
    });


    // Отправить
    const button = document.getElementById("lastbutton");
    button.addEventListener("lastbutton", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

});

});