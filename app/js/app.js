require.config({
    baseUrl: 'js',
    paths: {
        lib: './lib',
        view: './view'
    }
});

require([
    'lib/ace/ace',
    'lib/ace/theme-chrome',
    'lib/ace/mode-javascript'
], function () {
    require(['view/all-views'], function (views) {
        views.init();
    });
});

// python -m http.server
