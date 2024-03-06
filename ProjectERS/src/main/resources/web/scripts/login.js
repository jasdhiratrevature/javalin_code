//Login page functions
//******************************************************************** */
//******************************************************************** */
logout.onclick = function () {
  location.reload();
  return false;
}


login.onclick = async function loginToApp() {
	// my code
	alert("loginToApp")
  if (managerLevel.checked) {
    var user = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      level: 'MANAGER'
    }
  }
  else if (employeeLevel.checked) {
    var user = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      level: 'EMPLOYEE'
     }
     // my code
     alert("EMP "+ user.username)
  }
  else {
    var user = {
      
    }
  }

  let response = await fetch(URL + 'Login', {
    method: 'POST',
    body: JSON.stringify(user),
    //credentials: 'include'
  });

  if (response.status === 200) {
      loadLoginMenu();
    }
  else {
   failure();
  }
}