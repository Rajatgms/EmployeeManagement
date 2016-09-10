'use strict';

module.exports = function (gulp, config, $) {
  return function () {
      var tsProject = $.typescript.createProject({
          "target": "es5",
          "removeComments":true,
          "pretty": true,
          "outFile": "app.js"
      });
      var tsTestProject = $.typescript.createProject({
          "target": "es5",
          "removeComments":true,
          "pretty": true,
          "outFile": "test.js"
      });
      $.util.log($.util.colors.yellow.bold('Compiling Typescript To Javascript'));

             gulp
            .src([config.tsTestFiles, config.tsDefinitelyTypedFiles])
            .pipe($.plumber())
            .pipe($.typescript(tsTestProject))
            .pipe(gulp.dest(config.buildFolder + '/scripts'));

      return gulp
            .src([config.tsFiles, '!src/app/**/*-test.ts', config.tsDefinitelyTypedFiles])
            .pipe($.plumber())
            .pipe($.sourcemaps.init())
            .pipe($.typescript(tsProject))
            .on('error', function () {
                $.util.beep(2);
            })
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(config.buildFolder + '/scripts'));
  };
};
