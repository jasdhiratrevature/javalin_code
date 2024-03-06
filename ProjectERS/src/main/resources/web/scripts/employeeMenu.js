//Employee Menu Functions
//******************************************************************** */
//******************************************************************** */

function employeeMainMenu(){
  hiddenUsername.innerText = document.getElementById('username').value;
  hiddenPassword.innerText = document.getElementById('password').value
  storedInfo.appendChild(hiddenUsername);
  storedInfo.appendChild(hiddenPassword);
  getUserId();
  containerIndex.innerHTML = '';
  containerIndex.appendChild(h3);
  containerIndex.appendChild(pastTicketsButton);
  containerIndex.appendChild(addReimRequestButton);
}


function employeePastRequestsMenu(data) {
  containerIndex.innerHTML = '';
  containerIndex.appendChild(reimsTable);
  populateAllReimsTable(data);
  containerIndex.appendChild(selectReimburesementTextEmployee)
  containerIndex.appendChild(selectButtonEmployee);
  containerIndex.appendChild(selectReimbursementEmployee);
}


function employeeMainMenuNav(){
  containerIndex.innerHTML = '';
  containerIndex.appendChild(h3);
  containerIndex.appendChild(pastTicketsButton);
  containerIndex.appendChild(addReimRequestButton);
}


employeeHomeButton.onclick = function(){
  containerIndex.innerHTML = '';
  containerIndex.appendChild(h3);
  containerIndex.appendChild(pastTicketsButton);
  containerIndex.appendChild(addReimRequestButton);
}


addReimRequestButton.onclick = function createReimRequest(){
  containerIndex.innerHTML = '';
  containerIndex.appendChild(welcomeRequest);
  containerIndex.appendChild(reimbursementRadioTye);
  containerIndex.appendChild(foodLabel);
  containerIndex.appendChild(foodRadio);
  containerIndex.appendChild(travelLabel);
  containerIndex.appendChild(travelRadio);
  containerIndex.appendChild(lodgingLabel)
  containerIndex.appendChild(lodgingRadio);
  containerIndex.appendChild(otherLabel);
  containerIndex.appendChild(otherRadio);
  containerIndex.appendChild(amountInputLabel);
  containerIndex.appendChild(amountInput);
  containerIndex.appendChild(descriptionInputLabel);
  containerIndex.appendChild(descriptionInput);
  containerIndex.appendChild(requestSubmit);
}


function employeeResolveMenu(data) {
  containerIndex.innerHTML = '';
  containerIndex.appendChild(reimDetailMenu);
  containerIndex.appendChild(reimsTable);
  populateSingleReimTable(data);
}