namespace employeeManagement.employee {
    'use strict';
    export function EmployeeService(): IEmployeeService {
        let initialEmployees: [IEmployee] = [{
                dateOfBirth: new Date('23-dec-1989'),
                dateOfJoining: new Date('1-dec-2016'),
                department: 'IT',
                email: 'rajat.sharma@gmail.com',
                firstName: 'Rajat',
                lastName: 'Sharma',
                phone: '+91-9999999999',
                title: 'senior developer'
            },
            {
                dateOfBirth: new Date('2-dec-1989'),
                dateOfJoining: new Date('10-dec-2016'),
                department: 'IT',
                email: 'amit.shahran@gmail.com',
                firstName: 'Amit',
                lastName: 'Shahran',
                phone: '+91-9999999999',
                title: 'senior Tester'
            },
            {
                dateOfBirth: new Date('1-aug-1989'),
                dateOfJoining: new Date('10-dec-2016'),
                department: 'HR',
                email: 'nitin.sharma@gmail.com',
                firstName: 'Nitin',
                lastName: 'Sharma',
                phone: '+91-9999999999',
                title: 'Trainee'
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
