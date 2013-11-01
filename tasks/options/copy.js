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
                    'js/view/*.html'
                ],
                dest: '<%= folder.dist %>/'
            },
            {
                src: '<%= folder.src %>/js/all-lib-min.js',
                dest: '<%= folder.dist %>/js/all-lib.js'
            }
//            {
//                expand: true,
//                src: ['<%= folder.src %>/js/all-lib-min.js'],
//                dest: '<%= folder.dist %>/js/',
//                rename: function(dest, src) {
//                    console.log(src);
//                    return src.replace('-min.js', '.js');
//                }
//            }
        ]
    }
};