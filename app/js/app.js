/*jslint nomen: true*/
/*global $,define,require,window */

require([
    'lib/chai',
    'lib/text',
    'lib/doT',
    'aceMain'
], function (chai) {
    'use strict';
    window.mocha.ui('bdd');
    window.mocha.reporter('html');
    chai.should();

    require(['view/all-views'], function (views) {
        views.init();
    });
});

// python -m http.server
