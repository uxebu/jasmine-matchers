module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        indent: 2,
        white: '',
        eqnull: true,
        browser: true,
        newcap: false,
        predef: [
          'afterEach',
          'beforeEach',
          'describe',
          'expect',
          'it',
          'jasmine',
          'require',
          'spyOn',
          'console',
          'runs',
          'xdescribe',
          'xit',
          'waitsFor'
        ]
      },
      all: ['Grunfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    jasmine: {
      test: {
        src: ['src/**/*.js', '!src/matchers.js'],
        options: {
          host: 'http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/',
          outfile: '_spec_runner.html',
          specs: ['test/**/*-spec.js'],
          template: require('grunt-template-jasmine-requirejs')
        }
      }
    },
    jasmine_node: {
      projectRoot: 'test',
      requirejs: 'test/require-config.js',
      forceExit: true
    },
    connect: {
      'test': {
        options: {
          hostname: 'localhost',
          port: 8231
        }
      }
    },
    concat: {
      dist: {
        src: ['src/**/*.js', '!src/matchers.js'],
        dest: 'dist/jasmine-matchers.js'
      }
    },
    watch: {
      files: '<%= jshint.all %>',
      tasks: ['default']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('default', ['jshint', 'test', 'release']);
  grunt.registerTask('release', ['concat']);
  grunt.registerTask('server', ['connect', 'jasmine:test:build', 'watch']);
  grunt.registerTask('test', ['jasmine_node']);
  grunt.registerTask('test-phantom', ['connect:test', 'jasmine:test']);
};
