(function($) {
  $.fn.fix = function(options) {
    var settings = $.extend({
          className: 'fixed' 
        },
        options),
        
        fixes = {
          native: function($self, onscreen) {
            $self.toggleClass(settings.className, !onscreen);
          },
          js: function($self, onscreen) {
            $self.css({
              top: $(document).scrollTop(),
              position: 'absolute'
            });
          }
        };
        
    return this.each(function() {
      var $self = $(this),
          fn = 'js';
      
      if (hasPositionFixed) fn = 'native';
      
      $(document).bind('scroll', $.throttle( 250, function() {
        var onscreen = $self.offset().top + $self.height() < $(document).scrollTop() ||
                       $self.offset().top > $(document).scrollTop() + window.innerHeight;
        
        fixes[fn]($self, onscreen);
      }));
    });
  };
})(jQuery);