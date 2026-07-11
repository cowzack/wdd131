// Dynamic Footer Elements
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Mobile Hamburger Menu Toggle
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("animateme");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    
    
    if (navMenu.classList.contains("show")) {
        menuButton.innerHTML = "&times;"; 
    } else {
        menuButton.innerHTML = "&#9776;"; 
    }
});