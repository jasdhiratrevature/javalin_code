//Manager onclick functions
//******************************************************************** */
//******************************************************************** */
async function getManagerId() {
  var user = {
    username: document.getElementById('hiddenUsername').innerText,
    password: document.getElementById('hiddenPassword').innerText,
    level: 'MANAGER'
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


viewRequests.onclick = async function viewRequests() {
  let response = await fetch(URL + 'ErsReim', {
    method: 'GET',
    credentials: 'include'
  });
  if (response.status == 200) {
    let data = await response.json();
    managerReimMenu(data);
  }
  else {
    failure();

  }
}


filterByPending.onclick = async function () {
  let response = await fetch(URL + 'ErsReim/False', {
    method: 'GET',
    credentials: 'include'
  });
  if (response.status == 200) {
    let data = await response.json();
    managerReimMenu(data);
  }
  else {
    failure();
  }
}


filterByResolved.onclick = async function () {
  let response = await fetch(URL + 'ErsReim/True', {
    method: 'GET',
    credentials: 'include'
  });
  if (response.status == 200) {
    let data = await response.json();
    managerReimMenu(data);
  }
  else {
    failure();
  }
}


selectButton.onclick = async function () {
  let id = document.getElementById('reimbursementId').value;
  let response = await fetch(URL + 'ErsReim/Reim/' + document.getElementById('reimbursementId').value, {
    method: 'GET',
    credentials: 'include'
  })
  if (response.status == 200) {
    let data = await response.json();
    managerResolveMenu(data, id);
  }
  else {
    failure();
  }
}


reimApproval.onclick = async function () {
  let response = await fetch(URL + 'ErsReim/Reim/' + document.getElementById('hiddenReimNum').innerText, {
    method: 'GET',
    credentials: 'include'
  })
  if (response.status == 200) {
    let data = await response.json();

    let values = Object.values(data);
    let author = Object.values(values[1]);
    if(values[8]==true){
      requestFailure();
    }
    else{
    let x = author[0];
    let y = document.getElementById('hiddenUserId').innerText;
    let accReim = {
      reimbursementId: values[0],
      author: { user_id: x } ,
      resolver: {user_id: y },
      reimbursementType: values[3],
      amount: values[4],
      description: values[5],
      submitTime: values[6],
      resolved: true,
      accepted: true
    }
    let response1 = await fetch(URL + 'ErsReim', {
      method: 'PUT',
      body: JSON.stringify(accReim),
      credentials: 'include'
    }); if (response1.status == 201) {
      success(); 
      managerMainMenuNav(); 
    }
  else {
    failure();
    
  }}
}
  else {
  failure();
}
}


reimDenial.onclick = async function () {
  let response = await fetch(URL + 'ErsReim/Reim/' + document.getElementById('hiddenReimNum').innerText, {
    method: 'GET',
    credentials: 'include'
  })
  if (response.status == 200) {
    let data = await response.json();

    let values = Object.values(data);
    let author = Object.values(values[1]);
    if(values[8]==true){
      requestFailure();}
      else {
    let x = author[0];
    let y = document.getElementById('hiddenUserId').innerText;
    let accReim = {
      reimbursementId: values[0],
      author: { user_id: x } ,
      resolver: {user_id: y },
      reimbursementType: values[3],
      amount: values[4],
      description: values[5],
      resolved: true,
      accepted: false
    };
    let response1 = await fetch(URL + 'ErsReim', {
      method: 'PUT',
      body: JSON.stringify(accReim),
      credentials: 'include'
    }); if (response1.status == 201) {
      success();
      managerMainMenuNav();
    }
  else {
    failure();
  }}
}
  else {
  failure();
}
}