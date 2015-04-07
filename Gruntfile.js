module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    lintspaces: {
      all: {
        src: [
          "*.html"
        ],
      options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: ".editorconfig",
          ignores: [
            "html-comments",
            "js-comments"
          ],
          showTypes: true,
          showCodes: true
        }
      }
    },

    clean: {
      build:["build"]
    },

    copy: {
      build:{
        files:[{
          expand: true,
          cwd: "source",
          src: [
            "img/**",
            "js/**",
            "index.html"
          ],
          dest: "build"
        }]
      }
    },

    csscomb: {
      style: {
        expand: true,
        src: ["less/**/*.less"]
      }
    },

    less: {
      style: {
        files: {
          "build/css/style.css": ["source/less/style.less"]
        }
      }
    },

    autoprefixer: {
      options:{
        browsers: ["last 2 versions", "ie 10"]
      },
      style: {
        src: "build/css/style.css"
      }
    },

    cmq: {
      style: {
        files: {
          "build/css/style.css" : ["build/css/style.css"]
        }
      }
    },

    cssmin: {
      style: {
        options:{
          keepSpecialComments: "none",
          report: "gzip"
        },
        files: {
          "build/css/style.min.css" : ["build/css/style.css"]
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif,svg}"]
        }]
      }
    }
  });


  grunt.registerTask("lint", ["lintspaces"]);
  grunt.registerTask("svg-sprite", ["grunticon"]);

  grunt.registerTask("default", [
    "clean",
    "copy",
    "csscomb",
    "less",
    "autoprefixer",
    "cmq",
    "cssmin",
    "imagemin"
  ]);

};
