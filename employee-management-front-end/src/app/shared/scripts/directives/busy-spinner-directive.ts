namespace employeeManagement.shared {
    'use strict';
    export class BusySpinnerDirective implements ng.IDirective {
        replace: boolean = true;
        restrict: string = 'E';
        templateUrl: string = 'views/busy-spinner.html';
        controller: any = BusySpinnerController;
        controllerAs: string = 'busyCtrl';
        scope: {};

        static instance(): ng.IDirective {
            return new BusySpinnerDirective;
        }
    }
    angular.module('employeeManagement.shared')
        .directive('busySpinner', BusySpinnerDirective.instance);
}
