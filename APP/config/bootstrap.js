/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.com/config/bootstrap
 */
'use strict';
module.exports.bootstrap = function (cb) {
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  sails.log.debug('  ██████╗ █████╗ ██████╗ ███████╗ ');
  sails.log.debug(' ██╔════╝██╔══██╗██╔══██╗██╔════╝ ');
  sails.log.debug(' ██║     ███████║██████╔╝█████╗   ');
  sails.log.debug(' ██║     ██╔══██║██╔══██╗██╔══╝   ');
  sails.log.debug(' ╚██████╗██║  ██║██║  ██║███████╗ ');
  sails.log.debug('  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ');
  sails.log.debug('');
  sails.log.debug('   CARE CASE MANAGEMENT SYSTEM    ');
  sails.log.debug('----------------------------------');
  sails.log.debug('');
  sails.log.debug('STARTING APPLICATION SERVER ...');

  return cb();
};
