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

// 7. The last paragraph (Using CSS pseudo-class)
const lastParagraph = document.querySelector('p:last-of-type');

// Logging them to check your work:
console.log({ mainTitle, allContent, contactForm, emailInput, navItems, firstNavLink, lastParagraph });
