const employees = [
  { name: 'Alice', salary: 5000 },
  { name: 'Bob', salary: 7000 },
  { name: 'Charlie', salary: 4500 },
  { name: 'David', salary: 9000 },
  { name: 'Eve', salary: 12000 }
];
const salary = 6000;

//filter earning more then some salary
const filterSalary = employees.filter((employee,idx)=>{
  if(employee.salary>salary){
    return employee;
  }
})
console.log(filterSalary);

//map the filter employ to show there name and updated salary after 10% increment

const updatedSalary = filterSalary.map((employee,idx)=>{
  const update = Math.floor(employee.salary * 1.10);
  return{name : employee.name, updatedSalary: update};
})
console.log(updatedSalary);

//use reduce to calculaye the total updated salary for these employ

const totalUpdatedSalary = updatedSalary.reduce((start,current)=>{
  return start + current.updatedSalary;
},0)
console.log(totalUpdatedSalary);