$(document).ready(function () {
  $("#registerForm").on("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();

    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    let errorMsg = "";

    if (!nameRegex.test(name)) {
      errorMsg = "Please enter a valid name (only letters, 2–30 characters).";
    } else if (!emailRegex.test(email)) {
      errorMsg = "Please enter a valid email address.";
    } else if (!phoneRegex.test(phone)) {
      errorMsg = "Please enter a valid 10-digit Indian phone number.";
    }

    if (errorMsg) {
      $("#form-message")
        .removeClass("text-success")
        .addClass("text-danger")
        .text(errorMsg);
    } else {
      $("#form-message")
        .removeClass("text-danger")
        .addClass("text-success")
        .text("Form submitted successfully!");
      // Optionally clear the form
      // this.reset(); or $(this)[0].reset();
    }
  });
});

$(document).ready(function () {
  let mainNav = $("#main-nav");

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      mainNav.addClass("text-bg-dark");
    } else {
      mainNav.removeClass("text-bg-dark");
    }
  });
});
