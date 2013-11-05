module.exports = function (grunt) {
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('lib', ['concat:lib', 'uglify:lib']);

    grunt.registerTask('cssdev', ['less:dev', 'concat:cssdev']);

    grunt.registerTask('cssdist', ['less:dist', 'concat:cssdist']);

    grunt.registerTask('dev', ['cssdev', 'concat:appdev']);

    grunt.registerTask('build', ['less:dist', 'concat:cssdist', 'requirejs:dist', 'concat:appdist', 'copy', 'clean:dist']);

    grunt.registerTask('sdev', ['connect:dev']);

    grunt.registerTask('sdist', ['connect:dist']);
};