function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showPosition, showError);

    } else {

        alert("Geolocation is not supported.");

    }

}

function showPosition(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById("latitude").innerHTML = lat;
    document.getElementById("longitude").innerHTML = lon;

}

function showError(error) {

    alert("Location Permission Denied");

}
