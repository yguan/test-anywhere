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
            '<%= folder.src %>/less/css/mocha.css',
            '<%= folder.distTemp %>/app.css'
        ],
        dest: '<%= folder.dist %>/css/app-min.css'
    }
};
