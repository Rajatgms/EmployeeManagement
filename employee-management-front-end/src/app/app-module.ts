namespace employeeManagement {
    'use strict';
    angular.module('employeeManagement', [
        'ui.router',
        'ngCookies',
        'ngSanitize',
        'ngMaterial',
        'ngResource',
        'pascalprecht.translate',
        'ui.bootstrap',
        'employeeManagement.employee',
        'employeeManagement.dashboard',
        'employeeManagement.shared']);
}
