const words = ["Frontend Developer.", "Mohamed Kamal.", "Backend Developer."];
let i = 0;
let txt = "";
let isDeleting = false;
const typingSpeed = 120;
const deletingSpeed = 90;
const delayBetweenWords = 1500;
const wrapElement = document.querySelector(".wrap");
function type() {
  const fullTxt = words[i % words.length];
  if (isDeleting) {
    txt = fullTxt.substring(0, txt.length - 1);
  } else {
    txt = fullTxt.substring(0, txt.length + 1);
  }
  wrapElement.textContent = txt;
  let speed = isDeleting ? deletingSpeed : typingSpeed;
  if (!isDeleting && txt === fullTxt) {
    speed = delayBetweenWords;
    isDeleting = true;
  } else if (isDeleting && txt === "") {
    isDeleting = false;
    i++;
    speed = 500;
  }
  setTimeout(() => {
    requestAnimationFrame(type);
  }, speed);
}
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1e3);
});
handAnimation = document.querySelector(".hand");
btnHire = document.querySelector(".hire");
setTimeout(() => {
  handAnimation.style.opacity = 1;
  btnHire.classList.add("effect");
}, 8e3);
setTimeout(() => {
  handAnimation.style.opacity = 0;
  btnHire.classList.remove("effect");
}, 14500);

// let row_projects = document.querySelector(".row-projects");
// for (let i = 1; i <= 8; i++) {
//   let col_project = document.createElement("div");
//   col_project.classList.add("project-card", "col-12", "col-md-6", "col-lg-4");
//   let img = document.createElement("img");
//   img.src = `./assets/images/projects/0${i}.webp`;
//   img.alt = `Project num ${i}`;
//   img.loading = "lazy";
//   col_project.appendChild(img);
//   row_projects.appendChild(col_project);
// }
// row_projects.innerHTML += `
// <div class="project-card col-12 col-md-6 col-lg-4"><div class="add-project">
// <div class="plus-col"></div><div class="plus-row"></div><a class="add-project-link" href="#contact">
// </a><p>Add<br />Your<br />Project</p></div></div>`;

const image = document.getElementById("myImage");
const audio = document.getElementById("myAudio");

image.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});