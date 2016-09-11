namespace employeeManagement.employee {
    'use strict';
    export interface IEmployee {
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        dateOfJoining: Date;
        department?: string;
        title: string;
        email?: string;
        phone?: string;
        description?: string;
    }
}
