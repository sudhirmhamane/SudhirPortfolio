document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Sudhir's Portfolio!");
});


 const topButton = document.getElementById("backToTop");

  window.onscroll = function() {
    if (document.body.scrollTop > 2600 || document.documentElement.scrollTop > 2600) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

  // When the user clicks the button, scroll to the top of the document
  topButton.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
