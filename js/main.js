// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//WOW Animation
new WOW().init();


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
        $('.navbar-toggle:visible').click();
    }
});

// OWL Carousel
$("#fieldsOfStudy").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds 
    items: 4,
    navigation: true,
    pagination: false,
    navigationText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [990, 2],
    itemsMobile: [600, 1],
    stopOnHover: true
});
// Tabs
$(".nav-tabs a").click(function() {
    $(this).tab('show');
});
$('.nav-tabs a').on('shown.bs.tab', function(event) {
    var x = $(event.target).text(); // active tab
    var y = $(event.relatedTarget).text(); // previous tab
    $(".act span").text(x);
    $(".prev span").text(y);
});
//Accordion
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass(' glyphicon-minus  glyphicon-plus');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);



$('.maplocation').click(function() {
    $('html,body').animate({
            scrollTop: $(".maplocation").offset().top
        },
        'slow');
});

//Google Map
function initMap() {

    /* ### Mapa con las coordenadas ### */
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: { lat: 20.655126, lng: -87.064813 },
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        },
        streetViewControl: false
    });
    /* ### Fin Mapa con las coordenadas ### */

    /* ### Estilos del mapa ### */
    var styledMapType = new google.maps.StyledMapType(
        [{
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ], { name: 'Centro Universitario Inglés' });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    /* ### Fin Estilos del mapa ### */
    /* ### Íconos en el mapa ### */
    var icon = 'img/marcador.png';

    var contentColegio = '<div class="info-window">' +
        '<h3 class="color-azul">Centro Universitario Inglés</h3>' +
        '<div class="info-content">' +
        '<p class="texto-mediano">¡Encontraste la mejor universidad en Playa del Carmen!</p>' +
        '<p class="texto-pequeno">Carr. Fed. Tulum – Cancún, Mza 26, Lote 3, entre calle 72 y 74 Norte, Col. Ejido, 77710 Playa del Carmen, Q.R., México</p>' +
        '</div>' +
        '</div>';

    var infowindowColegio = new google.maps.InfoWindow({
        content: contentColegio
    });

    var marker = new google.maps.Marker({
        position: { lat: 20.654436, lng: -87.064794 },
        map: map,
        title: 'Centro Universitario Inglés',
        icon: icon
    });

    marker.addListener('click', function() {
        infowindowColegio.open(map, marker);
    });
}

/* BX Slider */
$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600,
    auto: true
  });
});