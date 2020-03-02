$(document).ready(function() {
	$('#pagepiling').pagepiling({
        direction: 'vertical',
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#FFFAFA', '#03a0b0', '#ff6f69'],
        anchors: ['home', 'about', 'port', 'service', 'contact'],
        menu: '#myMenu',
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['Home', 'About', 'Portfolio', 'Prices', 'Contact']
        },
        });

    $("nav ul li a").hover(function(){
        $(this).css("color", "red");
        $(this).css("font-size", "30px");
        }, function(){
         $(this).css("color", "black");
        $(this).css("font-size", "20px");
    });

    $(".callToAction").hover(function(){
        $(this).css("background", "grey");
        }, function(){
         $(this).css("background", "saddlebrown");
    });

    $('.f1_container').click(function() {
    $(this).toggleClass('active');
        });
});