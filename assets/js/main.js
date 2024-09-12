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
  setTimeout(type, 1000); // بداية الكتابة بعد ثانية واحدة
});

handAnimation = document.querySelector(".hand");
btnHire = document.querySelector(".hire");
setTimeout(() => {
  handAnimation.style.opacity = 1;
  btnHire.classList.add("effect");
  
}, 8000);
setTimeout(() => {
  handAnimation.style.opacity = 0;
  btnHire.classList.remove("effect");
}, 14500);