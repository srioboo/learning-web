/**
 * Configuracion para verificar css
 * 
 */
module.exports = {
    // el envoltorio csslint: {} no se añade en estos casos el archivo debe llamarse
    // csslint.js por fuerza
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