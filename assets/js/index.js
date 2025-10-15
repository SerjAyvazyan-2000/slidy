const header = document.querySelector('header');





window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});


const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
} else {
  document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
}




function updateImages(theme) {
  const images = document.querySelectorAll("img[data-light][data-dark]");
  images.forEach(img => {
    const newSrc = theme === "dark" ? img.dataset.dark : img.dataset.light;
    img.src = newSrc;
  });
}



const initialTheme = document.documentElement.getAttribute("data-theme");
updateImages(initialTheme);

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
    updateImages(newTheme);

});


const parallaxBlocks = document.querySelectorAll(".parallax-anim");

if (parallaxBlocks.length > 0) {
  let mouseX = 0, mouseY = 0;
  let scrollY = window.scrollY;

  document.addEventListener("mousemove", (e) => {
    const targetX = (e.clientX / window.innerWidth - 0.5) * 6; 
    const targetY = (e.clientY / window.innerHeight - 0.5) * 3; 
    mouseX = targetX;
    mouseY = targetY;
  });

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    applyParallax();
  });

  function applyParallax() {
    parallaxBlocks.forEach((block) => {
      const img = block.querySelector("img");
      const rect = block.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrollOffset = rect.top * -0.1; 
        img.style.transform = `translate(${mouseX}px, ${scrollOffset}px)`;
      }
    });
  }

  function loop() {
    applyParallax();
    requestAnimationFrame(loop);
  }

  loop();
}