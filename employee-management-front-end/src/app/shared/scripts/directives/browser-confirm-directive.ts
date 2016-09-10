namespace employeeManagement.shared {
    'use strict';
    export class BrowserConfirmDirective implements ng.IDirective {
        restrict: string = 'A';
        scope: Object = {
            browserConfirm: '=',
            dirty: '=',
            name: '='
        };
        controller: any = BrowserConfirmController;
        static instance(): ng.IDirective {
            return new BrowserConfirmDirective;
        };
    }
    angular.module('employeeManagement.shared')
        .directive('browserConfirm', BrowserConfirmDirective.instance);
}
