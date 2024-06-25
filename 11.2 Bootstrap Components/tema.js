const tema_obscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}
const tema_claro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const cambiar_tema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    tema_obscuro() : tema_claro();
}
