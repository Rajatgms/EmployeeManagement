namespace employeeManagement.shared {
    'use strict';
    export class ModalConfirmDirective implements ng.IDirective {
        restrict: string = 'A';
        scope: Object = {
            dirty: '=',
            modalConfirm: '='
        };
        controller: any = ModalConfirmController;
        static instance(): ng.IDirective {
            return new ModalConfirmDirective;
        };
        link: ng.IDirectiveLinkFn =
            (scope: IModalConfirm, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: IModalConfirmController): void => {
                element.click((eventObject: MouseEvent) => {
                    if (scope.dirty) {
                        let confirm: angular.material.IConfirmDialog = ctrl.$mdDialog.confirm()
                            .title('Would you like to exit without saving your changes?')
                            .ariaLabel('confirm cancel')
                            .targetEvent(eventObject)
                            .ok('Yes')
                            .cancel('No');
                        ctrl.$mdDialog.show(confirm).then(() => {
                            window.onbeforeunload = undefined;
                            scope.modalConfirm.$uibModalInstance.close();
                        });
                    } else {
                        scope.modalConfirm.$uibModalInstance.close();
                    }
                });
            };
    };
    angular.module('employeeManagement.shared')
        .directive('modalConfirm', ModalConfirmDirective.instance);
}
