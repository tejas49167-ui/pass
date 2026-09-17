(function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark-mode");
    }

    function updateToggleLabel(button) {
        const isDark = document.documentElement.classList.contains("dark-mode");
        button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        button.setAttribute("title", isDark ? "Light mode" : "Dark mode");
    }

    document.addEventListener("DOMContentLoaded", function () {
        const toggle = document.querySelector(".theme-toggle");

        if (!toggle) {
            return;
        }

        updateToggleLabel(toggle);

        toggle.addEventListener("click", function () {
            document.documentElement.classList.toggle("dark-mode");
            const isDark = document.documentElement.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            updateToggleLabel(toggle);
        });
    });
})();
