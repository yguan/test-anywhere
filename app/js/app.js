/*jslint nomen: true*/
/*global $,define,require,window */

require.config({
    baseUrl: 'js',
    paths: {
        lib: './lib',
        view: './view',
        ace: './lib/ace/ace'
    },
    shim: {
        'ace': {
            exports: 'ace'
        }
    }
});

require([
    'lib/text',
    'lib/zepto',
    'lib/doT',
    'lib/mocha'
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
