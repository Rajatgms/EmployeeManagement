namespace employeeManagement.shared {
    'use strict';
    export function NotificationService($mdToast: angular.material.IToastService): INotificationService {
        return {
            addError: function(message: string): void {
                $mdToast.show({
                    controller: ToastController,
                    controllerAs: 'ToastCtrl',
                    hideDelay: 0,
                    position: 'top right',
                    template: '<md-toast class="notify-addError row margin-zero clearfix"><span class="col-xs-10">'
                    + message + '</span><i class="horizontal-center flaticon-forbidden15 col-xs-2" ' +
                    'ng-click="ToastCtrl.closeToast()"></i></md-toast>'
                });
            },
            addInfo: function(message: string): void {
                $mdToast.show({
                    controller: ToastController,
                    controllerAs: 'ToastCtrl',
                    hideDelay: 7000,
                    position: 'top right',
                    template: '<md-toast class="notify-addInfo row margin-zero"><span class="alert-info col-xs-10">'
                    + message + '</span><i class="horizontal-center flaticon-forbidden15 col-xs-2" ' +
                    'ng-click ="ToastCtrl.closeToast()"></i></md-toast>'
                });
            },
            addWarn: function(message: string): void {
                $mdToast.show({
                    controller: ToastController,
                    controllerAs: 'ToastCtrl',
                    hideDelay: 7000,
                    position: 'top right',
                    template: '<md-toast class="notify-addWarn row margin-zero"><span class="col-xs-10">'
                    + message + '</span><i class="horizontal-center flaticon-forbidden15 col-xs-2"' +
                    'ng-click="ToastCtrl.closeToast()"></i></md-toast>'
                });
            }
        };
    };
    NotificationService.$inject = ['$mdToast'];
    angular.module('employeeManagement.shared').factory('notificationService', NotificationService);
}
