import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

let currentPage = null;
document.addEventListener("DOMContentLoaded", () => {
    switchPage(homePage);
    currentPage = "home";
});

function switchPage(page, pageName) {
    if(currentPage === pageName) {
        return;
    }
    const content = document.querySelector("div#content");
    content.innerHTML = "";
    page();
    currentPage = pageName;
}

const homeTab = document.querySelector("#home-btn");
const menuTab = document.querySelector("#menu-btn");
const contactTab = document.querySelector("#contact-btn");

homeTab.addEventListener("click", () => switchPage(homePage, "home"));
menuTab.addEventListener("click", () => switchPage(menuPage, "menu"));
contactTab.addEventListener("click", () => switchPage(contactPage, "contact"));
