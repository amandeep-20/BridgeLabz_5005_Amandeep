const students = [
    { name: 'Alice', marks: 85 },
    { name: 'Bob', marks: 78 },
    { name: 'Charlie', marks: 92 },
    { name: 'David', marks: 74 },
    { name: 'Eve', marks: 88 },
    { name: 'Frank', marks: 66 },
    { name: 'Grace', marks: 95 }
];
const result = [];
function categorize() {  
    students.forEach(student => {
      if (student.marks < 80) {
        result.push({'name': student.name, 'status': 'fail'});
      } else {
        result.push({'name': student.name, 'status': 'pass'});
      }
    });
  
    return result;
}
let arr = categorize();
console.log(result);

const passingStudents = arr.filter(student => student.status === 'Pass').map(student=>student.name);
console.log(passingStudents);