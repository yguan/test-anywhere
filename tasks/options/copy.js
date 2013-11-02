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
                    'js/lib/ace/**'
                ],
                dest: '<%= folder.dist %>/'
            },
            {
                '<%= folder.dist %>/js/app-config.js': '<%= folder.src %>/js/app-config-dist.js'
            }
        ]
    }
};