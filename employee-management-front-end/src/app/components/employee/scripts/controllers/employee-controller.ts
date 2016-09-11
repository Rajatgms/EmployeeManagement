namespace employeeManagement.employee {
  'use strict';
  export class EmployeeController implements IEmployeeController {
    employees: [IEmployee];
    private employeeService: any;
    private $uibModal: angular.ui.bootstrap.IModalService;
    constructor($uibModal: angular.ui.bootstrap.IModalService, employees: [IEmployee], employeeService: any) {
      this.$uibModal = $uibModal;
      this.employeeService = employeeService;
      this.employees = employees;
    }
    public addEmployee(): void {
      let modalInstance: angular.ui.bootstrap.IModalServiceInstance = this.$uibModal.open({
        backdrop: 'static',
        controller: 'AddEmployeeController',
        controllerAs: 'AddEmployeeCtrl',
        keyboard: false,
        templateUrl: 'views/add-employee.html',
        windowTopClass: 'full-modal'
      });
      modalInstance.result.then(() => {
        this.employees = this.employeeService.query();
      });
    }
  }

  angular.module('employeeManagement.employee').controller('EmployeeController', EmployeeController);

}
