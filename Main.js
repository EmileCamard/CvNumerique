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