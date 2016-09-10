namespace employeeManagement {
    'use strict';
    function config($translateProvider: angular.translate.ITranslateProvider): void {
        $translateProvider.useStaticFilesLoader({
                prefix: 'assets/lang/lang-',
                suffix: '.json'
            })
            .registerAvailableLanguageKeys(['en'], {
                'en_US': 'en'
            })
            .useSanitizeValueStrategy('sanitize')
            .fallbackLanguage('en');

        if (!$translateProvider.use()) {
            $translateProvider.use('en');
        }
    };
    config.$inject = ['$translateProvider'];
    angular.module('employeeManagement').config(config);
}
