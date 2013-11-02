module.exports = {
    dist: {
        options: {
            baseUrl: '<%= folder.src %>/js/',
            name: '<%= folder.src %>',
            exclude: ['ace'],
            out: '<%= folder.dist %>/js/app.js',
            generateSourceMaps: false,
            optimize: 'uglify2',
            findNestedDependencies: true,
            inlineText: true,
            preserveLicenseComments: false,
            paths: {
                ace: './lib/ace/ace'
            },
            shim: {
                'ace': {
                    exports: 'ace'
                }
            }
        }
    }
};
