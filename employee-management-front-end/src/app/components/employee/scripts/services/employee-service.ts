namespace employeeManagement.employee {
    'use strict';
    export function EmployeeService(): IEmployeeService {
        let initialEmployees: [IEmployee] = [{
                dateOfBirth: new Date('23-dec-1989'),
                dateOfJoining: new Date('1-dec-2016'),
                firstName: 'Rajat',
                lastName: 'Sharma',
                title: 'senior developer'
            },
            {
                dateOfBirth: new Date('2-dec-1989'),
                dateOfJoining: new Date('10-dec-2016'),
                firstName: 'Amit',
                lastName: 'Shahran',
                title: 'senior Tester'
            }];
        return {
            query: function(): [IEmployee] {
                return initialEmployees;
            },
            save: function(employee: IEmployee): void {
                initialEmployees.push(employee);
            }
        };
    }
    angular.module('employeeManagement.employee')
        .factory('employeeService', EmployeeService);
}
