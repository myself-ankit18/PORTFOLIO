// const toggler = document.querySelector(".style-switcher-toggler");
// toggler.addEventListener("click",()=>{
//     document.querySelector(".style-switcher").classList.toggle("open");
// })


// window.addEventListener("scroll",()=>{
//     if(document.querySelector(".style-switcher").classList.contains("open")){
//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// })


// const alter = document.querySelectorAll(".alternate-style");
// const setActiveStyle = ((color)=>{
//     alter.forEach((style)=>{
//         if(color == style.getAttribute("title")){
//             style.removeAttribute("disabled");
//         }
//         else{
//             style.setAttribute("disabled","true");
//         }
//     });
// });


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
})
// window.addEventListener("load",()=>{
//     if(document.body.classList.contains("dark"))
//     {
//         dayNight.querySelector("")
//     }
// })

