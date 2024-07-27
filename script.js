var typed = new Typed(".typing",{
    strings:["Frontend Web Developer","Programmer","Student","Aspiring Full Stack Developer"],
    typeSpeed: 50,
    backSpeed: 10,
    loop:true
})
window.addEventListener("scroll",()=>{
    if(document.querySelector(".aside").classList.contains("open")){
        document.querySelector(".aside").classList.remove("open");
    }
})

const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li")
    totalNavList = navlist.length,
    allSection = document.querySelectorAll(".section"),
    totalSelection = allSection.length;
    for(let i = 0; i<totalNavList; i++){
        const a = navlist[i].querySelector("a");
        a.addEventListener("click",function(){
            removeBackSection();
            for(let j=0; j<totalNavList; j++){
                if(navlist[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                    // allSection[j].classList.add("back");
                }
                navlist[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200){
                asidetog();
            }
        })
    }
    const showSection = (element) =>{
        for(let i=0; i<totalSelection; i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    const navTogglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside"),
          dnd = document.querySelector(".day-night");
    navTogglerBtn.addEventListener("click",()=>{
        asidetog();
    })
    const asidetog = () =>{
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        dnd.classList.toggle("open");
        for(let i=0; i<totalSelection; i++){
            allSection[i].classList.toggle("open");
        }
        const homeImg = document.querySelector(".home-imgg")
        homeImg.classList.toggle("display_none");
        document.querySelector(".home-img").classList.toggle("display_none");
        document.querySelector(".home-info").classList.toggle("flex");
    }
    const removeBackSection = () =>{
        for(let i=0; i<totalSelection; i++){
            allSection[i].classList.remove("back");
        }
    }
    const addBackSection = (num) =>{
        allSection[num].classList.add("back");
    }
    const updateNav = (element) =>{
        for(let i=0; i<totalNavList; i++){
            navlist[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
            navlist[i].querySelector("a").classList.add("active");

            }
        }
        // element.getAttribute("href").split("#")[1]
    }
    document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })