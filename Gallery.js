$('.slide.right').click(function(){
    var curr = $('.active');
    var coming = curr.next();

    curr.fadeOut(300).removeClass('active');
    coming.fadeIn(300).addClass('active');

});

$('.slide.left').click(function(){
    var curr = $('.active');
    var exiting = curr.prev();

    curr.fadeOut(300).removeClass('active');
    exiting.fadeIn(300).addClass('active'); 
});