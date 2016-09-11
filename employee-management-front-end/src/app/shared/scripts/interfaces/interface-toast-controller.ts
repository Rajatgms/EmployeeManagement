namespace employeeManagement.shared {
    'use strict';
    export interface IToastController {
        mdToast: angular.material.IToastService;
        closeToast(): void;
    }
}
