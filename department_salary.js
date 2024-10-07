// Initialize company structure with departments and employees
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

function calculateDepartmentSalary(department) {
    let totalSalary = 0;

    // Iterate over each employee in the department
    department.employees.forEach(employee => {
        totalSalary += calculateEmployeeSalary(employee);
    });

    return totalSalary;
}

function calculateEmployeeSalary(employee) {
    let total = employee.salary;

    // If the employee has subordinates, recursively add their salaries
    employee.subordinates.forEach(subordinate => {
        total += calculateEmployeeSalary(subordinate);
    });

    return total;
}

function calculateCompanySalary(company) {
    let totalCompanySalary = 0;

    // Iterate over each department in the company
    company.departments.forEach(department => {
        totalCompanySalary += calculateDepartmentSalary(department);
    });

    return totalCompanySalary;
}

// Example output
console.log("Total salary for Engineering Department: ", calculateDepartmentSalary(company.departments[0])); // Engineering
console.log("Total salary for Sales Department: ", calculateDepartmentSalary(company.departments[1])); // Sales
console.log("Total salary for the entire company: ", calculateCompanySalary(company));