$(document).ready(function () {
  // Getting references to our form and inputs
  var loginForm = $(".login-btn");
  var emailInput = $(".username");
  var passwordInput = $(".password");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      Email: emailInput.val().trim(),
      Password: passwordInput.val().trim()
    };
    console.log(userData)

    if (!userData.Email || !userData.Password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(userData) {
    $.post("/api/signin", {
      Email: userData.Email,
      Password: userData.Password
    })
      .then(function () {
        window.location.replace("/wish-list");
        //   window.location.replace("/wishlist.html");
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});