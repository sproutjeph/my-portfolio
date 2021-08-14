const menuBtn = document.querySelector(".menu-btn");
const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.getElementById("nav");
const sideBar = document.getElementById("sidebar");
const scrollLinks = document.querySelectorAll(".scroll-link");
const topLink = document.querySelector(".top-link");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fixed");
  } else {
    navBar.classList.remove("fixed");
  }
  // show top link
  if (scrollHeight > 500) {
    topLink.classList.add("show-toplink");
  } else {
    topLink.classList.remove("show-toplink");
  }
});
let open = false;

const toggleBtn = () => {
  if (!open) {
    menuToggle.classList.add("open");
    sideBar.classList.add("show");
    sidebarLinks.forEach((link) => {
      link.classList.add("show");
    });
    open = true;
  } else {
    menuToggle.classList.remove("open");
    sideBar.classList.remove("show");
    sidebarLinks.forEach((link) => {
      link.classList.remove("show");
    });
    open = false;
  }
};
menuBtn.addEventListener("click", toggleBtn);

const targetSideLinks = () => {
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (open) {
        sideBar.classList.remove("show");
        menuToggle.classList.remove("open");
        open = false;
      } else {
        sideBar.classList.add("show");
        menuToggle.classList.add("open");
        open = true;
      }
    });
  });
};

//********* smooth scroll *************
scrollLinks.forEach((scrollLink) => {
  scrollLink.addEventListener("click", (e) => {
    e.preventDefault();
    // scroll to a spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains("fixed");
    let pos = element.offsetTop - navHeight;
    if (!fixedNav) {
      pos = pos - navHeight;
    }
    window.scrollTo({
      left: 0,
      top: pos,
    });
  });
  targetSideLinks();
});

// footer year
const year = new Date().getFullYear();
const dateSpan = (document.getElementById("date").textContent = year);
