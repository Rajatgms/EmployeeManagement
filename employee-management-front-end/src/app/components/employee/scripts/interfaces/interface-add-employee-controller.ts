namespace employeeManagement.employee {
    'use strict';
    export interface IAddEmployeeController  {
        personalDetailForm: ng.IFormController;
        employee: IEmployee;
        departments: [string];
        state: string;
        validationPatterns: any;
        close(): void;
        saveEmployee(): void;
    }
}
