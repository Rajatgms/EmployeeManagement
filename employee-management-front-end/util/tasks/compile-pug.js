'use-strict';

module.exports = function (gulp, config, $) {
    return function () {
        $.util.log($.util.colors.yellow.bold('Compiling Pug templates To HTML'));

        gulp
        .src(config.pugIndexFile)
        .pipe($.plumber())
        .pipe($.pug({
            pretty: true
        }))
        .pipe(gulp.dest(config.buildFolder));

       return gulp
        .src([config.pugFiles, '!src/app/index.pug'])
        .pipe($.plumber())
        .pipe($.pug({
            pretty: true
        }))
        .pipe($.flatten())
        .pipe(gulp.dest(config.buildFolder + '/views'));
    };
};