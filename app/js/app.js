/*jslint nomen: true*/
/*global $,define,require,window */

require([
    'lib/text',
    'lib/zepto',
    'lib/doT',
    'lib/mocha',
    'aceMain'
], function () {
    'use strict';
    window.mocha.ui('bdd');
    window.mocha.reporter('html');

    require(['lib/chai', 'view/all-views'], function (chai, views) {
        chai.should();
        views.init();
    });
});

// python -m http.server
