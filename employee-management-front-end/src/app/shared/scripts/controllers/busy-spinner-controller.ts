namespace employeeManagement.shared {
    'use strict';
    export class BusySpinnerController implements IBusySpinnerController {
        mode: string;
        constructor($rootScope: ng.IRootScopeService) {
            this.mode = 'indeterminate';
            $rootScope.$on('startSpinner', () => {
                this.mode = 'indeterminate';
            });
            $rootScope.$on('stopSpinner', () => {
                this.mode = '';
            });
            $rootScope.$on('$stateChangeStart', () => {
                this.mode = 'indeterminate';
            });
            $rootScope.$on('$stateChangeSuccess', () => {
               this.mode = '';
            });
        }
    }
    angular.module('employeeManagement.shared')
        .controller('BusySpinnerController', BusySpinnerController);
}
