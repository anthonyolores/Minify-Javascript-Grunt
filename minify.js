module.exports = function(grunt) {
    grunt.initConfig(
	{
    pkg: grunt.file.readJSON('package.json'), //read package settings
	uglify: {
		options:{
			sourceMap: false, //true to create source maps, no otherwise
			compress: {
				drop_console: true //remove console logs
			}
		},
		all: {
			files: [
			{
				expand: true,
				cwd: '../scripts/', //directory unminified javascript files
				src: ['*.js', '!*.min.js'], //[wildcard jfile type, wildcard minified file name]
				dest: '../scripts/min', //directory minified javascript files
				ext: '.min.js' //file name extension for minified javascript files
			 }]
		}

	}
	}
);

//load grunt tasks
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('default', ['uglify']);
}