$(function () {
    "use strict";
    var url = location.href,
        title = document.title,
        lineButtonUri = "http://line.me/msg/text/?" + encodeURI(title + " ") + encodeURIComponent(url),
        tweetButtonUri = "http://twitter.com/share?text=" + encodeURI(title) + "&" + "&&url=" + url;
    $("div#share > a.line-button").attr('href', lineButtonUri);
    $("div#share > a.tweet-button").attr('href', tweetButtonUri);
});
