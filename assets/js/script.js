$(document).ready(function() {
    $('.menu_burger').click(function(event) {
        $('.menu_burger, .menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});

$(document).ready(function() {
    $('.menu').click(function(event) {
        $('.menu_burger, .menu').removeClass('active');
        $('body').removeClass('lock')
    });
});