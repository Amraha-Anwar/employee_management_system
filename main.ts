#! /usr/bin/env node
import inquirer from "inquirer";

console.log(`\n\t**********WELCOME TO EMPLOYEE MANAGEMENT SYSTEM**********\t\n`);

//Defining types
interface Employee {
    employee_id : number,
    employee_name : string,
    employee_salary : number
}

//Initializing variables
let collectionOfEmployees :Employee[] =[
    {
        employee_id: 3647,
        employee_name: "Zunaira",
        employee_salary: 50000 
    },
    {
        employee_id: 2301,
        employee_name: "Amraha",
        employee_salary: 75000
    },
    {
        employee_id: 6556,
        employee_name: "Maira",
        employee_salary: 100000
    }
];

//add employees function
async function add_employees (){
    let id = await inquirer.prompt
    (
        [   
            {
                name: "id",
                type: "number",
                message: "Enter ID of the Employee==>"
            }
        ]
    );
    let name = await inquirer.prompt
    (
        [
            {
                name: "name",
                type: "input",
                message: "Enter name of the Employee==>"
            }
        ]
    );
    let salary =await inquirer.prompt
    (
        [
            {
                name: "slr",
                type: "number",
                message: "Enter the salary to add==>"
            }
        ]
    )
        collectionOfEmployees.push(id, name, salary);
        console.log(`===>>Employee added successfully!!<<===`);
  
};

//Employees status
async function show_data() {
    console.log(collectionOfEmployees);
};

//Delete Employee from list
async function delete_employeeById() {
    let empoyeeId = await inquirer.prompt
    (
        [
            {
                name: "id",
                type: "number",
                message: "Enter the ID of the employee you want to delete==>"
            }
        ]
    )
 //in filter method, if the condition is false it excludes the element from the new array
    collectionOfEmployees = collectionOfEmployees.filter((employee) => employee.employee_id != empoyeeId.id);
        console.log(`===>>${empoyeeId.id} has bees Removed!!<<===`);
    
};

let condition: boolean = true;
while (condition){
    let operations = await inquirer.prompt
    (
        [
            {
                name: "Operations",
                type: "list",
                message: "Select an operation..",
                choices: ["UPDATE LIST", "VEIW EMPLOYEES LIST", "REMOVE EMPLOYEE" , "EXIT"]
            }
        ]
    ) 
    switch (operations.Operations){
    case "UPDATE LIST":
        let how_many = await inquirer.prompt
        (
            {
                name: "num",
                type: "number",
                message: "How many Employees do you want to add in list?"
            }
        )
        for (let i =0 ; i < how_many.num; i++){
        await add_employees()};
    break; 
    
    case "VEIW EMPLOYEES LIST":
        await show_data()
    break;

    case "REMOVE EMPLOYEE":
        await delete_employeeById()
    break;

    case "EXIT":
        console.log(`\n\t**********EXITING EMPLOYEE MANAGEMENT SYSTEM**********\t\n`);
        process.exit()
    break;

    default:

}
};



 

