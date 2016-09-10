'use strict';

module.exports = function (gulp, config, $) {
  var browserSync = require('browser-sync');

  return function () {
    $.util.log($.util.colors.yellow.bold('STARTING SERVER'));
    browserSync({
      ui: false,
      port: 7000,
      files: [
          config.buildFolder
      ],
      server: {
          baseDir: config.buildFolder,
          index: "index.html"
      },
      ghostMode: {
        clicks: false,
        forms: false,
        scroll: false
      },
      injectChanges: true,
      logFileChanges: true,
      logLevel: 'debug',
      notify: true,
      reloadDelay: 500
    });
  };
 };