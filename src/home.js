import fork from "./fork-and-pasta.jpg";

export function homePage() {
    const heading = document.createElement("h1");
    const tagLine = document.createElement("p");
    heading.textContent = 'The Urban Fork';
    tagLine.textContent = "Where Local Flavors Meet Global Inspiration";
    const header = document.createElement("div");
    header.classList.add("header");
    header.append(heading, tagLine);

    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const figCaption 
    = document.createElement("figcaption");
    image.src = fork;
    image.alt = "Fork with pasta";
    image.width = 500;
    image.height = 500;
    figCaption.innerHTML = `Photo by <a href="https://unsplash.com/@picoftasty?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mae Mu</a> on <a href="https://unsplash.com/photos/fork-with-spaghetti-Pvclb-iHHYY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
    figure.append(image, figCaption);

    const content = document.querySelector("div#content");
    content.append(header, figure);
}