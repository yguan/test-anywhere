/*jslint nomen: true*/
/*global $,define,require,window */

require.config({
    baseUrl: 'js',
    paths: {
        lib: './lib',
        view: './view',
        aceMain: 'http://yguan.github.io/repos/test-anywhere/js/lib/ace/ace',
        aceLanguage: 'http://yguan.github.io/repos/test-anywhere/js/lib/ace/ext-language_tools'
    },
    shim: {
        'aceMain': {
            exports: 'ace'
        },
        'aceLanguage': {
            exports: 'aceLanguage'
        }
    }
});