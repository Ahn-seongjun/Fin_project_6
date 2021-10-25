$(window).scroll(function() {
var $offsetTop = $(window).scrollTop();

    if ($offsetTop > 0) {
        if (!$("#hd").hasClass("scroll")) {
            $("#hd").addClass("scroll");
        }
    } else {
        $("#hd").removeClass("scroll");
    }

    $(window).scroll(function() {
        var $offsetTop = $(window).scrollTop();

        if ($offsetTop > 0) {
            if (!$("#hd").hasClass("scroll")) {
                $("#hd").addClass("scroll");
            }
        } else {
            $("#hd").removeClass("scroll");
        }
        if ($offsetTop > $(window).height()) {
            $("#top_btn").addClass("active");
        } else {
            $("#top_btn").removeAttr("class");
        }
    });
});