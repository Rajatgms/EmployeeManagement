namespace employeeManagement.employee  {
    'use strict';
    export interface IEmployeeService {
        save(employee: IEmployee): void;
        query(): [IEmployee];
    }
}
