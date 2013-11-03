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
    appdev: {
        src: [
            '<%= folder.src %>/js/lib/require-min.js',
            '<%= folder.src %>/js/app-config.js',
            '<%= folder.src %>/js/app.js'
        ],
        dest: '<%= folder.src %>/js/app-min.js'
    },
    appdist: {
        src: [
            '<%= folder.src %>/js/lib/require-min.js',
            '<%= folder.src %>/js/app-config-dist.js',
            '<%= folder.distTemp %>/app.js'
        ],
        dest: '<%= folder.dist %>/js/app-min.js'
    }
};