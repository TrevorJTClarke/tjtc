    module.exports = function(grunt) {

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Project configuration.
    grunt.initConfig({

        //
        concat: {
          dist: {
            src: [
                'public/js/src/**/*.js'
                ],
            dest: 'public/js/build/app.js'
          }
        },
        
        less: {
            live: {
                options: {
                    paths: ['public/less'],
                    yuicompress: true
                },
                files: {
                    'public/css/build/style.css': 'public/css/src/style.less'
                }
            }
        },

        //
        watch: {
            less: {
                files: ['public/css/src/**/*.less'],
                tasks: ['less']
            },

            concat: {
                files: 'public/js/src/**/*.js',
                tasks: 'concat'
            },

            min: {
                files: '<config:lint.files>',
                tasks: 'min'
            }
        }

    });
    

    // Default task.
    grunt.registerTask('js', 'concat');
    grunt.registerTask('css', 'less');
};
