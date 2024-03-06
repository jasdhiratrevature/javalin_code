//Employee onclick functions
//******************************************************************** */
//******************************************************************** */
async function getUserId() {
  var user = {
    username: document.getElementById('hiddenUsername').innerText,
    password: document.getElementById('hiddenPassword').innerText,
    level: 'EMPLOYEE'

}
let response = await fetch(URL + 'ErsUser/Proxy', {
  method: 'POST',
  body: JSON.stringify(user),
  credentials: 'include'
});
if (response.status === 200) {
  let proxy = await response.json();
  let values = Object.values(proxy);
  let userId = values[0];
  hiddenUserId.innerText = userId;
  storedInfo.appendChild(hiddenUserId);
  }

else {
  failure();
}
}


selectButtonEmployee.onclick = async function () {
  let response = await fetch(URL + 'ErsReim/Reim/' + document.getElementById('reimbursementId').value, {
    method: 'GET',
    credentials: 'include'
  })
  if (response.status == 200) {
    let proxy = await response.json();
    let values = Object.values(proxy);
    let id = values[1].user_id;
    console.log(id);
    console.log(values);
    console.log(document.getElementById('hiddenUserId').innerText);
  

    if(id == document.getElementById('hiddenUserId').innerText) {
    employeeResolveMenu(proxy);}
    else{
      failure();
    }
  }
  else {
    failure();
  }
}


pastTicketsButton.onclick = async function(){
  let userId = document.getElementById('hiddenUserId').innerText;
  let response1 = await fetch(URL + 'ErsReim/User/' +userId, {
    method: 'GET',
    credentials: 'include'
  });
  if (response1.status === 200) {
    let data = await response1.json();
    employeePastRequestsMenu(data);
  }

else {
  failure();
}
}


requestSubmit.onclick = async function() {
  let x = "OTHER";
  if (travelRadio.checked) {
    x = "TRAVEL";
  }
  else if (foodRadio.checked) {
    x = "FOOD";
  }
  else if (lodgingRadio.checked) {
    x = "LODGING";
  }
  else {}
  let y =  document.getElementById('amountInput').value;
  if (isNaN(y) || y < 0) {
    failure()
  }
  else {
  y = Number(y).toFixed(2);
  z = Number(y);

  let request = {
    author: {
      user_id: document.getElementById('hiddenUserId').innerText
  },
  resolver: null,
  reimbursementType: x,
  amount: z,
  description: document.getElementById('descriptionInput').value,
  resolved: false,
  accepted: false
  }
  let response = await fetch(URL + 'ErsReim', {
    method: 'POST',
    body: JSON.stringify(request),
    credentials: 'include'
  });
  if(response.status === 201) {
    success();
    employeeMainMenuNav();
  }
  else {
    failure();
  }}
}