import fork from "./pasta-fork.jpg";

export function loadInitialPage() {
    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    const tagLine = document.createElement("p");
    heading.textContent = 'The Urban Fork';
    tagLine.textContent = "Where Local Flavors Meet Global Inspiration";


    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const figCaption = document.createElement("figcaption");
    image.src = fork;
    image.alt = "Fork with pasta";
    image.width = 600;
    image.height = 500;
    figCaption.innerHTML = `Photo by <a href="https://unsplash.com/@picoftasty?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mae Mu</a> on <a href="https://unsplash.com/photos/fork-with-spaghetti-Pvclb-iHHYY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`
   
    figure.append(image, figCaption);
    contentDiv.append(heading, tagLine, figure);
}