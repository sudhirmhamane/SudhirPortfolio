document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Sudhir's Portfolio!");
});



 const topButton = document.getElementById("backToTop");

  window.onscroll = function() {
    if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
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

  document.querySelector('.intro-button').addEventListener('click', function(event) {
    event.preventDefault();
    const profileSection = document.querySelector('.profile-section');
    
    // Responsive offset based on screen width
    let offset;
    if (window.innerWidth <= 480) {
        offset = -120; // Small screen offset
    } else if (window.innerWidth <= 768) {
        offset = -40; // Tablet offset
    } else {
        offset = -160; // Desktop offset
    }

    window.scrollTo({
        top: profileSection.offsetTop + offset,
        behavior: 'smooth'
    });
});

