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
