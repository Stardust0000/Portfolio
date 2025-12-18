const modal = document.getElementById("preview-modal");
const previewBtns = document.querySelectorAll(".preview-btn");
const previews = document.querySelectorAll(".project-preview");
const closeBtn = modal.querySelector(".close");

previewBtns.forEach(btn => {
    btn.addEventListener("click", ()=> {
        const projectKey = btn.dataset.project;
        modal.classList.add("active");
        document.body.classList.add("modal-open");
        previews.forEach(p => p.classList.remove("active"));
        const activePreview = modal.querySelector(`.project-preview[data-project = "${projectKey}"]`);
        activePreview.classList.add("active");
    });
});

closeBtn.addEventListener("click",()=> {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
    previews.forEach(p=> p.classList.remove("active"));
});


