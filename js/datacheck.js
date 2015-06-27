$(function () {
    $("div.city > div.panel").each(function () {
        var schoolName = "";
        var schoolName = $("span.school-name", this).text();
        var pContent = new Array();
        $("p", this).each(function () {
            pContent.push($(this).text());
            console.log(pContent);
            console.log(schoolName);
            console.log(" ");
        });
    });

})
