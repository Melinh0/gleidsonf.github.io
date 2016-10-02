var map;
var directionsService;
var directionsDisplay;
var geocoder;

function initMap() {
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
    3.75837, -38.54704
    var latlng = new google.maps.LatLng(-3.758361, -38.547097);
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { //-3.758361, -38.547097
            lat: -3.758361,
            lng: -38.547097
        }
    });

    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
        map: map,
        draggable: false,
    });




    map.data.loadGeoJson('js/benstombados.json');

    var pin_red = 'img/pin-r.png';
    var pin_green = 'img/pin-g.png';
    var options = '<option value="">Escolha um local</option>';
    map.data.setStyle(function(feature) {
        var descricao = feature.getProperty('DESCRICAO');
        var titulo = feature.getProperty('NOME');
        var lat = feature.getGeometry().b.lat();
        var long = feature.getGeometry().b.lng();
        var location = lat + ', ' + long;

        options += '<option value="' + location + '">' + titulo + '</option>';
        $('#lugar').html(options);

        if (descricao.match('Tombado')) {
            return {
                icon: pin_green
            };
        } else if (descricao.match('Tombamento')) {
            return {
                icon: pin_red
            };
        }
    });

    var infowindow = new google.maps.InfoWindow();

    // When the user clicks, open an infowindow
    map.data.addListener('click', function(event) {
        var titulo = event.feature.getProperty("NOME");
        var referencia = event.feature.getProperty("ANO_REF");
        var descricao = event.feature.getProperty("DESCRICAO");
        infowindow.setContent("<div style='width:150px; text-align: left;'><strong>" + titulo + "</strong><br>" + descricao + "<br><b>Ano referência</b>: " + referencia + "</div>");
        infowindow.setPosition(event.feature.getGeometry().get());
        infowindow.setOptions({
            pixelOffset: new google.maps.Size(0, -30)
        });
        infowindow.open(map);
    });

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('right-panel'));

    // directionsDisplay.setPanel(document.getElementById("trajeto-texto")); // Aqui faço a definição


    var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('txtEnderecoPartida').addEventListener('change', onChangeHandler);
    document.getElementById('lugar').addEventListener('change', onChangeHandler);

}//fim initMap

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: $("#txtEnderecoPartida").val(),
        destination: $("#lugar").val(),
        travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {

        }
    });

}

$(document).ready(function() {

    initMap();

    function carregarNoMapa(endereco) {
        geocoder.geocode({
            'address': endereco + ', Brasil',
            'region': 'BR'
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();

                    $('#txtEndereco').val(results[0].formatted_address);
                    $('#txtLatitude').val(latitude);
                    $('#txtLongitude').val(longitude);

                    var location = new google.maps.LatLng(latitude, longitude);
                    marker.setPosition(location);
                    map.setCenter(location);
                    map.setZoom(16);
                }
            }
        })
    }

    $("#btnEndereco").click(function() {
        if ($(this).val() != "")
            carregarNoMapa($("#txtEndereco").val());
    })

    $("#txtEndereco").blur(function() {
        if ($(this).val() != "")
            carregarNoMapa($(this).val());
    })


    $("#txtEnderecoPartida").autocomplete({
        source: function(request, response) {
            geocoder.geocode({
                'address': request.term + ', Brasil',
                'region': 'BR'
            }, function(results, status) {
                response($.map(results, function(item) {
                    return {
                        label: item.formatted_address,
                        value: item.formatted_address,
                        latitude: item.geometry.location.lat(),
                        longitude: item.geometry.location.lng()
                    }
                }));
            })
        },
        select: function(event, ui) {
            $("#txtLatitude").val(ui.item.latitude);
            $("#txtLongitude").val(ui.item.longitude);
            var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
            marker.setPosition(location);
            map.setCenter(location);
            // map.setZoom(16);
        }
    });

});
