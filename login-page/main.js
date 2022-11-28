//  var uName = prompt("Enter Your Name:");
document.cookie = "username=John Doe";

function dispAlert() {
  i = 1;
  i++;
  console.log(i);
}
function validationUser() {
  localStorage.setItem("name", "Mahid Sk");

  // alert(username);
  // alert(uName);
  var user_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var cnf_pass = document.getElementById("cnf_pass").value;
  var mobile = document.getElementById("mobile").value;
  var number_pat = mobile.match(/[0-9]/g);
  // var mobile = document.getElementById("mobile").value;

  if (user_name != "") {
    if (last_name != "") {
      if (email != "") {
        if (pass != "") {
          if (cnf_pass != "") {
            if (pass == cnf_pass) {
              if (mobile != "") {
                if (number_pat) {
                  alert(localStorage.getItem("name"));
                  alert("Your log in success");
                  document.getElementById("fname_alert").style.display = "none";
                  // window.location.href = "about.html";
                } else {
                  alert("not match");
                }
              } else {
                alert("Enter your mobile no!");
              }
            } else {
              alert("Password and confirm password does not match porperly!");
            }
          } else {
            alert("Enter your confirm password !");
          }
        } else {
          alert("Enter your password !");
        }
      } else {
        alert("Enter your email !");
      }
    } else {
      alert("Enter your last name !");
    }
  } else {
    // alert("Enter your first name !");
    document.getElementById("fname_alert").style.display = "block";
  }
}
