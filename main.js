    var loader = document.getElementById("preloader");
    var main = document.querySelector(".main");
    var bodyLoad = document.body;
    window.addEventListener("load", function () {
      loader.style.display = "none";
      bodyLoad.style.overflowY = "visible";
      bodyLoad.style.overflowX = "hidden";
      setTimeout(() => (main.style.opacity = 1), 50);
    });

    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });

    function toggleMenu() {
      const menuToggle = document.querySelector(".menuToggle");
      const navigation = document.querySelector(".navigation");
      menuToggle.classList.toggle("active");
      navigation.classList.toggle("active");
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
