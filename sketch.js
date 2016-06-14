var wide = 32;
var tall = 32;

$(document).ready(function() { 
    makeGrid(wide, tall);
});

var makeGrid = function(wide, tall) {
    for (i=0; i<wide; i++) {
        for (j=0; j<tall; j++) {
            $box = $('<div class="box">').appendTo(".sketchpad")
            $box.css("width", calculateBoxWidth(wide));
            $box.css("height", calculateBoxHeight(tall));
        }
    }
}
    
var calculateBoxWidth = function(wide) {
    return ($(".sketchpad").width()/wide + "px");
}

var calculateBoxHeight = function(tall) {
    return ($(".sketchpad").height()/tall + "px");
}