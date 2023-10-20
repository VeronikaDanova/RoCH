const sections = document.querySelectorAll(".section");
const navLi = document.querySelector(".nav-list .container ul");

window.addEventListener("scroll", () => {
    let current = "";

    Array.from(sections).forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageXOffset > sectionTop){
            current = section.getAttribute("class")
        }

    });

    navLi.forEach(li => {
        li.classList.remove("active")
        if(li.classList.contains(current))
        li.classList.add("active");
    })
})
