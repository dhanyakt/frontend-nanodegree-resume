'use-strict';

var ngrok = require('ngrok');

module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            dist: {
                files:[{
                    expand:'true',
                    src:['js/*.js'],
                    dest:'js/',
                    ext:'.min.js'
                }]
            },
        },

        jshint: {
            js: {
                src:['js/*.js']
            },
        },

// Plugin to know the pagespeed score in mobile and desktop.
        pagespeed: {
            options: {
                nokey: true,
                locale: "en_GB",
                threshold:30
            },
            local: {
                options: {
                    strategy: "desktop"
                }
            },
            mobile: {
                options: {
                    strategy: "mobile"
                }
            },
        },
    });

    //Load the plugin that provides uglified task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-pagespeed');

    // Integration of ngrok with pagespeed.
    grunt.registerTask('psi-ngrok','Run pagespeed with ngrok', function() {
        var done = this.async();
        var port = 8000;
        ngrok.connect(port, function(err,url){
            if(err !== null) {
                grunt.fail.fatal(err);
                return done();
            }

            grunt.config.set('pagespeed.options.url', url);
            grunt.task.run('pagespeed');
            done();
        });
    });

    //Default tasks
    grunt.registerTask('default',['jshint','uglify','psi-ngrok']);
};