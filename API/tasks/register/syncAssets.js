/**
 * `tasks/register/syncAssets.js`
 *
 * ---------------------------------------------------------------
 *
 * For more information see:
 *   http://sailsjs.com/anatomy/tasks/register/sync-assets-js
 *
 */
'use strict';
module.exports = function (grunt) {
  grunt.registerTask('syncAssets', [
    'jst:dev',
    'less:dev',
    'sync:dev',
    'coffee:dev'
  ]);
};
