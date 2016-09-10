(function(){
    'use strict';

    function getTask(filepath) {
        return require(filepath)(gulp, config, $);
    }

    var gulp = require('gulp'),
        gulpSequence = require('gulp-sequence'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('./util/config');

    gulp.task('install-bower', getTask('./util/tasks/install-bower'));
    gulp.task('install-tsd', getTask('./util/tasks/install-typings-tsd'));
    gulp.task('lint-ts', getTask('./util/tasks/lint-ts'));
    gulp.task('compile-ts', getTask('./util/tasks/compile-ts'));
    gulp.task('compile-sass', getTask('./util/tasks/compile-sass'));
    gulp.task('compile-pug', getTask('./util/tasks/compile-pug'));
    gulp.task('host-browser-sync', getTask('./util/tasks/host-browser-sync'));
    gulp.task('watch-files', getTask('./util/tasks/watch'));
    gulp.task('copy-build-files', getTask('./util/tasks/copy-build-files'));
    gulp.task('test', getTask('./util/tasks/test'));
    gulp.task('minify', getTask('./util/tasks/minify'));
    gulp.task('copy-dist-files', getTask('./util/tasks/copy-dist-files'));
    gulp.task('clean', getTask('./util/tasks/clean'));

    gulp.task('build', gulpSequence(
            ['install-bower', 'install-tsd'],
            ['lint-ts',
            'compile-ts',
            'compile-sass',
            'compile-pug',
            'copy-build-files']
        )
    );

    gulp.task('serve-dev', gulpSequence(
            'host-browser-sync',
            'watch-files'
    ));

    gulp.task('serve', gulpSequence(
        'build',
        'serve-dev'
    ));

    gulp.task('default', gulpSequence(
            'build',
            ['minify', 'copy-dist-files']
    ))
})();