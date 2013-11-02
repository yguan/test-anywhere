/*jslint nomen: true*/
/*global $,define,require,window */

require.config({
    baseUrl: 'js',
    paths: {
        lib: './lib',
        view: './view',
        aceMain: 'http://localhost:9000/js/lib/ace/ace',
        aceLanguage: 'http://localhost:9000/js/lib/ace/ext-language_tools'
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