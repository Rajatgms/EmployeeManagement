namespace employeeManagement.shared {
    'use strict';
    export interface INotificationService {
        addError(message: string): void;
        addInfo(message: string): void;
        addWarn(message: string): void;
    }
}
