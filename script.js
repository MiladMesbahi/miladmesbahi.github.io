'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// Testimonials variables
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
};

// Add click event to all modal items (testimonials, favorite movies, reading list)
const modalItems = document.querySelectorAll("[data-modal-item]");
modalItems.forEach(item => {
    item.addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-modal-avatar]").src;
        modalImg.alt = this.querySelector("[data-modal-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-modal-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-modal-text]").innerHTML;
        testimonialsModalFunc();
    });
});

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
        console.log(`Navigating to ${this.dataset.navLink}`);

        // Remove active class from all links and pages
        navigationLinks.forEach(link => link.classList.remove("active"));
        pages.forEach(page => page.classList.remove("active"));

        // Add active class to clicked link and corresponding page
        this.classList.add("active");
        const targetPage = document.querySelector(`[data-page="${this.dataset.navLink}"]`);
        if (targetPage) {
            targetPage.classList.add("active");
        } else {
            console.error(`No page found for ${this.dataset.navLink}`);
        }

        // Scroll to top of the page
        window.scrollTo(0, 0);
    });
});
