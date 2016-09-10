'use strict';

module.exports = function(gulp, config, $) {
  return function () {
    $.util.log($.util.colors.yellow.bold('Compiling SASS To CSS'));
    return gulp
        .src(config.sassFile)
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.autoprefixer({browsers: ['last 2 versions', '> 5%']}))
        .pipe(gulp.dest(config.buildFolder + '/styles/'));
  };
};