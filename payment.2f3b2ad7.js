const t=document.querySelectorAll(".header-nav-link"),e=document.location.pathname;t.forEach((t=>{t.classList.contains("nav-item-link-current")&&t.classList.remove("nav-item-link-current"),e.includes(t.getAttribute("href"))&&t.classList.add("nav-item-link-current")})),"/"===e&&t[0].classList.add("nav-item-link-current");
//# sourceMappingURL=payment.2f3b2ad7.js.map
