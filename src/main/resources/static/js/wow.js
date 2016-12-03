$(document).ready(function () {
    $('select').material_select();
});

$(document).ready(function(){
    $('.parallax').parallax();
});

$('.carousel.carousel-slider').carousel({full_width: true});

// Toast
$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});