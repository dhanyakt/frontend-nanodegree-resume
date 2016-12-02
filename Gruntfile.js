'use-strict';

require('load-grunt-tasks')(grunt);

module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            dist: {
                files:[{
                    expand:'true',
                    src:['js/*.js'],
                    dest:'docs/',
                    ext:'.min.js'
                }]
            },
        },

        jshint: {
            js: {
                src:['js/*.js']
            },
        },

        //css minification
        cssmin: {
            first_target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            },
        },

        // Inlining
        inline: {
            dist: {
                options: {
                    cssmin: true
                },
                src: 'index.html',
                dest: 'docs/index.html'
            }
        },

        minifyHtml: {
            options: {
                cdata: true
            },
            dist: {
                files: {
                    'docs/index.html': 'docs/index.html'
                }
            },
        },
    });

    //Load the plugin that provides uglified task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //Default tasks
    grunt.registerTask('default',['jshint','uglify','cssmin','inline','minifyHtml']);
};