'use strict';

var config = {
    buildFolder: 'build',
    sourceFolder: 'src',
    bower: {
        json: 'bower.json'
    },
    tsconfig: 'tsconfig.json',
    tsFiles: 'src/app/**/*.ts',
    tsTestFiles: 'src/app/**/*-test.ts',
    tsDefinitelyTypedFiles: 'typings/main.d.ts',
    pugFiles: 'src/app/**/*.pug',
    pugIndexFile: 'src/app/index.pug',
    sassFile: 'src/assets/styles/main.scss',
    sassFiles: 'src/**/*.scss',
    typingsJson: 'typings.json',
    assets: ['src/assets/**', '!src/assets/styles', '!src/assets/styles/**', '!src/assets/exceptions',
                '!src/assets/exceptions/**'],
    exceptionsFiles: 'src/assets/exceptions/*',
    bootstrapFile: 'src/app/*.js',
    
    karmaConfig: 'karma.conf.js',
    distFolder: 'employee/',
    distCopyFolder: ['build/assets/**', 'build/views/*.html', '!build/assets/**/*.css', '!build/assets/**/*.js'],
    distCopyFolderForFonts: ['build/vendor/bootstrap/fonts/*'],
    deleteFolder: ['build', 'typings']
};

module.exports = config;