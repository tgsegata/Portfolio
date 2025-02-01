// JS FOR CONNECTING THE PATTERN BETWEEN HTMLs:



// CONNECTION HEADER HTML
// Same design for all the pages

let header = `
<section>
    <div id="brand">
        <figure id="logo_img"></figure>
        <figure id="brand_img"></figure>
    </div>

    <nav id="navMenu">
        <a href="home.html">Home</a>
        <a href="projects.html">Design_projects</a>
        <a href="code.html">Code_projects</a>
    </nav>

    <div id="contact_div">
        <figure id="contact_img"></figure>
        <a href="contact.html" id="contactIcon">Contact</a>
        <a href="about.html" id="aboutMe">About_me</a>
    </div>

    <figure id="burguer"></figure>

    <figure id="burguerClose"></figure>
</section>

<nav id="burgerMenu">
    <a href="home.html">Home</a>
    <a href="projects.html">Design_projects</a>
    <a href="code.html">Code_projects</a>
    <a href="contact.html">Contact</a>
    <a href="about.html">About_me</a>
</nav>
`

let headerElement = document.getElementById("siteHeader");

headerElement.innerHTML = header



// BURGER MENU ON MOBILE SCREEN
let burgerIcon = document.getElementById("burguer");
let burgerMenu = document.getElementById("burgerMenu");
let closeIcon = document.getElementById("burguerClose");

// to open the menu mobile

burgerIcon.addEventListener("click", function(){

    // Show the menu
    // Hide the burger icon
    // Show the close icon
    burgerMenu.style.display = "flex";
    burgerMenu.style.top = "100px";
    burgerIcon.style.display = "none";
    closeIcon.style.display = "flex";

    // after a short delay add the class slide down
    setTimeout(function(){
        burgerMenu.classList.add("slideDown");
    } , 500 )
})     

// to close the menu mobile
closeIcon.addEventListener("click", function(){
    // Hide the menu
    // Show the burger icon
    // Hide the close icon  
    burgerIcon.style.display = "block";
    closeIcon.style.display = "none";

    // slide the menu up first then ride
    burgerMenu.classList.remove("slideDown");

    setTimeout(function(){
        burgerMenu.style.display = "none";
    }, 500);
 
})





// FOOTER SECTION

let footer = `
    <div id="contentFooter">
        <article id="footer_1">
            <figure id="logo_img"></figure>
            <figure id="brand_img"></figure>
        </article>
 
        <article id="footer_2" class="gridFooter">
            <div class="h3nav">
                <a href="home.html" class="_h3">Homepage</a>
                <figure class="moreFooter"></figure>
                <figure class="closeFooter"></figure>
            </div>
            <div class="navFooter">
                <a href="home.html">Homepage</a>
                <a href="home.html">Homepage</a>
                <a href="home.html">Homepage</a>
                <a href="home.html">Homepage</a>
            </div>
        </article>

        <article id="footer_3" class="gridFooter">
            <div class="h3nav">
                <a href="projects.html" class="_h3">Projects</a>
                <figure class="moreFooter"></figure>
                <figure class="closeFooter"></figure>
            </div>
            <div class="navFooter">
                <a href="projects.html">Design projects</a>
                <a href="projects.html">Design projects</a>
                <a href="code.html">Code projects</a>
                <a href="code.html">Code projects</a>
            </div>
        </article>

        <article id="footer_4" class="gridFooter">
            <div class="h3nav">
                <a href="contact.html" class="_h3">Contact</a>
                <figure class="moreFooter"></figure>
                <figure class="closeFooter"></figure>
            </div>
            <div class="navFooter">
                <a href="contact.html#myContact">My contact</a>
                <a href="contact.html#_form">Send a message</a>
            </div>
        </article>

        <article id="footer_5" class="gridFooter">
            <div class="h3nav">
                <a href="about.html" class="_h3">About me</a>
                <figure class="moreFooter"></figure>
                <figure class="closeFooter"></figure>
            </div>
            <div class="navFooter">
                <a href="https://www.linkedin.com/in/tamires-segata-355b021bb/">Resume</a>
                <a href="about.html#_mobile">My journey</a>
                <a href="about.html#_softwareSkill">Skills</a>
                <a href="about.html#_services">Services</a>
            </div>
        </article>

        <article id="footer_6">
            <a href="https://www.linkedin.com/in/tamires-segata-355b021bb" target="_blank">
                <img src="/assets/images/linkedin-svgrepo-com.svg" alt="linkedin logo">
            </a>
            <a href="https://www.behance.net/tamiressegata" target="_blank">
                <img src="/assets/images/behance-svgrepo-com.svg" alt="behance logo">
            </a>
            <a href="https://www.instagram.com/mihsegata/" target="_blank">
                <img src="/assets/images/instagram-svgrepo-com.svg" alt="instagram logo">
            </a>
            <a href="mailto:tgsegata@gmail.com" target="_blank">
                <img src="/assets/images/telegram-svgrepo-com.svg" alt="email logo">
            </a>
        </article>
    </div>
    <div id="endFooter">
        <figure id="logo_img"></figure>
        <p>©Designed & Developed by Tamires Segata</p>
    </div>
`

let footerElement = document.getElementById("siteFooter");

footerElement.innerHTML = footer



// NAV MORE ON FOOTER
let moreInfoIcon = document.querySelectorAll(".moreFooter");
console.log(moreInfoIcon)
// let burgerFooter = document.getElementById("navFooter");
let closeInfoIcon = document.querySelectorAll(".closeFooter");


// to open the menu mobile
// moreInfoIcon.addEventListener("click", function(){
//     burgerFooter.style.display = "flex";
//     moreInfoIcon.style.display = "none";
//     closeInfoIcon.style.display = "flex";
// })






// I NEED TO CLOSE THE OTHER NAVS WHEN I OPEN ONE
// function closeAllMenus () {
//     moreInfoIcon.forEach()
// }


moreInfoIcon.forEach(
    function (thisIcon) {
        
        // this is to close all the menus before open a new one, so they are not open at the same tim

        // closeAllMenus();

        thisIcon.addEventListener("click", function () {
            console.log(thisIcon)
            thisIcon.parentElement.nextElementSibling.style.display = "flex";
            thisIcon.style.display = "none";
            thisIcon.nextElementSibling.style.display = "flex";
        })
    }
);


// to close the menu mobile
closeInfoIcon.forEach(
    function (thisIcon) {
        thisIcon.addEventListener("click", function () {
            thisIcon.parentElement.nextElementSibling.style.display = "none";
            thisIcon.style.display = "none";
            thisIcon.previousElementSibling.style.display = "flex";
        })
    }
);

// closeInfoIcon.addEventListener("click", function(){
//     burgerFooter.style.display = "none";
//     moreInfoIcon.style.display = "flex";
//     closeInfoIcon.style.display = "none";
// })