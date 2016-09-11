namespace employeeManagement.shared {
    'use strict';
    export class ListItemsDirective implements ng.IDirective {
        $templateCache: ng.ITemplateCacheService;
        restrict: string = 'E';
        scope: Object = {
            items: '=',
            order: '@',
            placeholder: '@'
        };
        templateUrl: string = 'views/list-items.html';
        static instance($templateCache: ng.ITemplateCacheService): ng.IDirective {
            return new ListItemsDirective($templateCache);
        };
        compile: ng.IDirectiveCompileFn = (elem: ng.IAugmentedJQuery, attr: ng.IAttributes): ng.IDirectiveLinkFn => {
            let primaryTemplate: string = 'primaryTemplate',
                secondaryTemplate: string = 'secondaryTemplate',
                cachedPrimaryTemplate: string = this.$templateCache.get(attr[primaryTemplate]).toString(),
                cachedSecondaryTemplate: string = this.$templateCache.get(attr[secondaryTemplate]).toString();
            elem.find('.primary-template').append(cachedPrimaryTemplate);
            elem.find('.secondary-template').append(cachedSecondaryTemplate);
            let listItemsLinkFunction: ng.IDirectiveLinkFn;
            listItemsLinkFunction = (scope: IListItems, linkedElem: ng.IAugmentedJQuery): void => {
                console.log(linkedElem);
            };
            return listItemsLinkFunction;
        };
        constructor($templateCache: ng.ITemplateCacheService) {
            this.$templateCache = $templateCache;
        }
    }
    ListItemsDirective.instance.$inject = ['$templateCache'];
    angular.module('employeeManagement.shared')
        .directive('listItems', ListItemsDirective.instance);
}
