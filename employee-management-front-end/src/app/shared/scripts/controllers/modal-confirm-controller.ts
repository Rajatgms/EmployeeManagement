namespace employeeManagement.shared {
    'use strict';
    export class ModalConfirmController implements IModalConfirmController {
        $mdDialog: angular.material.IDialogService;
        constructor($mdDialog: angular.material.IDialogService) {
            this.$mdDialog = $mdDialog;
        };
    }
    angular.module('employeeManagement.shared')
        .controller('ModalConfirmController', ModalConfirmController);
}
