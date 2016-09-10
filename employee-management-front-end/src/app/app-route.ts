namespace employeeManagement {
    'use strict';
    function config($stateProvider: angular.ui.IStateProvider,
                    $urlRouterProvider: angular.ui.IUrlRouterProvider): void {
        $stateProvider
            .state('side-tab', {
                templateUrl: 'views/side-tab.html'
            });
        $urlRouterProvider
            .otherwise('/employee');
    }
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    angular.module('employeeManagement').config(config);
}
