var wide = 150;

$(document).ready(function() { 
    makeGrid(wide); 
    $('body').on('mousedown mouseup', function mouseState(e) {
        if (e.type == "mousedown") {
            $(".box").mouseenter(function() {
                $(this).css("background-color", "black");
            });
        } else {
            $(".box").unbind('mouseenter mouseleave');
        }
   });
});

var makeGrid = function(wide) {
    var boxSide = calculateBoxSide(wide);
    var boxRowNumber = calculateRowNumbers(boxSide);
    var boxSideLength = boxSide + "px";
    $("body").css("line-height", boxSideLength);
    for (i=0; i<wide; i++) {
        for (j=0; j<boxRowNumber; j++) {
            $box = $('<div class="box">').appendTo(".sketchpad")
            $box.css("width", boxSideLength);
            $box.css("height", boxSideLength);
        }
    }
}
    
var calculateBoxSide = function(wide) {
    return $(".sketchpad").width()/wide;
}

var calculateRowNumbers = function(boxSideLength) {
    return Math.round($(".sketchpad").height()/boxSideLength);
}
