 $(document).ready(function () {
  // Getting references to our form and input
  // var signUpForm = $("#submitBtn");
  var firstInput = $("#Fname");
  var secondInput = $("#Lname");
  var uName = $("#Username");
  var emailInput = $("#exampleInputEmail1");
  var passwordInput = $("#exampleInputPassword1");

  $("#form.formsubmit").on("click", function (event) {
    event.preventDefault();
    var userData = {
      FirstName: firstInput.val().trim(),
      LastName: secondInput.val().trim(),
      Username: uName.val().trim(),
      Email: emailInput.val.trim(),
      Password: passwordInput.val().trim()
    };
    console.log("This is logging" + userData);

    if (!userData.Email || !userData.Password || !userData.FirstName || !userData.LastName || !userData.Username)
      return;

    // function to create a new user
   // createUser(userData.FirstName, userData.LastName, userData.Username, userData.Email, userData.Password);
    firstInput.val("");
    secondInput.val("");
    uName.val("");
    emailInput.val("");
    passwordInput.val("");
  }); 

  function createUser(FirstName,LastName,Username,Email,Password){
    $.post("/api/user", {
      FirstName: FirstName,
      LastName: LastName,
      Username: Username,
      Email: Email,
      Password: Password
    })
    .then(function(data){
      // window.location("/index");
      console.log(data);
    })
    .catch(handleLoginErr)
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});