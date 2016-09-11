namespace employeeManagement.shared {
    'use strict';
    export class BrowserConfirmController {
        constructor($scope: IBrowserConfirm, $translate: angular.translate.ITranslateService) {
            let confirmMessage: string = $translate.instant('BROWSER_CONFIRM_MESSAGE');
            $scope.$on('$locationChangeStart', (event: ng.IAngularEvent, next: string, current: string) => {
                if ($scope.name.$dirty) {
                    let status: boolean = window.confirm(confirmMessage);
                    if (!status) {
                        event.preventDefault();
                    } else {
                        $scope.name.$dirty = false;
                        if ($scope.browserConfirm.$uibModalInstance) {
                            $scope.browserConfirm.$uibModalInstance.close();
                        }
                        location.href = current;
                    }
                    $scope.$emit('stopSpinner');
                }
            });
            window.onbeforeunload = () => {
                if ($scope.dirty) {
                    return confirmMessage;
                }
            };
        };
    }
    angular.module('employeeManagement.shared')
        .controller('BrowserConfirmController', BrowserConfirmController);
}
