/*
 * grunt-test
 * https://github.com/salrio/grunt-test
 *
 * Copyright (c) 2019 Salva Rioboo
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.grunt_test = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.grunt_test = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.grunt_test.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.grunt_test.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].grunt_test = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
