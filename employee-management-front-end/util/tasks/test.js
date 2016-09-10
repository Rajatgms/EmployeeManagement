'use strict';

var Server = require('karma').Server,
    path = require('path');

module.exports = function (gulp, config, $) {
  return function (done) {
    $.util.log($.util.colors.yellow.bold('Starting Karma'));
    
    new Server({
      configFile: path.resolve(config.karmaConfig),
      singleRun: true
    },done).start();
  };
};  