var wide = 20;

$(document).ready(function() { 
    makeGrid(wide); 
    toggleBrush("black");
    $("#minus").click(function() {
        resolutionMinus();
    })
    $("#precise").click(function() {
        togglePrecise("black");
    })
    $("#brush").click(function() {
        toggleBrush("black");
    })
    $("#erase").click(function() {
        toggleBrush("#909090")
    })
    $("#clear").click(function() {
        clear();
    })
    $("#plus").click(function() {
        resolutionPlus();
    })
});

// Color parameter added for future adjustments and modularity
var toggleBrush = function(color) {
    $('body').on('mousedown mouseup', function mouseState(e) {
        if (e.type == "mousedown") {
            $(".box").mouseenter(function() {
                $(this).css("background-color", color);
            });
        } else {
            $(".box").unbind('mouseenter mouseleave');
        }
    });
}

// Not fully implemented
var togglePrecise = function() {
    $('body').on('mousedown mouseup', function mouseState(e) {
        if (e.type == "mousedown") {
            $(".box").mouseenter(function() {
                $(this).css("background-color", color);
            });
        }
    });
}

var clear = function() {
    $(".box").css("background-color", "#909090");
}

var resolutionMinus = function() {
        $(".box").remove();
        wide = wide - 2;
        if (wide < 2) {
            wide = 2;
        }
        makeGrid(wide);
}

var resolutionPlus = function() {
        $(".box").remove();
        wide = wide + 2;
        makeGrid(wide);
}

var makeGrid = function(wide) {
    var boxSize = calculateBoxSize(wide);
    var boxRowNumber = calculateRowNumbers(boxSize);
    var boxColumnNumber = calculateColumnNumbers(boxSize);
    var boxLength = boxSize + "px";
    $("body").css("line-height", boxLength);
    for (i=0; i<boxRowNumber; i++) {
        for (j=0; j<boxColumnNumber; j++) {
            $box = $('<div class="box">').prependTo("#sketchpad")
            $box.css("width", boxLength);
            $box.css("height", boxLength);
        }
    }
}

var calculateBoxSize = function(wide) {
    var sideLength = $("#sketchpad").width()/wide;
    if (sideLength < 7) {
        return 7;
    }
    else {
        return sideLength;
    }
}

var calculateRowNumbers = function(boxSize) {
    return Math.round($("#sketchpad").height()/boxSize);
}

var calculateColumnNumbers = function(boxSize) {
    return Math.round($("#sketchpad").width()/boxSize);
}