'use strict';

module.exports = function (gulp, config, $) {
    return function () {
        $.util.log($.util.colors.yellow.bold('copying assets to build folder'));        
            //copy assets favicons, fonts, lang etc
        gulp
            .src(config.assets)
            .pipe($.plumber())
            .pipe(gulp.dest(config.buildFolder + '/assets'));
    };
};