$(function () {
    "use strict";
    var name = "",
        schoolName = "",
        date = "",
        url = location.href,
        title = document.title;
    $("div.city > div.panel").each(function () {
        var name = $(".name", this).text(),
            schoolName = $(".school-name", this).text(),
            date = $(".date", this).text(),
            encodeName = encodeURI(name),
            encodeSchoolName = encodeURI(schoolName),
            encodeDate = encodeURI(date),
            space = encodeURI(" "),
            lineButtonUri = "http://line.me/msg/text/?" + encodeSchoolName + space + encodeName + space + encodeURI("開催期間") + space + encodeDate + space + encodeURIComponent(url),
            tweetButtonUri = "http://twitter.com/share?text=" + encodeSchoolName + space + encodeName + space + encodeURI("開催期間") + space + encodeDate + space + encodeURIComponent(title) + "&&url=" + url;
        $("a.line-button", this).attr('href', lineButtonUri);
        $("a.tweet-button", this).attr('href', tweetButtonUri);
    });
});
