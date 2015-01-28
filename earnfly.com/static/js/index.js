$(function() {
    $(".citypanel-tab li").click(function() {
        $(".citypanel-tab li").removeClass("current");
        $(this).addClass("current");
    });
    $(".srhpanel-list dd input").focus(function() {
        $(this).parent().next(".citypanel").show();
        $(this).parent().next(".citydropdown").show();
    });
    $(".srhpanel-list dd input").blur(function() {
        $(this).parent().next(".citypanel").hide();
        $(this).parent().next(".citydropdown").hide();
    });
})