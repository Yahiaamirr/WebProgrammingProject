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
    // Retrieve user input
    var firstName = document.getElementById("firstName").value;

    // Display welcome message
    alert("Welcome, " + firstName + "! Your account has been created.");

    // Close the form after submission
    closeForm();

    // Prevent the form from actually submitting (for demo purposes)
    return false;
}

function submitLoginForm() {
    // Retrieve user input
    var loginUsernameEmail = document.getElementById("loginUsernameEmail").value;

    // Display welcome message
    alert("Welcome back, " + loginUsernameEmail + "!");

    // Close the login form after submission
    closeLoginForm();

    // Prevent the form from actually submitting (for demo purposes)
    return false;
}

function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
}

function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
}
function initLoginForm() {
    document.getElementById("loginForm").style.display = "none";
}

// Call the initLoginForm function when the page loads
function initForms() {
    initForm();        // For the signup form
    initLoginForm();   // For the login form
}

// Call the initForms function when the page loads
window.onload = initForms;


function redirectToPage(pageName) {
    window.location.href = pageName;
}

    // Add logic to handle f
        var form = document.querySelector("form");
		form.addEventListener("submit", function(event) {
			event.preventDefault();
			var day = document.querySelector("#day").value;
			var time = document.querySelector("#time").value;
			var location = document.querySelector("#location").value;
			alert("You have reserved " + location + " on " + day + " at " + time + ".");
		});

            document.addEventListener('DOMContentLoaded', function () {
                // Initialize Flatpickr for date picking
                flatpickr("#date", {
                    enableTime: false,
                    dateFormat: "Y-m-d",
                });
    
                // Initialize Select2 for searchable dropdowns
                $('.js-example-basic-single').select2();
            });
    
            // Your existing form submission script
            var reserveButton = document.getElementById("reserveButton");
            reserveButton.addEventListener("click", function () {
                // Your existing form submission logic
                var date = document.querySelector("#date").value;
                var time = document.querySelector("#time").value;
                var location = document.querySelector("#location").value;
            
                alert("You have reserved " + location + " on " + date + " at " + time + ".");
            });
            



  $(".custom-carousel").owlCarousel({
                autoWidth: true,
                loop: true
              });
              $(document).ready(function () {
                $(".custom-carousel .item").click(function () {
                  $(".custom-carousel .item").not($(this)).removeClass("active");
                  $(this).toggleClass("active");
                });
 });

 // Assuming you are using AJAX to fetch data from the server

// Fetch locations and populate the dropdown
function fetchLocations() {
    var locationDropdown = document.getElementById("location");

    // Make an AJAX request to the PHP script
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "getLocations.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Update the options in the dropdown
            locationDropdown.innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}

// Call the function to fetch locations when the page loads
fetchLocations();
