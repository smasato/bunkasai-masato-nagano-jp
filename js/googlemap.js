$(function () {
    var googleMapApi = "https://www.google.com/maps/embed/v1/place";
    var googleApiKey = "AIzaSyBQ7yQtI3tqEUDYYcvodnb2xu5muJDTXok";
    var googleMapZoom = "15"
    var googleMapPalce = ""
    $("div.city > div.panel").each(function () {
        var googleMapPalce = $(".school-name", this).text();
        var googleMapUri = googleMapApi + '?key=' + googleApiKey + '&q=' + encodeURI(googleMapPalce) + '&zoom=' + googleMapZoom;
        $("iframe", this).attr('data-echo', googleMapUri);
    });
})
