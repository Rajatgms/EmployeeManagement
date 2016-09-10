namespace employeeManagement.dashboard {
    'use strict';
    function config($stateProvider: angular.ui.IStateProvider): void {
        $stateProvider
            .state('side-tab.dashboard', {
                url: '/dashboard',
                views: {
                    'side-tab-main-view@side-tab': {
                        controller: 'DashboardController',
                        controllerAs: 'DashboardCtrl',
                        resolve: {},
                        templateUrl: 'views/dashboard.html'
                    }
                }
            });
    }
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    angular.module('employeeManagement.dashboard').config(config);
}
