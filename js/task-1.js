const categories = document.querySelectorAll(".item");
const numberOfCategories = `Number of categories: ${categories.length}`
console.log(numberOfCategories);

categories.forEach((item) => {
    const heading = item.querySelector("h2");
    const elements = item.querySelectorAll("li");
    console.log(`Category: ${heading.textContent}`);
    console.log(`Elements ${elements.length}`);
})


