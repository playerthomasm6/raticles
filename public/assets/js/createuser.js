$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("#submitBtn");
    var firstInput = $("#Fname");
    var secondInput = $("#Lname");
    var uName = $("#Username");
    var emailInput = $("#exampleInputEmail1");
    var passwordInput = $("#exampleInputPassword1");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("click", function(event) {
      event.preventDefault();
      const userData = {
        Firstname: firstInput.val().trim(),
        Lastname: secondInput.val().trim(),
        Username: uName.val().trim(),
        Email: emailInput.val().trim(),
        Password: passwordInput.val().trim()
      };
      console.log("This submit worked Ln 20 createuser.js" + userdata)
  
      if (!userData.Email || !userData.Password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.Firstname, userData.Lastname,userData.Username,userData.email, userData.Password);
      firstInput.val("");
      secondInput.val("");
      uName.val("");
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the main page
    // Otherwise we log any errors
    function signUpUser(Firstname, Lastname, Username, Email, Password) {
      $.post("/api/User", {
        Firstname: userData.Firstname,
        Lastname: userData.Lastname,
        Username: userData.Username,
        Email: userData.Email,
        Password: userData.Password
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
