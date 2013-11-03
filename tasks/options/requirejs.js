module.exports = {
    dist: {
        options: {
            baseUrl: '<%= folder.src %>/js/',
            name: '<%= folder.src %>',
            exclude: ['aceMain'],
            out: '<%= folder.distTemp %>/app.js',
            generateSourceMaps: false,
            optimize: 'uglify2',
            findNestedDependencies: true,
            inlineText: true,
            preserveLicenseComments: false,
            mainConfigFile: '<%= folder.src %>/js/app-config-dist.js'
        }
    }
};
