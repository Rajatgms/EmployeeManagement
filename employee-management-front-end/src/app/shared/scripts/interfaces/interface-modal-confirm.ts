namespace employeeManagement.shared {
    'use strict';
    export interface IModalConfirm extends ng.IScope {
        dirty: boolean;
        modalConfirm: {
            $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance
        };
    }
}
