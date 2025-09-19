// Waits for the mouse to unhover to do the shrinkWidth animation

const el = document.getElementById('log-in-icon-paragraph');
el.addEventListener('mouseenter', () => {
el.classList.add('grown');
});

// Changes the icon on Log in

const iconParagraph = document.getElementById('log-in-icon-paragraph');
const originalIconHTML = '<b><i class="fa-solid fa-arrow-right-to-bracket" id="log-in-icon"></i></b>';
let isHovered = false;

// On hover: start animation and wait for it to finish before changing to text
iconParagraph.addEventListener('mouseenter', () => {
  isHovered = true;
  iconParagraph.classList.add('grown');
});

// Listen for animation end (only for grow)
iconParagraph.addEventListener('animationend', (e) => {
  if (isHovered && e.animationName === 'growWidth') {
    iconParagraph.innerHTML = '<b>Log In</b>';
  }
});

// On unhover: change back immediately
iconParagraph.addEventListener('mouseleave', () => {
  isHovered = false;
  iconParagraph.innerHTML = originalIconHTML;
});







// When you click Subscribe it says a text

document.getElementById("subscribe-button").addEventListener("click", function () {
      const emailInput = document.getElementById("email-input");
      const email = emailInput.value.trim();
      const container = document.getElementById("newsletter-container");

      // Email validation
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!isValidEmail) {
        showError("Please put a valid email address.");
        return;
      }

      // Success message
      container.innerHTML = `<p>Thanks for signing up for the newsletter! We'll be in touch soon.</p>`;
    });

    function showError(message) {
      const errorBox = document.getElementById("error-message");
      errorBox.textContent = message;
      errorBox.style.display = "block";
      errorBox.style.opacity = "1";

      // Fade out after 3 seconds
      setTimeout(() => {
        errorBox.style.opacity = "0";
        setTimeout(() => {
          errorBox.style.display = "none";
        }, 1000); // Match CSS transition time
      }, 3000);
    }

    console.log(document.getElementById("subscribe-button"));







function getHeight(elementId) {
  const el = document.getElementById(elementId);

  if (!el) {
    console.log("Element not found!");
    return;
  }

  const offsetHeight = el.offsetHeight;          // includes padding + border
  const clientHeight = el.clientHeight;          // includes padding only
  const boundingHeight = el.getBoundingClientRect().height; // exact rendered height

  console.log(`Height of #${elementId} -> offsetHeight: ${offsetHeight}px, clientHeight: ${clientHeight}px, boundingHeight: ${boundingHeight}px`);
}

// Call it for your nav element
getHeight("nav-1");

