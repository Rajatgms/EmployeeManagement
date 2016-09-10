module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      'build/vendor/jquery/dist/jquery.js',
      'build/vendor/angular/angular.js',
      'build/vendor/bootstrap/dist/js/bootstrap.js',
      'build/vendor/angular-mocks/angular-mocks.js',
      'build/vendor/angular-ui-router/release/angular-ui-router.js',
      'build/vendor/angular-cookies/angular-cookies.js',
      'build/vendor/angular-translate/angular-translate.js',
      'build/vendor/angular-sanitize/angular-sanitize.js',
      'build/vendor/angular-resource/angular-resource.js',
      'build/vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.js',  
      'build/vendor/angular-animate/angular-animate.js',
      'build/vendor/angular-aria/angular-aria.js', 
      'build/vendor/angular-material/angular-material.js',
      'build/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
      'build/vendor/lodash/lodash.js',
      'build/vendor/angular-wizard/dist/angular-wizard.js',
      'build/vendor/angular-ui-select/dist/select.js',
      'build/scripts/app.js',
      'build/scripts/test.js'
    ],
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },
    reporters: ['progress'],


    // web server port
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
};
