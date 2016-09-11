namespace employeeManagement.employee {
    'use strict';
    export class AddEmployeeController implements IAddEmployeeController {
        personalDetailForm: ng.IFormController;
        employee: IEmployee;
        employeeService: IEmployeeService;
        departments: [string];
        notificationService: employeeManagement.shared.INotificationService;
        validationPatterns: any;
        $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance;
        state: string;

        constructor($uibModalInstance: angular.ui.bootstrap.IModalServiceInstance,
                    notificationService: employeeManagement.shared.INotificationService,
                    employeeService: IEmployeeService) {
            this.$uibModalInstance = $uibModalInstance;
            this.validationPatterns = {
                EMPTY_SAFE_STRING: /^[A-Za-z0-9_\u00C0-\u02AD\s\.\-,@\+!\?:\']*$/,
                STANDARD_EMAIL_INPUT: /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,5})$/,
                STANDARD_MAX_INPUT: '120',
                STANDARD_PHONE_INPUT: /^(\+\d{1,3}[- ]?)?\d{10}$/
            };
            this.notificationService = notificationService;
            this.state = 'Input';
            this.employeeService = employeeService;
            this.departments = ['HR', 'IT'];
        }
        saveEmployee(): void {
            this.employeeService.save(this.employee);
            this.state = 'Result';
            this.personalDetailForm.$setPristine();
            this.notificationService.addInfo('Employee Added SuccessFully');
            window.onbeforeunload = undefined;
        }
        close(): void {
            this.$uibModalInstance.close();
        }
        reset(): void {
            this.employee = undefined;
            this.state = 'Input';
        }
    }
    angular.module('employeeManagement.employee').controller('AddEmployeeController', AddEmployeeController);
}
