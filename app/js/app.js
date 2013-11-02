/*jslint nomen: true*/
/*global $,define,require,window */

require.config({
    baseUrl: 'js',
    paths: {
        lib: './lib',
        view: './view',
        template: './view/template'

    }
});

require([
    'lib/text',
    'lib/ace/ace',
    'lib/ace/theme-chrome',
    'lib/ace/mode-javascript',
    'lib/ace/ext-language_tools',
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
