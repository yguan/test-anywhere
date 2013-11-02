/*jslint nomen: true*/
/*global $,define,require,window */

require.config({
    baseUrl: 'js',
    paths: {
        lib: './lib',
        view: './view',
        aceMain: './lib/ace/ace',
        aceLanguage: './lib/ace/ext-language_tools'
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