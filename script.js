const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    root.classList.add("dark");
    toggle.checked = true;
} else {
    root.classList.remove("dark");
    toggle.checked = false;
}

// Listen for toggle changes
toggle.addEventListener("change", () => {
    if (toggle.checked) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});
