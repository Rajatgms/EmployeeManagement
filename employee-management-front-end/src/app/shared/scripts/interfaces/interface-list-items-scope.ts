namespace employeeManagement.shared {
    'use strict';
    export interface IListItems extends ng.IScope {
        items: any;
        order: string;
        placeholder: string;
    }
}
