$(function () {
    var name = ""
    var schoolName = ""
    var date = ""
    var url = location.href;
    var title = document.title;
    $("div.city > div.panel").each(function () {
        var name = $(".name", this).text();
        var schoolName = $(".school-name", this).text();
        var date = $(".date", this).text();
        var encodeName = encodeURI(name);
        var encodeSchoolName = encodeURI(schoolName);
        var encodeDate =encodeURI(date);
        var space = encodeURI(" ")
        var lineButtonUri = "http://line.me/msg/text/?" + encodeSchoolName + space + encodeName + space + encodeURI("開催期間") + space + encodeDate + space + encodeURIComponent(url);
        var tweetButtonUri = "http://twitter.com/share?text=" + encodeSchoolName + space + encodeName + space + encodeURI("開催期間") + space + encodeDate + space + encodeURIComponent(title) + "&&url=" + url;
        $("a.line-button", this).attr('href', lineButtonUri);
        $("a.tweet-button", this).attr('href', tweetButtonUri);
    });
});
