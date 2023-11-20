    // Function to create a snowflake
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.innerHTML = "❄";
        snowflake.style.position = "fixed";
        snowflake.style.color = "#fff";
        snowflake.style.pointerEvents = "none";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = "0px";
        document.body.appendChild(snowflake);
  
        // Animation function
        function animateSnowflake() {
          const snowflakeSpeed = 2; // Adjust the falling speed as needed
          let currentTop = parseInt(snowflake.style.top);
          snowflake.style.top = currentTop + snowflakeSpeed + "px";
  
          // Remove snowflake when it goes beyond the bottom of the screen
          if (currentTop > window.innerHeight) {
            document.body.removeChild(snowflake);
          }
        }
  
        // Set up the animation
        setInterval(animateSnowflake, 10); // Adjust the interval as needed
      }
  
      // Function to start snowfall
      function startSnowfall() {
        setInterval(createSnowflake, 500); // Adjust the interval as needed
      }
  
      // Start snowfall when the page is loaded
      window.onload = startSnowfall;