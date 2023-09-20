//hero slideshow
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index - 1].style.display = "block";
  setTimeout(displayImages, 4000); // Change image every 3.7 seconds
}


// nav bar
const navBtn = document.querySelector(".svg-btn");

navBtn.addEventListener("click", function () {
  navBtn.parentElement.classList.toggle("open");
  const ariaEx = navBtn.getAttribute("aria-expanded");
  if (ariaEx === "false") {
    navBtn.setAttribute("aria-expanded", "true");
  } else {
    navBtn.setAttribute("aria-expanded", "false");
  }
});

const links = document.querySelectorAll("ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  e.preventDefault();
  if (navBtn.parentElement.classList.contains("open") === true) {
    navBtn.parentElement.classList.toggle("open");
  }
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}


//way too complicated for my lil braim