namespace employeeManagement.employee {
    'use strict';
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider: angular.ui.IStateProvider): void {
        $stateProvider
            .state('side-tab.employee', {
                url: '/employee',
                views: {
                    'side-tab-main-view@side-tab': {
                        controller: 'EmployeeController',
                        controllerAs: 'EmployeeCtrl',
                        resolve: {
                            employees:
                                function(employeeService: IEmployeeService): [IEmployee] {
                                    return employeeService.query();
                            }
                        },
                        templateUrl: 'views/employee.html'
                    }
                }
            });
    }
    angular.module('employeeManagement.employee').config(config);
}
