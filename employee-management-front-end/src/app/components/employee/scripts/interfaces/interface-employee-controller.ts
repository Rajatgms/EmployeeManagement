namespace employeeManagement.employee {
    'use strict';
    export interface IEmployeeController {
        employees: [IEmployee];
        addEmployee(): void;
    }
}
