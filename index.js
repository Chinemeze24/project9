const student = {}
// //const studentData = new Object();
// window.addEventListener("DOMContentLoaded", (event) => {
//     const student = {}

// student['name'] = 'Paul'
// student.age = 12
// student['department'] = 'Computer Engineering'

// //object name
// console.log('the name of the student is +" " + student.name')

// console.log(`The age of the student is ${student.age} \n the department is ${student.department}`)
// console.log(student)

// })

// let suvCars = ["4Runner","4matic"]
// let subanCars = ["sienna", "mini van"]
// let student = {
// 	name:"Nenye",
//     age: 25
//     }
// const cars = ["here",suvCars,2, subanCars, stydent];
// console.log(car[4]["age"])
// let suvCars = ["4Runner","4matic"]
// let subanCars = ["sienna", "mini van"]
// let student = {
// 	name:"Nenye",
//     age: 25
//     }
// const cars = ["here",suvCars,2, subanCars, stydent];
// console.log(car[4]["age"])

window.addEventListener("DOMContentLoaded", (event) => {
    const taskName = document.getElementById("task-name");
    const taskDescription = document.getElementById("task-description");
    const button = document.getElementById("add-todo")
    const listContainer = document.getElementById('list')

    const taskArray = [
{ nameOfTask: "fetch water", taskDescription: "fetch it from the well"},
{ nameOfTask: "cook food", taskDescription: "try cook rice"},
{ nameOfTask: "cook meat", taskDescription: "cook it well"},
    ];

    //const newtask
    const addTodo = () => {
        if(taskName.value === '' || taskDescription.value === ''){
            alert('please fill the form')
        }

            const task = {};

            task['nameOfTask'] = taskName.value;
            task['descriptionOfTask'] = taskDescription.value;
            taskArray.push(task);
            console.log(taskArray.length);
            taskName.value = '';
            taskDescription.value = '';
            return
        };

        const displayTodo = () => {
            listContainer.innerHTML = ''
            //const li = document.createElement("li");
            //const editButton

            for ( let index = 0; index < taskArray.length; index++ ){
            const li = document.createElement('li');
            console.log(index, taskArray[index]);
            li.innerHTML = `${taskArray[index].nameOfTask} <br/> ${taskArray[index].taskDescription}`;
            listContainer.appendChild(li);
            }
        }


        button.addEventListener("click", () => {
            addTodo();
            displayTodo()
        
            })


    })
