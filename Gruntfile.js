module.exports = function(grunt) {

	grunt.initConfig({
		nunjucks: {
			options: {
				data: grunt.file.readJSON('data.json'),
				paths: ['src/templates', 'src/templates/layouts']
			},
			render: {
				files: [
					{
						expand: true,
						cwd: 'src/templates/emails',
						src: [
							'**/*.njk',
							'!**/_*.njk'
						],
						dest: './dist/',
						ext: '.email.html'
					}
				]
			}
		},
		juice: {
			options: {},
			dist: {
				files: [{
					expand: true,
					src: ['./dist/*.email.html'],
					dest: './'
				}]
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: 'none'
				},
				files: {
					'dist/css/style.css': 'src/scss/style.scss'
				}
			}
		},
		prettify: {
			options: {
				indent: 4
			},
			all: {
				expand: true,
				cwd: './',
				ext: '.html',
				src: ['*.html'],
				dest: 'dist/'
			}
		},
		watch: {
			dev: {
				files: [
					'src/scss/**/*.scss',
					'src/templates/**/*.html',
					'src/templates/**/*.njk',
					'data.json'
				],
				tasks: ['sass', 'nunjucks', 'juice', 'prettify']
			},
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'dist/**/*.html'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './dist',
						directory: true
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-nunjucks-2-html');
	grunt.loadNpmTasks('grunt-juice');
	grunt.loadNpmTasks('grunt-prettify');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('css', ['sass']);
	grunt.registerTask('build', ['css', 'nunjucks', 'juice', 'prettify']);
	grunt.registerTask('default', ['browserSync', 'watch']);
}