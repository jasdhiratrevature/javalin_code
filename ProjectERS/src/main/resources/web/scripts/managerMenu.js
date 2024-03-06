//Manager menu functions
//******************************************************************** */
//******************************************************************** */
function managerMainMenu() {
  hiddenUsername.innerText = document.getElementById('username').value;
  hiddenPassword.innerText = document.getElementById('password').value
  storedInfo.appendChild(hiddenUsername);
  storedInfo.appendChild(hiddenPassword);
  getManagerId();
  containerIndex.innerHTML = '';  
  containerIndex.appendChild(h3);
  containerIndex.appendChild(viewRequests);  
}


function managerMainMenuNav() {
  containerIndex.innerHTML = '';  
  containerIndex.appendChild(h3);
  containerIndex.appendChild(viewRequests);
}


managerHomeButton.onclick = function () {
  containerIndex.innerHTML = '';  
  containerIndex.appendChild(h3);
  containerIndex.appendChild(viewRequests);
}


function managerReimMenu(data) {
  containerIndex.innerHTML = '';
  containerIndex.appendChild(reimsTable);
  populateAllReimsTable(data);
  containerIndex.appendChild(filterBy);
  containerIndex.appendChild(filterByPending);
  containerIndex.appendChild(filterByResolved);
  containerIndex.appendChild(selectReimburesementText);
  containerIndex.appendChild(selectReimbursement);
  containerIndex.appendChild(selectButton);
}


function managerResolveMenu(data, id) {
  containerIndex.innerHTML = '';
  containerIndex.appendChild(reimDetailMenu);
  containerIndex.appendChild(reimsTable);
  populateSingleReimTable(data);
  containerIndex.appendChild(reimDetails);
  containerIndex.appendChild(reimApproval);
  containerIndex.appendChild(reimDenial);
  containerIndex.appendChild(hiddenReimNum);
  hiddenReimNum.innerText = id;
}