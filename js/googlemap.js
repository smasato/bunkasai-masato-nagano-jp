$(function () {
    "use strict";
    var googleMapApi = "https://www.google.com/maps/embed/v1/place",
        googleApiKey = "AIzaSyBQ7yQtI3tqEUDYYcvodnb2xu5muJDTXok",
        googleMapZoom = "15",
        googleMapPalce = "";
    $("div.city > div.panel").each(function () {
        var googleMapPalce = $(".school-name", this).text(),
            googleMapUri = googleMapApi + '?key=' + googleApiKey + '&q=' + encodeURI(googleMapPalce) + '&zoom=' + googleMapZoom;
        $("iframe", this).attr('data-echo', googleMapUri);
    });
});
