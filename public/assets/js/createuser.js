$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("#submitBtn");
  var firstInput = $("#Fname");
  var secondInput = $("#Lname");
  var uName = $("#Username");
  var emailInput = $("#exampleInputEmail1");
  var passwordInput = $("#exampleInputPassword1");

  // When the signup button is clicked, we validate the email and password are not blank
  $("#submitBtn").on("click", function (event) {
    console.log("test")
    event.preventDefault();
    const userData = {
      Firstname: firstInput.val().trim(),
      Lastname: secondInput.val().trim(),
      Username: uName.val().trim(),
      Email: emailInput.val().trim(),
      Password: passwordInput.val().trim()
    };
    console.log(userData)

    if (!userData.Email || !userData.Password || !userData.Username || !userData.Firstname || !userData.Lastname) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData);
    firstInput.val("");
    secondInput.val("");
    uName.val("");
    emailInput.val("");
    passwordInput.val("");

  });

  // Does a post to the signup route. If successful, we are redirected to the main page
  // Otherwise we log any errors
  function signUpUser(userData) {
    console.log(userData)
    $.post("/api/users", {
      Firstname: userData.Firstname,
      Lastname: userData.Lastname,
      Username: userData.Username,
      Email: userData.Email,
      Password: userData.Password
    })
      .then(function (data) {
        window.location.replace("/");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
