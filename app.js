/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
/* we need to grab the UL using the id navbar__list -ds
/**
 * Get the nav menu container element
 */
 const NavBarList = document.querySelector("nav");
 const myUL_Container = document.querySelector("#navbar__list");
 
 /**
  * Get all the section elements on the HTML page
  */
 

 
 /*-------------------------------------------------------------*/
 
 /**
  * Iterate over each section. For each section,
  * Create a list item 
  * Create a link element that displays the section name
 -Think about the attributes defined on each section element. 
 **Which one can you use as a display text?
 ***Are there any classes you can create and add to the link element to style it?
 
  
 /*------------------------------------------------------------ */
 
 /**
  * End Global Variables
  * Start Helper Functions
  *
  */
 
 /**
  * End Helper Functions
  * Begin Main Functions
  *
  */
 
 // build the nav
 const mySections = document.querySelectorAll("section");
 const navUL = document.querySelector("ul");
 //Removes active classes from sections and nav links
 function removeActiveStates() {
   const myListItems = document.querySelectorAll("li");
 
   for (let i = 0; i < mySections.length; i++) {
     mySections[i].classList.remove("your-active-class");
     myListItems[i].classList.remove("active");
   }
 }
 //For loop begins with embed event listener which links nav items to sections and create scroll click event
 for (let i = 0; i < mySections.length; i++) {
   const myListItem = document.createElement("li");
   myListItem.addEventListener("click", function (e) {
     e.preventDefault();
     mySections[i].scrollIntoView({ behavior: "smooth" });
     removeActiveStates();
     myListItem.classList.add("active");
     mySections[i].classList.add("your-active-class");
     //remove the active class for all the li's and then mark the new one as active
     //mark as active
   });
 //Anchor links will connect navbar and set section link text
   const myAnchorLink = document.createElement("a");
   const sectionId = mySections[i].id;
   myAnchorLink.setAttribute("href", "#" + sectionId);
   myAnchorLink.innerHTML = mySections[i].getAttribute("data-nav");
   myAnchorLink.classList.add("menu__link");
   myListItem.append(myAnchorLink);
   navUL.appendChild(myListItem);
 }
 // Add class 'active' to section when near top of viewport
 
 // Scroll to anchor ID using scrollTO event
 
 /**
  * End Main Functions
  * Begin Events
  *
  */
 
 // Build menu
 
 // Scroll to section on link click
 
 // Set sections as active*/
 //This begins a function that will add an event listener to the window object
 window.addEventListener("scroll", function (e) {
   e.preventDefault();
   for (let i = 0; i < mySections.length; i++) {
     let myRect = mySections[i].getBoundingClientRect();
     const myListItem = document.querySelectorAll("li");
     //This if statement will let us know which Sections are fully visible to the browser
     console.log(mySections[i].id, myRect, window.innerHeight);
     if (myRect.top <= 150 && myRect.bottom > 175) {
       mySections[i].classList.add("your-active-class");
    //Nested for if statement for scroll event connects both link items and toggled sections for active and inactive states
       for (let j = 0; j < myListItem.length; j++) {
         if (
           myListItem[j].innerText === mySections[i].getAttribute("data-nav")
         ) {
           myListItem[j].classList.add("active");
           //console.log("Yes, I'm in view!");
         } else {
           myListItem[j].classList.remove("active");
           //console.log("No, I am not in view");
         }
       }
 
       //mySections.classList.add("your-active-class");
     } else {
       mySections[i].classList.remove("your-active-class");
     }
   }
 });
 
 //if(position.top >= 0 && position.bottom <= window.innerHeight) {
 // console.log('Element is fully visible in screen');
 