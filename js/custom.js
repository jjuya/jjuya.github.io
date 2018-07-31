var introBtn = document.getElementById("introBtn");
var projectsBtn = document.getElementById("projectsBtn");

var indexPage = document.getElementById("indexPage");
var projectsPage = document.getElementById("projectsPage");


function intro_click() {
    introBtn.classList.add("active");
    projectsBtn.classList.remove("active");

    projectsPage.style.display = "none";
    indexPage.style.display = "block";
}

function projects_click() {
    projectsBtn.classList.add("active");
    introBtn.classList.remove("active");

    indexPage.style.display = "none";
    projectsPage.style.display = "block";
    
}