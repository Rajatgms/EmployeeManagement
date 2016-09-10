namespace employeeManagement.shared {
    'use strict';
    export class ToastCtrl implements IToastCtrl {
        mdToast: angular.material.IToastService;
        constructor($mdToast: angular.material.IToastService) {
            this.mdToast = $mdToast;
        }
        closeToast(): void {
            this.mdToast.hide();
        };
    }
    angular.module('employeeManagement.shared').controller('ToastCtrl', ToastCtrl);
}
