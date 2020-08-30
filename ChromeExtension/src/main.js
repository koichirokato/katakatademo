document.onkeydown = function (e) {
    var current = document.activeElement;
    if (e.key === 'Backspace') {
        return true;
    }
    if (current.type === 'textarea' || current.type === 'text' || current.type === 'search') {
        var isEnter = e.key === 'Enter';
        var prefix = isEnter ? 'tan' : 'kata';
        var size = isEnter ? rand(90, 120) : rand(40, 50);
        var caretPosition = Measurement.caretPos(current);
        var imgUrl = chrome.extension.getURL('images/' + prefix + '_' + rand(1, 4) + '.svg');
        chrome.storage.sync.get("kata", function(items) {
            if(items.kata==true) outputimage(caretPosition.left, caretPosition.top, imgUrl, size, isEnter);
        });
    }
}
document.body.addEventListener( "click", function( event ) {
    var x = event.pageX ;
    var y = event.pageY ;
    var size = rand(40, 50);
    var imgUrl = chrome.extension.getURL('images/' + 'pochi' + '_' + rand(1, 4) + '.svg');
    chrome.storage.sync.get("pochi", function(items) {
        if(items.pochi==true) outputimage(x,y,imgUrl,size);
    });
} ) ;

var lastx=0;
var lasty=0;
document.body.addEventListener("mousemove", function(event){
    var x = event.pageX;
    var y = event.pageY;
    var size = rand(60, 70);
    var imgUrl = chrome.extension.getURL('images/' + 'byun' + '_' + rand(1, 4) + '.svg');
    chrome.storage.sync.get("byun", function(items) {
        if(items.byun==true) outputimage(x,y,imgUrl,size,isEnter=false,mousemove=true,lastx=lastx,lasty=lasty);
    });
    lastx = x;
    lasty = y;

});

function outputimage(x, y, imgUrl, size, isEnter=false, mousemove=false,lastx=0,lasty=0){
    var $img = $('<img width="' + size + '">');
    $img.attr('src', imgUrl);
    $img.css({
        'position': 'absolute',
        'top': mousemove ? lasty : y+rand(-10, 10),
        'left': mousemove ? lastx : x+rand(-10, 10),
        'zIndex': 99999
    });
    $('body').append($img);

    $img.animate({
        'top': mousemove ? y : y+rand(-40, 40),
        'left': mousemove ? x : x+rand(-40, 40),
        'width': size + (isEnter ? rand(30, 50) : rand(10, 20)),
        'opacity': 0
    }, mousemove ? 200 : 500, function () {
        $img.remove();
    })
}
    
function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}