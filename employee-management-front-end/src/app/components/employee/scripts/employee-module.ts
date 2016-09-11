namespace employeeManagement.employee {
    'use strict';
    angular.module('employeeManagement.employee', ['mgo-angular-wizard', 'ui.select', 'ngSanitize'])
    .run(['$templateCache', '$http', ($templateCache: ng.ITemplateCacheService, $http: ng.IHttpService) => {
        $http.get('views/employee-primary-template.html').then((template: any) => {
            $templateCache.put('views/employee-primary-template.html', template.data);
        });
        $http.get('views/employee-secondary-template.html').then((template: any) => {
            $templateCache.put('views/employee-secondary-template.html', template.data);
        });
    }]);
}
