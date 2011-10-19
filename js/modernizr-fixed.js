Modernizr.addTest('positionfixed', function () {
    var test = document.createElement('div'),
        container = test.cloneNode(false),
         fake = false,
         root = document.body || (function () {
            fake = true;
            return document.documentElement.appendChild(document.createElement('body'));
         }());

   var oldCssText = root.style.cssText,
       origScrollTop = container.scrollTop;
  
   test.style.cssText = 'position:absolute;top:20px;';
   root.innerHTML = 'top';
   test.id = 'test';
   test.innerHTML = 'test';
   root.appendChild(test);
   root.style.cssText = 'background:red;width:40px;display:block;height:999999px';
   root.scrollTop = 200;
   window.scrollTo(0, 2000);
   var absPos = test.getBoundingClientRect().top;
   test.style.position = 'fixed';   
   var ret = test.getBoundingClientRect().top !== absPos;
   
   // root.removeChild(test);
   // root.style.cssText = oldCssText;  
   // root.scrollTop = origScrollTop; 
   // if (fake) {
   //    document.documentElement.removeChild(root);
   // }
   
   return ret;
});