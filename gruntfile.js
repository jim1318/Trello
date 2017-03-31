module.exports = function(grunt) {
  grunt.initConfig({

 //Set Configuration Options For Each 
    uglify: {
      my_target: {
        files: {
          "public/javascripts/vendor/all.js": ["public/javascripts/vendor/all.js"]
        }
      }
    },

    //Automatic concatenation of installed Bower components in right order.
    bower_concat: {
      all: {
        dest: "public/javascripts/vendor/all.js",
        dependencies: {
          "underscore": "jquery",
          "backbone": "underscore"
        }
      }
    },

    //Precompile Handlebars templates to JST file.
    handlebars: {
      all: {
        options: {
          processContent: removeWhitespace,
          processName: extractFileName
          /*
          namespace: function(filename) {
            var names = filename.replace(/modules\/(.*)(\/\w+\.hbs)/, '$1');
            return names.split('/').join('.');
          },
          */
        },
        files: {
          "public/javascripts/handlebars_templates.js": ["handlebars/**/*.hbs"]
        }
      }
    },

    //Automatically run above when hbs files are changed - recompile the handlebars templates automatically!
    //Added by Jim Finnigan
    watch: {
      scripts: {
        files: ['**/*.hbs'],
        tasks: ["handlebars_template"],
        options: {
          livereload: true  
        }
      }
    },


    //Auto Copy the original test data files ito data folder - effective resets test data.
    copy: {
      main: {
        files: [
          //Copy Files in data_orig directory
          {expand: true, cwd: 'data_orig/', src: ['**'], dest: 'data/'},
        ]
      },
    }
  });


  //Have npm load each grunt task
  [
    "grunt-bower-concat",
    "grunt-contrib-uglify",
    "grunt-contrib-handlebars",
    "grunt-contrib-watch",
    "grunt-contrib-copy"
  ].forEach(function(task) {
    grunt.loadNpmTasks(task);
  });

  //Register what tasks can be run
  grunt.registerTask("default", ["bower_concat", "uglify"]);
  grunt.registerTask("handlebars_template", ["handlebars"]);
  grunt.registerTask("reset_data", ["copy"]);
};

//2 Helper function for handlebars options
//Remove whitespace
function removeWhitespace(template) {
  return template.replace(/ {2,}/mg, "").replace(/\r|\n/mg, "");
}

//Extract File name
function extractFileName(file) {
  return file.match(/\/(.+)\.hbs$/).pop();
}