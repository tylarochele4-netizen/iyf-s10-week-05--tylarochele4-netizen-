// 1. The h1 element (Using Tag Name)
const mainTitle = document.querySelector('h1');

// 2. All elements with class "content" (Using Class Name)
const allContent = document.getElementsByClassName('content'); 
// Note: This returns an HTMLCollection

// 3. The form with id "contact-form" (Using ID)
const contactForm = document.getElementById('contact-form');

// 4. The email input (Using querySelector with an attribute or ID)
const emailInput = document.querySelector('#email');

// 5. All list items in the nav (Using descendant selector)
const navItems = document.querySelectorAll('.nav-list li');

// 6. The first .nav-link (querySelector always grabs the FIRST one it finds)
const firstNavLink = document.querySelector('.nav-link');


// 1. Select the header, then navigate to the nav inside it
const header = document.querySelector("#main-header");
const navInsideHeader = header.querySelector("nav"); 
// OR: const navInsideHeader = header.firstElementChild.nextElementSibling; (if nav is the 2nd child)

// 2. Select the first nav-link, then get its parent li
const firstLink = document.querySelector(".nav-link");
const parentLi = firstLink.parentElement;

// 3. Select the article, then get its next sibling (section)
const article = document.querySelector("article");
const nextSection = article.nextElementSibling;

// 4. Select the ul, then get all its child li elements
const navList = document.querySelector(".nav-list");
const allLis = navList.children; // Returns an HTMLCollection of the <li> tags

// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const bodyElement = footer.parentElement;

// Verification
console.log("Nav inside header:", navInsideHeader);
console.log("Parent of first link:", parentLi);
console.log("Next sibling of article:", nextSection);
console.log("Children of ul:", allLis);
console.log("Parent of footer:", bodyElement);
// 7. The last paragraph (Using CSS pseudo-class)
const lastParagraph = document.querySelector('p:last-of-type');

// Logging them to check your work:
console.log({ mainTitle, allContent, contactForm, emailInput, navItems, firstNavLink, lastParagraph });


// Exercise 1: Text Content
const h1 = document.querySelector("h1");
console.log("Original Title:", h1.textContent);

// Modifying text
h1.textContent = "Welcome to DOM Practice!"; 

// Exercise 2: HTML Content
const article = document.querySelector("article");
// Replacing the entire content of the article
article.innerHTML = `
    <h2 class="title">Updated Article Title</h2>
    <p class="content highlight">This paragraph was added via innerHTML!</p>
`;

// Exercise 3: Attributes
const firstLink = document.querySelector(".nav-link");

// Setting a new attribute (opens link in new tab)
firstLink.setAttribute("target", "_blank");
firstLink.href = "https://google.com"; // Direct property access

// Check if it worked
console.log("Has target attribute?", firstLink.hasAttribute("target"));

// Exercise 4: Styles
const container = document.querySelector(".container");

// Applying multiple styles at once
Object.assign(container.style, {
    backgroundColor: "#f9f9f9",
    color: "#333",
    padding: "40px",
    border: "2px dashed #007bff"
});
