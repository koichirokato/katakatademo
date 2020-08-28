document.onkeydown = function (e) {
    var current = document.activeElement;
    if (e.key === 'Backspace') {
        return true;
    }
    if (current.type === 'textarea' || current.type === 'text' || current.type === 'search') {
        var isEnter = e.key === 'Enter';
        var prefix = isEnter ? 'tan' : 'kata';
        var size = isEnter ? rand(80, 100) : rand(30, 40);
        var caretPosition = Measurement.caretPos(current);
        // var imgUrl = chrome.extension.getURL('images/' + prefix + '_' + rand(1, 4) + '.svg');
        var imgUrl = 'images/' + prefix + '_' + rand(1, 1) + '.svg';
        if($('#check1a').prop('checked')==true) {
            outputimage(caretPosition.left, caretPosition.top, imgUrl, size, isEnter);
        }
    }
}
document.body.addEventListener( "click", function( event ) {
        var x = event.pageX ;
        var y = event.pageY ;
        var size = rand(30, 40);
        var imgUrl = 'images/' + 'pochi' + '_' + rand(1, 1) + '.svg';
        if($('#check1b').prop('checked')==true) {
            outputimage(x,y,imgUrl,size,false);
        }
} ) ;

function outputimage(x, y, imgUrl, size, isEnter){
        var $img = $('<img width="' + size + '">');
        $img.attr('src', imgUrl);
        $img.css({
            'position': 'absolute',
            'top': y + rand(-10, 10),
            'left': x + rand(-10, 10),
            'zIndex': 99999
        });
        $('body').append($img);

        $img.animate({
            'top': y + rand(-40, 40),
            'left': x + rand(-40, 40),
            'width': size + (isEnter ? rand(30, 50) : rand(10, 20)),
            'opacity': 0
        }, 500, function () {
            $img.remove();
        })
    }
    
        function rand(min, max) {
           return Math.floor(Math.random() * (max - min) + min);
        }