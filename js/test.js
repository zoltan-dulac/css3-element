var mytest = new function () {
	var me = this,
		//canvas = document.getElementById('my-canvas'),
		html = document.getElementById('test-css').outerHTML + document.getElementById('test-element').outerHTML,
		z = 10,
		ctx = document.getCSSCanvasContext("2d", "mycanvas", z*100, z*100),
		canvas = ctx.canvas;
		
		
		me.init  = function () {
			canvas.width = z * 100;
			canvas.height = z * 100;
			rasterizeHTML.drawHTML(html, canvas, {zoom: z}).then(
				function success(renderResult) {
					var jpegUrl = canvas.toDataURL("image/jpeg");
					if (document.getCSSCanvasContext) {
						
					} else {
						document.body.style.backgroundImage = 'url(' + jpegUrl + ')';
					}
					//
				}, 
				
				function error() {
					
				}
				
			);
		};
		
		/*
		 * getComputedStyle: code from http://blog.stchur.com/2006/06/21/css-computed-style/
		 */
		me.getComputedStyle = function(elem)
		{
		  var computedStyle;
		  if (typeof elem.currentStyle != 'undefined')
		    { computedStyle = elem.currentStyle; }
		  else
		    { computedStyle = document.defaultView.getComputedStyle(elem, null); }
		
		  return computedStyle;
		}
		
};

var backgroundStyle = mytest.getComputedStyle(document.body).backgroundImage;

if (backgroundStyle === 'none') {
	mytest.init();
}