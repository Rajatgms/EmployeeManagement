'use strict';

module.exports = function (gulp, config, $) {
    return function () {
        $.util.log($.util.colors.yellow.bold('copying assets to employee distribution folder'));

        gulp
            .src(config.distCopyFolder, {base: config.buildFolder})
            .pipe($.plumber())
            .pipe(gulp.dest(config.distFolder));

        gulp
            .src(config.distCopyFolderForFonts)
            .pipe($.plumber())
            .pipe(gulp.dest(config.distFolder + '/fonts'));
    };
};