namespace employeeManagement.shared {
    'use strict';
    export interface IListItems extends ng.IScope {
        display: boolean;
        group: string;
        items: any;
        order: string;
        placeholder: string;
    }
}
