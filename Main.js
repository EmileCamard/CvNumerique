document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-item");

    projects.forEach(project => {
        project.addEventListener("click", () => {
            const details = project.querySelector(".project-details");

            if (details.style.maxHeight) {
                details.style.maxHeight = null;
            } else {
                details.style.maxHeight = details.scrollHeight + "px";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------
       ACCORDÉON PROJETS
    ---------------------------- */
    const projects = document.querySelectorAll(".project-item");

    projects.forEach(project => {
        project.addEventListener("click", () => {

            project.classList.toggle("open");

            const details = project.querySelector(".project-details");

            if (details.style.maxHeight) {
                details.style.maxHeight = null;
            } else {
                details.style.maxHeight = details.scrollHeight + "px";
            }
        });
    });


    /* ---------------------------
       AFFICHAGE DES SECTIONS
    ---------------------------- */
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.classList.add("visible");
    });

});