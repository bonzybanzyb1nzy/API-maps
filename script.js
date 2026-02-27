let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: { lat: 0, lng: 0 },
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocalizzazione non supportata dal browser.");
    }
}

function showPosition(position) {
    const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    };

    map.setCenter(pos);

    new google.maps.Marker({
        position: pos,
        map: map,
        title: "Sei qui!",
    });
}