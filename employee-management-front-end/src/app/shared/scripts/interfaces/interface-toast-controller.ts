namespace employeeManagement.shared {
    'use strict';
    export interface IToastCtrl {
        mdToast: angular.material.IToastService;
        closeToast(): void;
    }
}
