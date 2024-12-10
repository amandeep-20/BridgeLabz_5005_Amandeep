const employees = [
    { id: 1, name: "Alice", department: "HR", salary: 5000},
    { id: 2, name: "Bob", department: "Engineering", salary: 7000},
    { id: 3, name: "Charlie", department: "HR", salary: 4500},
    { id: 4, name: "Dave", department: "Finance", salary: 6000},
    { id: 5, name: "Eve", department: "Engineering", salary: 7500}
];

//filter by depat.
const getDepart =(department)=>{
    return employees.filter((employee)=> employee.department === department);
}
// console.log(getDepart("HR"));

//use of map to increase salary
const increase = employees.map(employee=>({
    salary: employee.salary*10
}));
// console.log(increase);

//reduce get total salary of hr department
const totalSalary = function(depart){
    const department = getDepart(depart);
    const total = department.reduce((acc,val)=>{
        return acc+val.salary;
    },0)
    return total;
}
// console.log(totalSalary("HR"));

//unique department by using set
const getUnique = function(){
    const depart = employees.map(employee=> employee.department);
    return new Set(depart);
}
// console.log(getUnique());

//salary and name in map
const getSalName = ()=>{
    const map = new Map();
    employees.forEach((val)=>{
        map.set(`name: ${val.name}`, `salary: ${val.salary}`);
    })
    return map;
}
// console.log(getSalName());

const addData = function(id,name,department,salary){
    let check = employees.some((val)=>{
        if(val.id === id ){
            return true;
        }
    })
    if(check){
        console.log("exist");
        return;
    }
    else{
        employees.push({id,name,department,salary});
        console.log("added");
    }
}
// addData(6,"aman","Tech",5000);
// addData(1,"aman","Tech",5000);
// console.log(employees);

const deleteData = function(id){
    let idx = employees.some((val)=>{
        if(val.id === id){
            return ;
        }
    })
    if(idx !== -1){
        employees.splice(idx,1);
        console.log("user deleted");
    }
    else{
        console.log("user not found");
    }
}
// deleteData(0);
// console.log(employees);

const separateDepart = () => {
    const hr = employees.filter(employee => employee.department === "HR");
    const engineer = employees.filter(employee => employee.department === "Engineering");
    const finance = employees.filter(employee => employee.department === "Finance");
    return {
        HR: hr,
        Engineering: engineer,
        Finance: finance
    };
};
// console.log(separateDepart());

const addDepartWise = function(id,name,department,salary){
    const separate = separateDepart();
    if(separate[department]){
        const data = {id,name,department,salary};
        separate[department].push(data);
    }
    return separate;
}
console.log(addDepartWise(8,'aman','HR',2000));