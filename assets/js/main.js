var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
setInterval(function () {
  document.title = "Mohamed Kamal";
  setTimeout(function () {
    document.title = "Fronted Developer";
  }, 1500);
  setTimeout(function () {
    document.title = "Backend Developer";
  }, 3000);
}, 4500);

handAnimation = document.querySelector(".hand");
btnHire = document.querySelector(".hire");
available = document.querySelector(".available");
setTimeout(() => {
    handAnimation.style.display = "block";
    btnHire.classList.add("effect");
    available.classList.add("available-effect");
}, 6500);
setInterval(() => {
    handAnimation.style.display = "none";
    btnHire.classList.remove("effect");
    available.classList.remove("available-effect");
    setTimeout(() => {
        handAnimation.style.display = "block";
        btnHire.classList.add("effect");
        available.classList.add("available-effect");
    },6500)
}, 13000);
