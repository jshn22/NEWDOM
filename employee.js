const employees = [
  { name: 'Alice', age: 28, salary: 35000 },
  { name: 'Bob', age: 34, salary: 45000 },
  { name: 'Charlie', age: 41, salary: 55000 },
  { name: 'Diana', age: 25, salary: 30000 }
];
const showNames = () => {
  const names = employees.map(emp => emp.name);
  document.getElementById('employeeOutput').innerHTML =
    names.map(n => `<div>${n}</div>`).join('');
};
const filterSalary = () => {
  const highEarners = employees.filter(emp => emp.salary > 40000);
  document.getElementById('employeeOutput').innerHTML =
    highEarners.map(e => `<div>${e.name} — ₹${e.salary}</div>`).join('');
};
const totalSalary = () => {
  const total = employees.reduce((sum, { salary }) => sum + salary, 0);
  document.getElementById('employeeOutput').innerHTML =
    `<div><strong>Total Salary Expense: ₹${total}</strong></div>`;
};
