/**
 * Created by Innovapath on 6/29/2016.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                banner: '/*! Created by <%=pkg.author%> on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: 'js/**/*.js',
                dest: '0.2/avatarServices.js'
            }
        },
        jslint: {
            server: {
                src: [
                    '**/*.js'
                ],
                exclude: [
                    'node_modules/**/*.js'
                ],
                options: {
                    edition: 'latest',
                    log: 'log/lint.log',
                    errorsOnly: true,
                    failOnError: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jslint');

    grunt.registerTask('default', ['concat','jslint']);

};

