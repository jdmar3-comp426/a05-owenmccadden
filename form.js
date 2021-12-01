// write a function called send_form to send a username, password, and email to the server

function send_form(username, password, email) {
  // create a post request to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/app/new", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({username: username, password: password, email: email}));
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("success");
      }
    }
}

// create a function to make a get request to localhost:3000/app/users
function get_users() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/app/users", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
        }
    }
    // create an alert that displays the responseText
    alert(xhr.responseText);
}

