function validateFirstName() { //testing whether the input has 2 - 15 characters
  var firstName = document.getElementById('firstname').value;
  var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;

  if (re1.test(firstName)) { //if the input is valid, update page to prompt successful entry
    document.getElementById('firstNamePrompt').style.color = "Green";
    document.getElementById('firstNamePrompt').innerHTML = "<strong>Valid input!</strong>";
    return (true);
  }
  else { //if the input is invalid, update page to prompt a new entry
    document.getElementById('firstNamePrompt').style.color = "Red";
    document.getElementById('firstNamePrompt').innerHTML = "<strong>First name must be between 2 and 15 characters long!</strong>";
    return (false);
  }
}

function validateLastName() { //testing whether the input has 2 - 15 characters
  var lastName = document.getElementById('lastname').value;
  var re2 = /^[a-zA-Z\s\'\-]{2,15}$/;

  if (re2.test(lastName)) { //if the input is valid, update page to prompt successful entry
    document.getElementById('lastNamePrompt').style.color = "Green";
    document.getElementById('lastNamePrompt').innerHTML = "<strong>Valid input!</strong>";
    return (true);
  }
  else { //if the input is invalid, update page to prompt a new entry
    document.getElementById('lastNamePrompt').style.color = "Red";
    document.getElementById('lastNamePrompt').innerHTML = "<strong>Last name must be between 2 and 15 characters long!</strong>";
    return (false);
  }
}
