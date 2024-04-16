$(document).ready(function(){
    //animate
    $('#box').animate({
       left: '250px',
       opacity: '0.5',
       height: '150px',
       width: '150px'
    }, 1000);

    $('#box').delay(2000).animate({
        left: '+=150px',
        opacity: '1'
    },1000);
    
    $('#box').fadeIn(1000);

    $('#box').fadeOut(4000);

    $('#box').fadeTo(1000, 0.5);

    $('#box').fadeToggle(1000);

    $('#box').hide(3000);

    $('#box').show(3000);

    $('#box').toggle(3000);

});