module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Lint Spaces in code
    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-lintspaces');

  grunt.registerTask('lint', ['lintspaces']);
};
module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    clean: {
      build: ["build"]
    }
    copy: {
      build: {
        files: [{
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
    }
    less: {
      style: {
        files: {
          "css/style.css": ["less/style.less"]
        }
      }
    }
    autoprefixer: {
      options: {
        browsers: ["last 2 version", "ie 10"]
      },
      style: {
        src: "css/style.css"
      }
    }
    cmq: {
      style: {
        files: {
          "css/style.css": ["css/style.css"]
        }
      }
    }
    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: "gzip"
        },
        files: {
          "css/style.min.css": ["css/style.css"]
        }
      }
    }
    csscomb: {
      style: {
        expand: true,
        src: ["less/**/*.less"]
      }
    }
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["img/**/*.{png,jpg,gif,svg}"]
        }]
      }
    }
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        caseSensitive: true,
        keepClosingSlash: false
      },
      html: {
        files: {
          "index.min.html": "index.html"
        }
      }
    }

 grunt.registerTask("build", [
 "clean",
 "copy",
 "less",
 "autoprefixer",
 "cmq",
 "cssmin",
 "csscomb",
 "imagemin",
 "htmlmin"
 ]);

};
