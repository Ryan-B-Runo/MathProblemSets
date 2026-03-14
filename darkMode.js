document.addEventListener('DOMContentLoaded', (event) => {
    // Select the toggle button
    const darkModeToggle = document.querySelector("#dark-mode-toggle");

    // Function to enable dark mode
    const enableDarkMode = () => {
        document.body.classList.add("latex-dark");
        localStorage.setItem("darkMode", "enabled");
    };

    // Function to disable dark mode
    const disableDarkMode = () => {
        document.body.classList.remove("latex-dark");
        localStorage.setItem("darkMode", "disabled");
    };

    // Check localStorage when the page loads
    if (localStorage.getItem("darkMode") === "enabled") {
        enableDarkMode();
    }

    // Add event listener to the toggle button
    darkModeToggle.addEventListener('click', () => {
        // Check the current state *before* toggling
        const isDarkModeNow = document.body.classList.contains("latex-dark");

        if (isDarkModeNow) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});