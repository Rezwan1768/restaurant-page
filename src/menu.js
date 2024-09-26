import { appetizersList, mainDishList, beveragesList } from "./menu-items.js";

function createMenuItem(item) {
    const name = document.createElement("p");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = item.price;

    const description = document.createElement("p");
    description.textContent = item.description;

    const div = document.createElement("div");
    div.append(name, price, description);
    return div;
}

function createMenuSection(heading, itemList) {
    const sectionHeading = document.createElement("h2");
    sectionHeading.textContent = heading;
    
    const itemSection = document.createElement("div");
    const items = itemList.map(item => createMenuItem(item));
    itemSection.append(...items);

    const section = document.createElement("section");
    section.append(sectionHeading, itemSection);
    return section;
}

export function menuPage() {
    const content = document.querySelector("div#content");

    const tabHeading = document.createElement("h1");
    tabHeading.textContent = "Menu";
    content.appendChild(tabHeading);

    content.appendChild(createMenuSection("Appetizers", appetizersList));
    content.appendChild(createMenuSection("Main Dishes", mainDishList));
    content.appendChild(createMenuSection("Beverages", beveragesList));
}

