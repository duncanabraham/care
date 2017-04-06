/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * http://sailsjs.com/config/http
 */

module.exports.http = {



  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * http://sailsjs.com/documentation/concepts/middleware                      *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    allowOrigin: (req, res, next) => {
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Access-Control-Allow-Headers', 'X-Requested-With');
      next();
    },

    xframe: require('lusca').xframe('SAMEORIGIN'), //SAMEORIGIN
    poweredBy: require('helmet').hidePoweredBy(),
    noCache: require('helmet').noCache(),
    xssFilter: require('helmet').xssFilter({ setOnOldIE: true }),
    strictTransportSecurity: require('lusca').hsts({ maxAge: 31536000 }),
    p3p: require('p3p')(require('p3p').recommended),
    noSniff: require('helmet').noSniff(),

    order: [
      'cookieParser',
      'session',
      'bodyParser',
      'allowOrigin',
      'strictTransportSecurity',
      'p3p',
      'xframe',
      'noSniff',
      'poweredBy',
      'noCache',
      'xssFilter',
      'router',
      'www',
      'favicon'
    ]

    // order: [
    //   'cookieParser',
    //   'session',
    //   'bodyParser',
    //   'compress',
    //   'poweredBy',
    //   'router',
    //   'www',
    //   'favicon',
    // ],


    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    *                                                                          *
    * http://sailsjs.com/config/http#?customizing-the-body-parser              *
    *                                                                          *
    ***************************************************************************/

    // bodyParser: (function _configureBodyParser(){
    //   var skipper = require('skipper');
    //   var middlewareFn = skipper({ strict: true });
    //   return middlewareFn;
    // })(),

  },

};
