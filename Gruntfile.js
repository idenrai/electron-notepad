/**
 * Gruntfile.js
 **/
module.exports = function(grunt) {
    'use strict';
    var moment = (require('moment'))();
    var timestamp = 'None';

    // 自動でgrunt Taskをロードする。(grunt.loadNpmTasksは省略可能)
    require('load-grunt-tasks')(grunt);

    // 作業時間表示
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // html task
        includes: {
            files: {
                cwd: 'app/html/',    // app/htmlのhtmlファイルにinclude処理をして
                src: ['**/*.html'],
                dest: 'app/view/',    // その結果をapp/viewに入れる
                options: {
                    flatten: true,
                    debug: true,
                    includePath: 'app/html/'
                }
            }
        }
    });

    // html task
    grunt.registerTask('html', ['includes']);

    // default task
    grunt.registerTask('default', ['html']);
};
