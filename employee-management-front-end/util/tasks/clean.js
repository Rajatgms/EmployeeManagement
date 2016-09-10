'use strict';

module.exports = function (gulp, config, $) {
  return function () {
    $.util.log($.util.colors.yellow.bold('Cleaning Build'));
    var del = require('del');
    del(config.deleteFolder);
  };
};