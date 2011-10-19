(function($) {
  $.extend({
    hasPositionFixed: function(callback) {
      $('body').append('<iframe id="testFixed" src="iframe-content.html" style="visibility: hidden; position: absolute; width: 0; height: 0"/>');      
      hasPositionFixed = null;
      cleanUpHasFixed = function() {
        $('#testFixed').remove();
      };
      
      if (typeof callback === 'function') {
        $(document).bind("hasFixed?", callback);
      }
    }
  });
})(jQuery);