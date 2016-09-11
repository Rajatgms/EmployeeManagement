namespace employeeManagement.shared {
    'use strict';
    export function GroupByFilter(): Function {
        return _.memoize(function(items: any, field: string): any {
            return _.groupBy(items, field);
        });
    }
    angular.module('employeeManagement.shared').filter('groupBy', GroupByFilter);
}
