import $ from 'jquery'



// $('.ba__hero').on("mouseover", function () {
//     document.addEventListener("mousemove", function (event) {
//         const x = event.pageX - 10;
//         const y = event.pageY - 10;
//         const cursor = document.querySelector("#cursor");
//         cursor.style.left = x + "px";
//         cursor.style.top = y + "px";
//     });
// });
window.addEventListener("DOMContentLoaded", (event) => {
    const heroSec = document.querySelector('.ba__hero')
    heroSec.addEventListener("mouseover", mouseHover)
});


function mouseHover() {
    document.addEventListener("mousemove", function (event) {
        const x = event.pageX - 10;
        const y = event.pageY - 10;
        const cursor = document.querySelector("#cursor");
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    })
};
//   $('div').on("mouseleave", function(){
//     $('#cursor').css({'transform': 'scale(1)'});
//   });
