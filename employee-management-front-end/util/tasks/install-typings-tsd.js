'use strict';

module.exports = function (gulp, config, $) {
  return function () {
    $.util.log($.util.colors.yellow.bold('Installing TypeScript definition files'));
    return gulp
      .src(config.typingsJson)
      .pipe($.plumber())
      .pipe($.typings());
  };
};