$(document).ready(function(){
var charimage = new Image();
charimage.src="c.gif";
function sprite (options) 
{
				
    var that = {};
					
    that.context = options.context;
    that.width1 = options.width1;
    that.height1 = options.height1;
    that.width2 = options.width2;
    that.height2 = options.height2;
    that.image = options.image;
    that.render = function () {
        that.context.drawImage(
           that.image,
           0,
           0,
           that.width1,
           that.height1,
           0,
           0,
           that.width2,
           that.height2);
    };

    return that;
}
var canvas = document.getElementById("Animation");
canvas.width = 100;
canvas.height = 100;
var char = sprite({
    context: canvas.getContext("2d"),
    width1: 75,
    height1: 110,
    width2: 110,
    height2: 75,
    image: charimage
});
char.render();
});