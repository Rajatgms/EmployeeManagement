'use strict';

module.exports = function (gulp, config, $) {
  return function () {
    $.util.log($.util.colors.yellow.bold('Linting TypeScript'));
    return gulp
        .src(config.tsFiles)
        .pipe($.plumber())
        .pipe($.tslint())
        .pipe($.tslint.report('prose'));
  };
};