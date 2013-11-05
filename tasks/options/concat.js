module.exports = {
    cssdev: {
        src: [
            '<%= folder.src %>/less/mocha.css',
            '<%= folder.src %>/css/app.css'
        ],
        dest: '<%= folder.src %>/css/app-min.css'
    },
    cssdist: {
        src: [
            '<%= folder.src %>/less/mocha.css',
            '<%= folder.distTemp %>/app.css'
        ],
        dest: '<%= folder.dist %>/css/app-min.css'
    },
    lib: {
        src: [
            '<%= folder.src %>/js/lib/jquery-1.10.2.js',
            '<%= folder.src %>/js/lib/require.js',
            '<%= folder.src %>/js/lib/mocha.js'
        ],
        dest: '<%= folder.src %>/js/all-lib.js'
    },
    appdev: {
        src: [
            '<%= folder.src %>/js/all-lib.js',
            '<%= folder.src %>/js/app-config.js',
            '<%= folder.src %>/js/app.js'
        ],
        dest: '<%= folder.src %>/js/app-min.js'
    },
    appdist: {
        src: [
            '<%= folder.src %>/js/all-lib-min.js',
            '<%= folder.src %>/js/app-config-dist.js',
            '<%= folder.distTemp %>/app.js'
        ],
        dest: '<%= folder.dist %>/js/app-min.js'
    }
};