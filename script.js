document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Sudhir's Portfolio!");
});


 const topButton = document.getElementById("backToTop");

  window.onscroll = function() {
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

  topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
  });