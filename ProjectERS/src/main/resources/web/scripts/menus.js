//Universal menu functions
//******************************************************************** */
//******************************************************************** */
function loadLoginMenu(){
  if (employeeLevel.checked) {
  employeeMainMenu();
  navbar.appendChild(logout);
  navbar.appendChild(employeeHomeButton);
    
  }
  if (managerLevel.checked) {
  managerMainMenu();
  navbar.appendChild(logout);
  navbar.appendChild(managerHomeButton);
  }
}

function failure() {
alert('Attempt failed')
}

function success() {
  alert('Attempt successful, redirecting...')
}

function requestFailure() {
  alert('This request has already been closed')
}

function populateAllReimsTable(data) {
  reimsTableBody.innerHTML = '';
  for (let ErsReim of data) {
    let row = document.createElement('tr');
    let values = Object.values(ErsReim);

    if (values[2] == null) {
      values[2] = [];
    }
    if (values[1] == null) {
      values[1] == [];
    }

    if (values[8] == false) {
      values[8] = 'no';
      values[9] = '--';
    }
    else {
      values[8] = 'yes';
    if (values[9] == false) {
      values[9] = 'no'
    }
    else {
      values[9] = 'yes';
    } }

    if(values[7] == null) {
      values[7] = '--';
    }

    if(values[6] == null){
      values[6]= '--';
    }

    if(values[5] == null) {
      values[5]= '--';
    }

    let shortDesc = values[5].substring(0,7)
    if(values[5].length > 7) {
    values[5] = (shortDesc + '...'); }

    let shortDesc1 = values[6].substring(0,8)
    if(values[6].length > 8) {
    values[6] = (shortDesc1 + '...'); }

    let shortDesc2 = values[7].substring(0,8)
    if(values[7].length > 8) {
    values[7] = (shortDesc2 + '...'); }

    values [4] = (values[4] + '$')
    
    let author = Object.values(values[1]);
    let resolver = Object.values(values[2]);
  
    for (let i = 0; i < values.length; i++) {
      let td = document.createElement('td');
      td.id = reimsTableHeaderArr[i]
      if (i == 1) {
        td.innerText = author[0];
      }
      else if (i == 2) {
        if (resolver[0] == undefined) {
        td.innerText = '--';}
        else {
        td.innerText = resolver[0];
      }
      }
      else {
        td.innerText = values[i];
      }
      row.appendChild(td);
    }
    reimsTableBody.appendChild(row);
  }
  reimsTable.appendChild(reimsTableBody);
}


function populateSingleReimTable(data) {
  reimsTableBody.innerHTML = '';

  let row = document.createElement('tr');
  
  let values = Object.values(data);

  if (values[2] == null) {
    values[2] = [];
  }
  if (values[1] == null) {
    values[1] == [];
  }

  if (values[8] == false) {
    values[8] = 'no';
    values[9] = ' ';
  }
  else {
    values[8] = 'yes';
  if (values[9] == false) {
    values[9] = 'no'
  }
  else {
    values[9] = 'yes';
  } }

  if(values[7] == null) {
    values[7] = '--';
  }

  if(values[6] == null){
    values[6]== '--';
  }

  let desc = values[5];
  if (desc.length > 50) {
    desc = desc.substring(0,50) + ' \n ' + desc.substring(50,desc.length);
    if(desc.length>100) {
      desc = desc.substring(0,100) + ' \n ' + desc.substring(100,desc.length);
        if(desc.length>150) {
      desc = desc.substring(0,150) + ' \n ' + desc.substring(150,desc.length);
      if(desc.length>200) {
        desc = desc.substring(0,200) + ' \n ' + desc.substring(200,desc.length);}
    }
    values[5] = desc;
    }
    
  }

  let author = Object.values(values[1]);
  let resolver = Object.values(values[2]);

  for (let i = 0; i < values.length; i++) {
    let td = document.createElement('td');
    td.id = reimsTableHeaderArr[i]+'single'
    if (i == 1) {
      td.innerText = author[0];
    }
    else if (i == 2) {
      if (resolver[0] == undefined) {
      td.innerText = '--';}
      else {
      td.innerText = resolver[0];
    }
    }
    else {
      td.innerText = values[i];
    }
    row.appendChild(td);
  }
  reimsTableBody.appendChild(row);
  reimsTable.appendChild(reimsTableBody);
}