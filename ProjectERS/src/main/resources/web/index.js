const URL = 'http://localhost:7000/';

//PAGE ELEMENTS SECTION
//******************************************************************** */
//******************************************************************** */
//******************************************************************** */

//Login page elements
//******************************************************************** */
//******************************************************************** */
let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('loginButton');
let employeeLevel = document.getElementById('radio1');
let managerLevel = document.getElementById('radio2');

//Universal menu elements
//******************************************************************** */
//******************************************************************** */
let containerIndex = document.getElementsByClassName('container')[0];
let storedInfo = document.getElementsByClassName('storedInfo')[0];
let navbar = document.getElementsByClassName('navbar')[0];
let br = document.createElement('br');
br.innerText = ' \n ';
let logout = document.createElement('button');
logout.innerText = 'Logout';
logout.className = 'button';
let h3 = document.createElement('h3');
h3.innerText = 'Hello and welcome to your home menu. Please select an option from below: ';
let reimsTable = document.createElement('table');
var reimsTableHeaderArr = ['Id', 'Author Id', 'Resolver Id', 'Type', 'Amount', 'Description',
'Submit Time', 'Resolve Time',  'Resolved', 'Accepted'];
var reimsTableHeder = document.createElement('thead');
for (let i = 0; i < reimsTableHeaderArr.length; i++) {
  let th = document.createElement('th');
  th.innerText = reimsTableHeaderArr[i];
  reimsTable.appendChild(th);
}
var reimsTableBody = document.createElement('tbody');

//Manager menu elements
//******************************************************************** */
//******************************************************************** */
let managerHomeButton = document.createElement('button');
managerHomeButton.innerText = 'Home';
managerHomeButton.className = 'button';
let viewRequests = document.createElement('button');
viewRequests.className = 'button';
viewRequests.innerHTML = 'View all reimbursement requests'
let filterBy = document.createElement('h4');
filterBy.innerText = 'Filter your requests by:';
let filterByPending = document.createElement('button');
filterByPending.className = 'button';
filterByPending.innerText = 'Pending requests';
let filterByResolved = document.createElement('button');
filterByResolved.className = 'button';
filterByResolved.innerHTML = 'Resolved requests';
let selectReimbursement = document.createElement('input');
selectReimbursement.id = 'reimbursementId';
let selectReimburesementText = document.createElement('h4');
selectReimburesementText.innerText = 'Enter the Id of the reimbursement you would like to view/approve/deny: ';
let selectButton = document.createElement('button');
selectButton.className = 'button';
selectButton.innerText = 'Select reimbursement';
let reimDetailMenu = document.createElement('h3');
reimDetailMenu.innerText = 'Details for this reimbursement are: ';
let reimDetails = document.createElement('div');
let reimApproval = document.createElement('button');
reimApproval.className = 'button';
reimApproval.id = 'reimApproval';
reimApproval.innerText = 'Approve this reimbursement request';
let reimDenial = document.createElement('button');
reimDenial.className = 'button';
reimDenial.innerText = 'Deny this reimbursement request';
let hiddenReimNum = document.createElement('hiddenReimNum');
hiddenReimNum.hidden = true;
hiddenReimNum.id = 'hiddenReimNum';
hiddenReimNum.innerText = '2';


//Employee menu elements
//******************************************************************** */
//******************************************************************** */
let employeeHomeButton = document.createElement('button');
employeeHomeButton.className = 'button';
employeeHomeButton.innerText = 'Home';
let pastTicketsButton = document.createElement('button');
pastTicketsButton.className = 'button';
pastTicketsButton.innerText = 'View past tickets';
let addReimRequestButton = document.createElement('button');
addReimRequestButton.className = 'button';
addReimRequestButton.innerText = 'Add a new reimbursement';
let hiddenUsername = document.createElement('hiddenUsername');
hiddenUsername.hidden = true;
hiddenUsername.innerText = '2';
hiddenUsername.id = 'hiddenUsername';
let hiddenPassword = document.createElement('hiddenPassword');
hiddenPassword.hidden = true;
hiddenPassword.innerText = '2';
hiddenPassword.id = 'hiddenPassword';
let foodLabel = document.createElement('label');
let foodRadio = document.createElement('input');
foodRadio.type= 'radio';
foodRadio.name= 'typeRadio';
foodRadio.id= 'foodRadio';
foodLabel.htmlFor = 'foodRadio';
foodLabel.innerText = 'Food'
let lodgingLabel = document.createElement('label');
let lodgingRadio = document.createElement('input');
lodgingRadio.type= 'radio';
lodgingRadio.name= 'typeRadio';
lodgingRadio.id = 'lodgingRadio';
lodgingLabel.htmlFor = 'lodgingRadio';
lodgingLabel.innerText = 'Lodging'
let travelLabel = document.createElement('label');
let travelRadio = document.createElement('input');
travelRadio.type= 'radio';
travelRadio.name= 'typeRadio';
travelRadio.id = 'travelRadio';
travelLabel.htmlFor = 'travelRadio';
travelLabel.innerText = 'Travel';
let otherLabel = document.createElement('label');
let otherRadio = document.createElement('input');
otherRadio.type= 'radio';
otherRadio.name= 'typeRadio';
otherRadio.id = 'otherRadio';
otherLabel.htmlFor = 'otherRadio';
otherLabel.innerText = 'Other'
let amountInput = document.createElement('textarea');
amountInput.id = 'amountInput';
amountInput.rows = 1;
amountInput.cols = 8;
let amountInputLabel = document.createElement('label');
amountInputLabel.htmlFor = 'amountInput';
amountInputLabel.innerText = '\n \n Amount: \n';
let descriptionInput = document.createElement('textarea');
descriptionInput.id = 'descriptionInput';
descriptionInput.rows = 8;
descriptionInput.cols = 50;
let descriptionInputLabel = document.createElement('label');
descriptionInputLabel.htmlFor = 'descriptionInput';
descriptionInputLabel.innerText = '\n \n Description: \n';
let welcomeRequest = document.createElement('h4');
welcomeRequest.innerText = 'Enter the details of your request below';
let requestSubmit = document.createElement('button');
requestSubmit.className = 'button';
requestSubmit.innerText = 'Submit request'
let hiddenUserId = document.createElement('hiddenUserId');
hiddenUserId.hidden = true;
hiddenUserId.id = 'hiddenUserId';
hiddenUserId.innerText = '2';
let reimbursementRadioTye = document.createElement('words');
reimbursementRadioTye.innerText = 'Type: \n';
let selectReimburesementTextEmployee = document.createElement('h4');
selectReimburesementTextEmployee.innerText = 'Enter the Id of the reimbursement you would like to view closer: ';
let selectButtonEmployee = document.createElement('button');
selectButtonEmployee.className = 'button';
selectButtonEmployee.innerText = 'Select reimbursement';
let selectReimbursementEmployee = document.createElement('input');
selectReimbursementEmployee.id = 'reimbursementId';

//FUNCTIONS SECTION
//******************************************************************** */
//******************************************************************** */
//******************************************************************** */

//Universal menu functions
//******************************************************************** */
//******************************************************************** */



//Login page functions
//******************************************************************** */
//******************************************************************** */




//Manager menu functions
//******************************************************************** */
//******************************************************************** */



//Manager onclick functions
//******************************************************************** */
//******************************************************************** */




//Employee Menu Functions
//******************************************************************** */
//******************************************************************** */



//Employee onclick functions
//******************************************************************** */
//******************************************************************** */








