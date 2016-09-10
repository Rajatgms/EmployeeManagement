namespace employeeManagement.shared {
    'use strict';
    export interface IBrowserConfirm extends ng.IScope {
        browserConfirm: {
            $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance;
        };
        dirty: boolean;
        name: ng.IFormController;
        onBeforeUnload(): string;
    }
}
