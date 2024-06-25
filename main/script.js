fdocument.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.getElementById("hamburger");
    var menu = document.getElementById("mobileMenu");
    
    hamburger.addEventListener("click", function() {
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    });
  });
  