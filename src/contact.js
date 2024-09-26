export function contactPage() {
    
    const tabHeading = document.createElement("h1");
    tabHeading.textContent = "Contact Us";

    const text = document.createElement("p");
    text.textContent = "We’d love to hear from you! Whether you have a question about our menu, want to make a reservation, or are interested in planning a special event at The Urban Fork, feel free to reach out to us. Our team is always here to help.";

    const contactSection = document.createElement("div");
    contactSection.innerHTML = `
    <div>
        <p>Location</p>
        <p>
            <span>1234 Culinary Lane</span>
            <span>New York, NY 10001</span>
        </p>
    </div>
    <div>
        <p>Phone</p>
        <p>(212) 555-7890</p>
    </div>`;

    const hoursSection = document.createElement("div");
    hoursSection.innerHTML = `
    <h2>Hours of Operation</h2>
    <ul>
        <li>Monday to Friday: 11:00 AM – 10:00 PM</li>
        <li>Saturday: 10:00 AM – 11:00 PM</li>
        <li>Sunday: 10:00 AM – 9:00 PM</li>
    </ul>`;
        
    const content = document.querySelector("div#content");
    content.append(tabHeading, text, contactSection, hoursSection);
}