'use strict';

module.exports = function (gulp, config, $) {
    var browserSync = require('browser-sync'),
        gulpSequence = require('gulp-sequence');

    return function () {
        $.util.log($.util.colors.yellow.bold('watch changes in sass, pug and typescript files'));
        gulp.watch(config.sassFiles, ['compile-sass']);
        gulp.watch(config.pugFiles, function(){
            gulpSequence('compile-pug', browserSync.reload);
        });
        gulp.watch(config.tsFiles, function(){
            gulpSequence('lint-ts', 'compile-ts', browserSync.reload);
        });
        gulp.watch(config.assets, function () {
            gulpSequence('copy-build-files', browserSync.reload);
        })
    }
};