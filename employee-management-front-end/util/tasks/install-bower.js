'use strict';

module.exports = function(gulp, config, $) {
  return function () {
    $.util.log($.util.colors.yellow.bold('Installing Bower Packages'));
    return $.bower()
      .pipe($.plumber())
      .pipe(gulp.dest(config.buildFolder + '/vendor'));
  };
};