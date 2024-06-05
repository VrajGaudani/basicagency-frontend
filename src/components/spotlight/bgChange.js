import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import $ from 'jquery'

// let spotlight = document.querySelector('.ba__spotlight');
// console.log("Hello")
// gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.create({
//     markers: true,
//     trigger: spotlight,
//     start:"top top",
//     end:"bottom +=100%", 
//     onEnter: () => {
//         gsap.to('#root', { duration: 1.0, backgroundColor: '#ffffff'})
//     },

//     onLeave: () => {
//         gsap.to('#root', { duration: 2.0, backgroundColor: '#000000'})
//     },
// });

/* COLOR CHANGER */
// window.addEventListener("load", function () {
//     let scrollColorElems = document.querySelectorAll('.ba__spotlight');
//     scrollColorElems.forEach((colorSection, i) => {
//     const prevBg = i === 0 ? "" : '#F9CDCD';
//     const prevText = i === 0 ? "" : "#252422";

//     ScrollTrigger.create({
//         trigger: colorSection,
//         start: "top 50%",
//         onEnter: () =>
//         gsap.to("body", {
//             backgroundColor: "#252422",
//             color: "#F9CDCD",
//             overwrite: "auto",
//             duration: 1
//         }),

//         onEnterBack: () =>
//         gsap.to("body", {
//             backgroundColor: "#252422",
//             color: "#F9CDCD",
//             overwrite: "auto",
//             duration: 1
//         }),

//         onLeave: () =>
//         gsap.to("body", {
//             backgroundColor: prevBg,
//             color: prevText,
//             overwrite: "auto",
//             duration: 1
//         }),
//         onLeaveBack: () =>
//         gsap.to("body", {
//             backgroundColor: prevBg,
//             color: prevText,
//             overwrite: "auto",
//             duration: 1
//         })
//     });
//   });
// });



window.addEventListener("load", function () {
    let scrollColorElems = document.querySelectorAll('.ba__spotlight');
    let spotlight = document.getElementById('spotlight')
    let body = this.document.getElementsByTagName('body')
    const textColor = spotlight.getAttribute("data-textcolor");
    const bgColor = spotlight.getAttribute("data-bgcolor");
    scrollColorElems.forEach((colorSection, i) => {
      const nextBg = i === scrollColorElems.length - 1 ? "" : '#F9CDCD';
      const nextText = i === scrollColorElems.length - 1 ? "" : "#252422";
      const addColorClass = () => {document.body.classList.add('colorChange')}
      const removeColorClass = () => {document.body.classList.remove('colorChange')}
  
      ScrollTrigger.create({
        trigger: colorSection,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () =>
          gsap.to("body", {
            backgroundColor: bgColor,
            color: textColor,
            toggleClass: 'sdssffs',
            borderCollapse: textColor,
            overwrite: "auto",
            duration: 1,
            addColorClass
          }),
  
        onLeaveBack: () =>
          gsap.to("body", {
            backgroundColor: "#f4f4f4",
            color: bgColor,
            overwrite: "auto",
            duration: 1,
            removeColorClass
          }),
  
        onEnterBack: () =>
        gsap.to("body", {
            backgroundColor: bgColor,
            color: textColor,
            overwrite: "auto",
            duration: 1,
            addColorClass
          }),
  
        onLeave: () =>
          gsap.to("body", {
            backgroundColor: "#f4f4f4",
            color: bgColor,
            overwrite: "auto",
            duration: 1,
            removeColorClass
          })
      });
    });
  });
  
  
  