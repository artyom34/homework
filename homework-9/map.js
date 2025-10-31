// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 80 },
// ];

// const productsWithFinalPrice = products.map((products) => {
//   return {
//     name: products.name,
//     price: products.price,
//     finalPrice: products.price * (1 - 15 / 100),
//   };
// });
// console.log(productsWithFinalPrice);

const employees = [
  { name: "Alice", salary: 50000, experience: 3 },
  { name: "Bob", salary: 60000, experience: 5 },
  { name: "Charlie", salary: 45000, experience: 2 },
];

const employeesWithTotal = employees.map((employee) => {
  let percentForYear = 5;
  let percentForExperience = employee.experience * percentForYear;

  return {
    name: employee.name,
    salary: employee.salary,
    experience: employee.experience,
    totalSalary:
      employee.salary + (percentForExperience * employee.salary) / 100,
  };
});

console.log(employeesWithTotal);
