// JavaScript for slideshow functionality
let slideIndex = 1;

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Automatically change slides every 3 seconds
setInterval(() => {
    plusSlides(1);
}, 3000);

// Initialize the slideshow
showSlides(slideIndex);

   // Add this function to hide the form initially
   function initForm() {
    document.getElementById("signupForm").style.display = "none";
}

function openForm() {
    document.getElementById("signupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("signupForm").style.display = "none";
}

function submitForm() {
    // Add logic to handle form submission if needed
    alert("Form submitted!");
    closeForm(); // Close the form after submission
    return false; // Prevent the form from actually submitting (for demo purposes)
}

// Call the initForm function when the page loads
window.onload = initForm;
