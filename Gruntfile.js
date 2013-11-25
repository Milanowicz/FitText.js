module.exports = function(grunt) {
    
    "use strict";
    
    // Project configuration.
    grunt.initConfig({

        pkg : grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: [
                    'jquery.fittext.js'
                ]
            }            
        },
        
        uglify : {
            options : {
                banner : '/*!\n' +
                         ' * <%= pkg.name %> <%= pkg.version %>\n' +
                         ' * Copyright <%= grunt.template.today("yyyy") %>, Milanowicz https://github.com/Milanowicz \n' +
                         ' * Copyright 2011, Dave Rupert http://daverupert.com \n' +
                         ' * Released under the WTFPL license \n' +
                         ' * http://sam.zoy.org/wtfpl/ \n' +
                         ' * Version <%= pkg.version %> by <%= pkg.author %>\n' +
                         ' */\n',
                report : 'min'
            },
            force : {
                src : 'jquery.fittext.js',
                dest : 'jquery.fittext.min.js'
            }
        },
        
    });
    
    // Load Grunt Plug-Ins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Default: run all task(s).
    grunt.registerTask('default', ['jshint', 'uglify']);

}; 