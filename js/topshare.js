 $(function () {
     var url = location.href;
     var title = document.title;
     var lineButtonUri = "http://line.me/msg/text/?" + encodeURI(title + " " )+ encodeURIComponent(url);
     var tweetButtonUri = "http://twitter.com/share?text=" + encodeURI(title) + "&" + "&&url=" + url;
     $("div#share > a.line-button").attr('href', lineButtonUri);
     $("div#share > a.tweet-button").attr('href', tweetButtonUri);
 });
