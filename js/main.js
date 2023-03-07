//Start Navbar Stick
let navbar = document.querySelector(".navbar");
window.onscroll = () => {
    if (window.scrollY >= navbar.offsetTop) {
        if (!navbar.classList.contains("stick")) {
            navbar.classList.add("stick");
        } else if (navbar.offsetTop === 0) {
            navbar.classList.remove("stick");
        };
    };
};
//Start Effect Tabs
let tabs = document.querySelectorAll(".effect .tab div");
tabs.forEach(tab => {
    tab.addEventListener("click", e => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});