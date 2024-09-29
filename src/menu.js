import { appetizersList, mainDishList, beveragesList } from "./menu-items.js";


function createMenuItem(item) {
    const name = document.createElement("p");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = item.price;

    const nameAndPriceDiv = document.createElement("div");
    nameAndPriceDiv.classList.add("name-price");
    nameAndPriceDiv.append(name, price);

    const description = document.createElement("p");
    description.textContent = item.description;

    // Each item will be displayed in it's own card
    const card = document.createElement("div");
    card.classList.add("card");
    card.append(nameAndPriceDiv, description);
    return card;
}

function createMenuSection(heading, itemList) {
    const sectionHeading = document.createElement("h2");
    sectionHeading.textContent = heading;
    

    // Each menu item will be in it's own section (appetizer, main, beverages)
    const itemSection = document.createElement("div"); 
    itemSection.classList.add("item-section");
    const items = itemList.map(item => createMenuItem(item));
    itemSection.append(...items);

    const section = document.createElement("section");
    section.classList.add("divider")
    section.append(sectionHeading, itemSection);
    return section;
}

export function menuPage() {
    const content = document.querySelector("div#content");

    const tabHeading = document.createElement("h1");
    tabHeading.textContent = "Menu";
    tabHeading.classList.add("header");
    content.appendChild(tabHeading);

    content.appendChild(createMenuSection("Appetizers", appetizersList));
    content.appendChild(createMenuSection("Main Dishes", mainDishList));
    content.appendChild(createMenuSection("Beverages", beveragesList));
}

