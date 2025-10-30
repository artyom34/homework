// const numbers = [1, 5, 10, 15, 20];
// const newNumbers = numbers.map((number) => {
//   return number + 10;
// });
// console.log(newNumbers); // Output: [11, 15, 20, 25, 30]

// const names = ["Alice", "Bob", "Charlie", "Diana"]
// const namesInfo = names.map((name)=> {
//     return { name: name, length: name.length };
// })

// console.log(namesInfo);

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 80 },
// ];

// const productsWithFinalPrice = products.map((product) => {
//   return {
//     name: product.name,
//     price: product.price,
//     finalPrice: product.price * (1 - 15 / 100),
//   };
// });

// console.log(productsWithFinalPrice);
const employees = [
  { name: "Alice", salary: 50000, experience: 3 },
  { name: "Bob", salary: 60000, experience: 5 },
  { name: "Charlie", salary: 45000, experience: 2 },
];

const employeesWithTotal = employees.map((employee) => {
  return {
    name: employee.name,
    salary: employee.salary,
    experience: employee.experience,
    totalSalary:
      employee.salary + employee.salary * ((employee.experience * 5) / 100),
  };
});

console.log(employeesWithTotal);
