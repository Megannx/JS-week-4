// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employees = [];
  let addEmployee = true;

  while (addEmployee) {
    let employee = {};
    employee.firstName = prompt("Enter the employee's first name:");
    employee.lastName = prompt("Enter the employee's last name:");
    let salaryInput = prompt("Enter the employee's salary:");
    employee.salary = isNaN(parseFloat(salaryInput)) ? 0 : parseFloat(salaryInput);

    employees.push(employee);

    addEmployee = confirm("Do you want to add another employee?");
  }

  return employees; // Add this return statement to return the array of collected employees
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = employeesArray.reduce((acc, employee) => {
    return acc + employee.salary;
  }, 0);


  const averageSalary = totalSalary / employeesArray.length;
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
}
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
