(() => {
    const refs = {
        openMenuBtn: document.querySelector(".open-menu-btn"),
        closeMenuBtn: document.querySelector(".close-menu-btn"),
        mmenu: document.querySelector(".mob-menu"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.mmenu.classList.toggle("is-hidden");
    }
})();