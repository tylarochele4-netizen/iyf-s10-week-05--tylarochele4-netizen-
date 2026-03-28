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


// 1. Create a brand new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "🚀 This paragraph was created entirely in JS!";
newParagraph.className = "content highlight";

// 2. Add it to the page (at the end of the article)
const article = document.querySelector("article");
article.appendChild(newParagraph); 

// 3. Remove an element 
const footer = document.querySelector("footer");
if (footer) {
    footer.remove();
}

// 4. Build: The Dynamic Nav Function
function addNavItem(text, href) {
    const navList = document.querySelector(".nav-list");
    
    // Create the li and the anchor tag
    const newLi = document.createElement("li");
    const newAnchor = document.createElement("a");
    
    // Set up the anchor
    newAnchor.textContent = text;
    newAnchor.href = href;
    newAnchor.className = "nav-link";
    
    // Nest them: <ul> -> <li> -> <a>
    newLi.appendChild(newAnchor);
    navList.appendChild(newLi);
}

// Testing the function
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");


// 1. Select the elements we need
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitBtn = contactForm.querySelector("button");

// 2. Add a Click Event to the button
submitBtn.addEventListener("click", () => {
    console.log("Submit button was clicked!");
});

// 3. Add a Submit Event to the form (The correct way to handle forms)
contactForm.addEventListener("submit", (event) => {
    // CRITICAL: This stops the page from refreshing
    event.preventDefault(); 
    
    // Grab the values from the inputs
    const userName = nameInput.value;
    const userEmail = emailInput.value;
    
    console.log(`Form Submitted! Name: ${userName}, Email: ${userEmail}`);
    
    // Feedback for the user
    alert(`Thank you, ${userName}! We received your info.`);
    
    // Clear the form
    contactForm.reset();
});


// 1. Select the Parent element (the <ul>)
const navList = document.querySelector(".nav-list");

// 2. Add the listener to the Parent
navList.addEventListener("click", (event) => {
    // 3. Check if the thing actually clicked was a link
    if (event.target.classList.contains("nav-link")) {
        // Stop the link from actually navigating away
        event.preventDefault(); 
        
        const linkText = event.target.textContent;
        console.log(`Delegated Click: You clicked on ${linkText}`);
        
        // Example action: Highlight the clicked link
        event.target.style.color = "orange";
    }
});


// 1. Select the elements from YOUR HTML
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name'); // We'll use this as the task input
const todoList = document.getElementById('todo-list');

// 2. Add Task Logic
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page from refreshing

    const taskText = nameInput.value.trim();
    if (taskText === "") return;

    // Create the task item
    const li = document.createElement('li');
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.padding = "10px";
    li.style.borderBottom = "1px solid #ddd";

    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn" style="color: red;">Delete</button>
    `;

    // Add it to our new list
    todoList.appendChild(li);

    // Clear the input
    contactForm.reset();
});

// 3. Delegation Logic (Toggle & Delete)
todoList.addEventListener('click', (e) => {
    // If clicking the text, highlight it (Toggle)
    if (e.target.classList.contains('task-text')) {
        e.target.style.textDecoration = 
            e.target.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        e.target.style.color = e.target.style.color === 'gray' ? 'black' : 'gray';
    }

    // If clicking delete, remove the whole <li>
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});


const todoForm = document.getElementById('contact-form');
const taskInput = document.getElementById('name');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // VALIDATION: Check if input is empty or just spaces
    if (taskInput.value.trim() === "") {
        taskInput.style.border = "2px solid red";
        alert("Please enter a task name!");
        return; // Stops the function here
    }

    // Reset border if it's valid
    taskInput.style.border = "1px solid #ccc";
    
    // ... (Your previous code to create the <li> goes here)
});


const todoList = document.getElementById('todo-list');

// We listen to the WHOLE list, not the individual buttons
todoList.addEventListener('click', (event) => {
    
    // Check if the actual thing clicked was a button with the class 'delete-btn'
    if (event.target.classList.contains('delete-btn')) {
        const itemToRemove = event.target.parentElement;
        
        // Add a small fade-out effect before removing
        itemToRemove.style.opacity = '0';
        setTimeout(() => {
            itemToRemove.remove();
        }, 300);
    }
});



// --- MINI PROJECT ENHANCEMENTS ---

// 1. Create a "Clear All" Button Dynamically
const clearBtn = document.createElement('button');
clearBtn.textContent = "Clear All Tasks";
clearBtn.style.marginTop = "10px";
document.querySelector('.container').appendChild(clearBtn);

// 2. Clear All Functionality
clearBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to delete all tasks?")) {
        todoList.innerHTML = ""; // Wipes the list clean
        updateCounter();
    }
});

// 3. Task Counter Function
const counter = document.createElement('p');
counter.id = "task-counter";
counter.textContent = "Tasks: 0";
document.querySelector('.container').insertBefore(counter, todoList);

function updateCounter() {
    const count = todoList.children.length;
    counter.textContent = `Total Tasks: ${count}`;
}

// 4. Update your existing Submit Listener
// Add "updateCounter();" to the end of your submit function!


// Day 1 Challenge: Random Color Changer
const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    h1.style.color = "#" + randomColor;
});
