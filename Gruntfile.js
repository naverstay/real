module.exports = function(grunt){

	grunt.initConfig({
		jadeUsemin: {
			main: {
				options: {
					tasks: { //optional if you want to use defaults 
						js: ['concat', 'uglify'],
						css: ['concat', 'autoprefixer', 'cssmin']
					},
					dirTasks: 'filerev', //optional 
					prefix: '',          //optional 
					targetPrefix: '',    //optional 
					replacePath: {       //optional 
						'#{env}': 'dist'
					}
				},
				files: [{
					cwd: "jade/",
					src: "*.jade",
					dest: "",
					expand: true,
					ext: ".html"
				}]
			}
		},
		watch  : {
			//templates: {
			//	files  : ['jade/*.jade'],
			//	tasks  : ['jade'],
			//	options: {
			//		spawn: false
			//	}
			//},
			styles   : {
				files  : ['sass/*.scss'],
				tasks  : ['sass'],
				options: {
					spawn: false
				}
			}
		},
		sass   : {
			dist: {
				options: {
					style: 'expanded'
				},
				files  : {
					'styles/main_global.css': 'sass/main_global.scss'
				}
			}
		},
		jade   : {
			compile: {
				options: {
					client: false,
					pretty: true
				},
				files  : [{
					cwd   : "jade/",
					src   : "*.jade",
					dest  : "",
					expand: true,
					ext   : ".html"
				}]
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['watch']);
};