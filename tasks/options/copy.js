module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: '<%= folder.src %>/',
                src: [
                    'index.html',
                    'fonts/**',
                    'img/**',
                    'js/lib/require.js',
                    'js/lib/ace/worker-javascript.js'
                ],
                dest: '<%= folder.dist %>/'
            },
            {
                '<%= folder.dist %>/js/ace/worker/worker.js': '<%= folder.src %>/js/lib/ace/worker-javascript.js'
            }
        ]
    }
};