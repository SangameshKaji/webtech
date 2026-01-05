function validate() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    alert("All fields are required");
  } else {
    alert("Login Successful");
  }
}
