$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("submitBtn");
    var firstInput = $("Fname");
    var secondInput = $("Lname");
    var uName = $("#Username");
    var emailInput = $("#exampleInputEmail1");
    var passwordInput = $("#exampleInputPassword1");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        firstname: firstName.val().trim(),
        secondname: secondName.val().trim(),
        username: userName.val().trim(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.firstname, userData.secondname,userData.username,userData.email, userData.password);
      firstInput.val("");
      secondInput.val("");
      userName.val("");
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the main page
    // Otherwise we log any errors
    function signUpUser(firstname, secondname, username, email, password) {
      $.post("/api/signup", {
        firstname: firstname,
        secondname: secondname,
        username: username,
        email: email,
        password: password
      })
        .then(function(data) {
          window.location.replace("/members");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });