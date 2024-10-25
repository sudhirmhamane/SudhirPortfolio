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

  topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
  });

  /// Check if the user has already visited
  const hasVisited = localStorage.getItem('hasVisited');

  if (!hasVisited) {
      // If no visit record, increase count and mark as visited
      let visitorCount = localStorage.getItem('visitorCount') || 0;
      visitorCount++;

      // Update local storage
      localStorage.setItem('visitorCount', visitorCount);
      localStorage.setItem('hasVisited', 'true'); // Mark as visited

      // Display the updated count
      document.getElementById('visitorCount').textContent = "Visitor Count: " + visitorCount;
  } else {
      // If already visited, just display the current count without incrementing
      const visitorCount = localStorage.getItem('visitorCount');
      document.getElementById('visitorCount').textContent = "Visitor Count: " + visitorCount;
  }