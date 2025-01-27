'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const selectedPage = this.textContent.trim().toLowerCase();

    
    navigationLinks.forEach(link => link.classList.remove("active"));

    for (let j = 0; j < pages.length; j++) {
      if (selectedPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        this.classList.add("active");
        window.scrollTo(0, 0);
        
        // 確保 Contact 頁面內的 iframe 顯示
        if (selectedPage === "contact") {
          const iframe = document.querySelector("[data-mapbox] iframe");
          iframe.style.display = "block"; // 確保 iframe 被顯示
        }
      } else {
        pages[j].classList.remove("active");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("[data-form]");
  const submitButton = document.querySelector("[data-form-btn]");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 防止表單預設提交刷新頁面

    submitButton.setAttribute("disabled", "true");

    const formData = {
      fullname: document.querySelector("input[name='fullname']").value,
      email: document.querySelector("input[name='email']").value,
      message: document.querySelector("textarea[name='message']").value
    };

    fetch("https://flask-app-910273823562.asia-east1.run.app/submit_form", {  // ⚡ 連接 Flask 伺服器
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      form.reset();
      submitButton.setAttribute("disabled", "true");
    })
    .catch(error => {
      alert("Error sending message ❌: " + error.message);
      submitButton.removeAttribute("disabled");
    });
  });
});






