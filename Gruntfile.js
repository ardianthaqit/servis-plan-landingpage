module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 1989,
                    protocol: "http",
                    open: true,
                    livereload: true,
                    base: ""
                }
            }
        },
        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            stylesheets: {
                files: ["src/scss/**/*.scss"],
                tasks: ["sass"]
            },
            scripts: {
                files: "src/**/*.js",
                tasks: ["jshint"]
            }
        },
        jshint: {
            options: {
                esversion: 6,
                reporter: require('jshint-stylish')
            },
            build: ['Gruntfile.js', 'src/js/main.js']
        },
        sass: {
            options: {
                style: "expanded"
            },
            dev: {
                files: {
                    "dist/css/style.css": "src/scss/main.scss"
                }
            }
        },
    });
    
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");
    
    grunt.registerTask("build", ["sass", "jshint", "connect", "watch"]);
};