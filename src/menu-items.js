function MenuItem(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
}

const appetizersList = [
    new MenuItem(
        "Spiced Sweet Potato Croquettes", 
        "$6", 
        "Served with a smoky chipotle aioli."),
    new MenuItem(
        "Mediterranean Mezze Plate",
        "$8",
        "Hummus, baba ganoush, falafel, and marinated olives with grilled pita."
    ),
    new MenuItem(
        "Crispy Tempura Vegetables",
        "$6",
        "A medley of locally sourced vegetables, lightly fried in a tempura batter with a soy-ginger dipping sauce.",
    ),
    new MenuItem(
        "Urban Tacos Trio",
        "$6",
        "Soft corn tortillas with your choice of fillings: grilled shrimp with mango salsa, pulled pork with pickled onions, or roasted cauliflower with chimichurri.",
    ),
];

const mainDishList = [
    new MenuItem(
        "Fusion Bowl",
        "$14",
        "Quinoa, roasted seasonal vegetables, avocado, and your choice of grilled chicken or tofu, topped with a spicy miso dressing.",
    ),
    new MenuItem(
        "Herb-Crusted Local Salmon",
        "$12",
        "Baked with fresh herbs and served over a bed of lemon couscous and sautéed greens.",
    ),
    new MenuItem(
        "Urban Street Burger",
        "$9",
        "Grass-fed beef patty or plant-based option, topped with caramelized onions, pickled jalapeños, arugula, and a special house sauce on a brioche bun. Served with truffle fries.",
    ),
    new MenuItem(
        "Thai Green Curry with Chicken",
        "$12",
        "A fragrant coconut-based curry with local vegetables, served with jasmine rice and a lime wedge.",
    ),
    new MenuItem(
        "Spaghetti alla Carbonara",
        "$10",
        "A classic Italian dish with a twist—featuring locally cured pancetta, fresh Parmesan, and an egg yolk sauce.",
    ),
]

const beveragesList = [
    new MenuItem(
        "Freshly Squeezed Lemonade",
        "$2",
        "With a hint of mint.",
    ),
    new MenuItem(
        "Craft Local Beer Selection",
        "$3",
        "Featuring seasonal brews from local microbreweries.",
    ),
    new MenuItem(
        "Iced Lavender Latte",
        "$3",
        "A blend of espresso, milk, and house-made lavender syrup.",
    ),
    new MenuItem(
        "Ginger Turmeric Kombucha",
        "$4",
        "Fresh and tangy with a slight kick.",
    ),
]
export {appetizersList, mainDishList, beveragesList};