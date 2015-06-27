$(function () {
    "use strict";
    var headerHight = 80;
    $('a[href^=#]').click(function () {
        var href = $(this).attr("href"),
            target = $(href === "#" || href === "" ? 'html' : href),
            position = target.offset().top - headerHight;
        $("html, body").animate({
            scrollTop: position
        }, 550, "swing");
        return false;
    });
});
