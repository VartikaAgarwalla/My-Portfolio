// preloader script............
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector(".hey").classList.add("popup");
});

// preloader script ends here.........

// switch for setting
function settingtoggle() {
  document
    .getElementById("setting-container")
    .classList.toggle("settingactivate");
  document
    .getElementById("visualmodetogglebuttoncontainer")
    .classList.toggle("visualmodeshow");
  document
    .getElementById("soundtogglebuttoncontainer")
    .classList.toggle("soundmodeshow");
}
function playpause() {
  if (document.getElementById("switchforsound").checked == false) {
    audio.pause();
  } else {
    audio.play();
  }
}

function visualmode() {
  document.body.classList.toggle("light-mode");
  document.getElementById("labelforsound").classList.toggle("invertsoundlabel");
  document.querySelector('.about-heading-article').classList.toggle('heading-article-light');
  document.querySelector('.aboutHeadingP').classList.toggle('heading-article-light');

  document.querySelector(".skills-heading-article").classList.toggle("heading-article-light");
  document
    .querySelector(".skillsHeadingP")
    .classList.toggle("heading-article-light");

  document
    .querySelector(".projects-heading-article")
    .classList.toggle("heading-article-light");
  document
    .querySelector(".projectsHeadingP")
    .classList.toggle("heading-article-light");

    document.querySelector('.frontend-dev-heading').classList.toggle('heading-article-light');
    document.querySelector('.designing-heading').classList.toggle('heading-article-light');
    document.querySelector('.languages-heading').classList.toggle('heading-article-light');

  document
    .querySelector(".experience-heading-article")
    .classList.toggle("heading-article-light");
  document
    .querySelector(".experiencesHeadingP")
    .classList.toggle("heading-article-light");

  document
    .querySelector(".education-heading-article")
    .classList.toggle("heading-article-light");
  document
    .querySelector(".educationHeadingP")
    .classList.toggle("heading-article-light");

  document.getElementById("Java").classList.toggle("language-gradient-class");
  document.getElementById("Python").classList.toggle("language-gradient-class");
  document.getElementById("SQL").classList.toggle("language-gradient-class");
  document.getElementById("html").classList.toggle("language-gradient-class");
  document.getElementById("css").classList.toggle("language-gradient-class");
  document
    .getElementById("JavaScript")
    .classList.toggle("language-gradient-class");
  document.getElementById("React").classList.toggle("language-gradient-class");
  document.getElementById("ap").classList.toggle("language-gradient-class");
  document.getElementById("canva").classList.toggle("language-gradient-class");
  document
    .getElementById("Snapseed")
    .classList.toggle("language-gradient-class");

  let projectBox = document.querySelectorAll(".project-box");
  projectBox.forEach((proBox) => {
    proBox.classList.toggle("language-gradient-class");
  });

  let experienceBox = document.querySelectorAll(".job_tmlabel");
  experienceBox.forEach((exBox) => {
    exBox.classList.toggle("language-gradient-class");
  });

  let educationBox = document.querySelectorAll(".graduation-box-div");
  educationBox.forEach((edBox) => {
    edBox.classList.toggle("language-gradient-class");
  });

}
let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");
// toggle menu by clicking on hamburger
function mobileMenu() {
  document.body.classList.toggle("stopscrolling");
  document
    .getElementById("mobiletogglemenu")
    .classList.toggle("show-toggle-menu");
  document.getElementById("emptyarea").classList.toggle("blur-class");
  document
    .getElementById("mobile-bar1")
    .classList.toggle("hamburger-animation1");
  document
    .getElementById("mobile-bar2")
    .classList.toggle("hamburger-animation2");
  document
    .getElementById("mobile-bar3")
    .classList.toggle("hamburger-animation3");
}
// close mobile toggle menu by clicking on LI
function hidemenubyli() {
  document.body.classList.toggle("stopscrolling");
  document
    .getElementById("mobiletogglemenu")
    .classList.remove("show-toggle-menu");
  document.getElementById("emptyarea").classList.remove("blur-class");
  document
    .getElementById("mobile-bar1")
    .classList.remove("hamburger-animation1");
  document
    .getElementById("mobile-bar2")
    .classList.remove("hamburger-animation2");
  document
    .getElementById("mobile-bar3")
    .classList.remove("hamburger-animation3");
}

// close Mobile hamburger toggle menu while clicking in empty area
emptyArea.addEventListener("click", hidetogglemenu);
function hidetogglemenu() {
  document.body.classList.remove("stopscrolling");
  document
    .getElementById("mobiletogglemenu")
    .classList.remove("show-toggle-menu");
  document.getElementById("emptyarea").classList.remove("blur-class");
  document
    .getElementById("mobile-bar1")
    .classList.remove("hamburger-animation1");
  document
    .getElementById("mobile-bar2")
    .classList.remove("hamburger-animation2");
  document
    .getElementById("mobile-bar3")
    .classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(
  ".navbar .navbar-tabs .navbar-tabs-ul a li"
);
const mobilenavLi = document.querySelectorAll(
  ".mobiletogglemenu .mobile-navbar-tabs-ul a li"
);

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("activeThisTab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThisTab");
    }

    li.style.sectionTop = "100px";
  });
  
  mobilenavLi.forEach((li) => {
    li.classList.remove("activeThismobiletab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThismobiletab");
    }
    li.style.sectionTop = "100px";
  });
});


//or
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });

let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.addEventListener(
  "contextmenu",
  function (e) {
    if (e.target.nodeName === "IMG") {
      e.preventDefault();
    }
  },
  false
);
