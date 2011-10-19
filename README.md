#About

If you've ever tried to use position:fixed on Mobile Safari prior to version 5, then this plugin is for you.

This will give you a JavaScript variable (hasPositionFixed = true | false) that will let you make good decisions about whether or not you can use position:fixed or need to simulate it with some JavaScript.

I'm still hoping to turn this into a <a href="//modernizr.com">Modernizr</a> extension, but I have yet to be able to get that to work, as I don't think the iframe solution will work in that context.

- - -
#How To

Simply add this before the closing body tag.</p>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>
    <script src="hasPositionFixed/js/jquery.hasFixed.js"></script>
    <script>
      $.hasPositionFixed();
    </script>

This will create the 'hasPositionFixed' variable that you can then use later in your code. The gotcha here is that this code is asynchronous, so if you have a test following $.hasPositionFixed() it probably won't work as expected because the test may not be done.

The solution to this is to pass in any coide that needs to perform the test as a callback.
                
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>
    <script src="js/jquery.ba-throttle-debounce.min.js"></script>
    <script src="js/jquery.fix.js"></script>
    <script src="hasPositionFixed/js/jquery.hasFixed.js"></script>
    <script>
      $.hasPositionFixed(function() {
        $('nav').fix();
      });
    </script>

        
Now, after support has been determiend, it calls the jquery.fix plugin to take care of the fixed navbar. You'll noticve that I added in a reference to Ben Alman's throttle-debounce plugin since jquery.fix.js needs to add an event handler to the scroll event.

- - -
#Todos
* Make it work as a Modernizr test</li>
* Fix iPhone to fix position before end of scroll event

- - -
# Legal Stuff
This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License.