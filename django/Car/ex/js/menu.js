$(function(){
    var hide_menu = false;

    // 주메뉴
    var $gnb = $("#gnb_1dul");
    $gnb.mouseenter(function() {
        $("#hd").addClass("hd_zindex");
        $(".hd_login").removeAttr("style");
        $(this).parent().addClass("gnb_1dli_over gnb_1dli_on");
        $(this).parent().siblings("#gnb_all_bg").addClass("active");
        hide_menu = false;
    });

    $gnb.parents("#gnb").mouseleave(function() {
        $("#hd").removeClass("hd_zindex");
        $(this).find(".gnb_wrap").removeClass("gnb_1dli_over gnb_1dli_on");
        $(this).find("#gnb_all_bg").removeAttr("class");
        hide_menu = true;
    });

    //전체 메뉴
    $(".gnb_menu_btn, .gnb_all_mob_open").click(function(){
        $("html, body").css("overflow", "hidden");
        $("#gnb_all").addClass("active");
        $(this).parents(".hd_login").css("z-index", "9");
        $(this).parents(".hd_login").siblings("#logo").addClass("gnb_all");
        if ($(window).width() <= 1024) {
            $("#logo").addClass("active");
            $(".hd_login").addClass("active");
            $("#gnb_all .gnb_al_bg_close").addClass("active");
        }
    });
    $(".gnb_close_btn").click(function(){
        $("html, body").removeAttr("style");
        $("#gnb_all").removeAttr("class");
        $(".hd_login").removeAttr("style");
        if ($(".hd_login").hasClass("active")) {
            $(".hd_login").removeClass("active");
        }
        if ($(".gnb_al_bg_close").hasClass("active")) {
            $(".gnb_al_bg_close").removeClass("active");
        }
        $(this).parents("#gnb").siblings("#logo").removeAttr("class");
        if ($(window).width() <= 1024) {
            $("#logo").removeAttr("class");
            $(".hd_login").removeClass("active");
            $("#gnb_all .gnb_al_bg_close").removeClass("active");
        }
    });
    $(".gnb_al_ul .gnb_al_li").mouseenter(function() {
        $(this).parents(".gnb_al_ul").siblings(".gnb_al_bg").attr('class', 'gnb_al_bg '+ $(this).attr('data-img'));
    });
    $(".gnb_al_ul .gnb_al_li").mouseleave(function() {
        $(this).parents(".gnb_al_ul").siblings(".gnb_al_bg").attr('class', 'gnb_al_bg bg_0');
    });

    if ($(window).width() <= 1024) {
        $(".gnb_al_ul .gnb_al_li .gnb_al_a").off().on("click", function(e) {
            e.preventDefault();

            if ($(this).parents(".gnb_al_li").hasClass("active")) {
                $(this).parents(".gnb_al_li").removeClass("active");
            } else {
                $(".gnb_al_ul .gnb_al_li").removeClass("active");
                $(this).parents(".gnb_al_li").addClass("active");
            }
        });
        $(".gnb_al_bg_close").off().on("click", function() {
            $("html, body").removeAttr("style");
            $("#gnb_all").removeAttr("class");
            $(".hd_login").removeAttr("style");
            if ($(window).width() <= 1024) {
                $("#logo").removeAttr("class");
                $(".hd_login").removeClass("active");
                $(this).removeClass("active");
            }
        });
    }

    $(window).resize(function() {
        if ($(window).width() <= 1024) {
            $(".gnb_al_ul .gnb_al_li").off().on("click", function() {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                } else {
                    $(".gnb_al_ul .gnb_al_li").removeClass("active");
                    $(this).addClass("active");
                }
            });
            $(".gnb_al_bg_close").off().on("click", function() {
                $("html, body").removeAttr("style");
                $("#gnb_all").removeAttr("class");
                $(".hd_login").removeAttr("style");
                if ($(window).width() <= 1024) {
                    $("#logo").removeAttr("class");
                    $(".hd_login").removeClass("active");
                    $(this).removeClass("active");
                }
            });
        }
    });

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