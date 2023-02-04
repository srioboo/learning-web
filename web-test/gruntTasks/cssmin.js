/**
 * Configuracion para minificar css
 * 
 */
module.exports = {
    // el envoltorio cssmin: {} no se añade en estos casos el archivo debe llamarse
    // cssmin.js por fuerza
    target: {
      files: [{
        expand: true,  
        cwd: 'css',
        src: ['*.css', '!*.min.css'],
        dest: 'css/min',
        ext: '.min.css'
      }]
    }
  };