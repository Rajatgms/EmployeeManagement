namespace employeeManagement.employee {
    'use strict';
    export interface IAddEmployeeController  {
        personalDetailForm: ng.IFormController;
        employee: IEmployee;
        employeeService: IEmployeeService;
        departments: [string];
        notificationService: employeeManagement.shared.INotificationService;
        state: string;
        $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance;
        validationPatterns: any;
        close(): void;
        saveEmployee(): void;
    }
}
