$(function() {
    //브라우저 활성화 체크
    var hidden = "hidden";
/*
    // Standards:
    if (hidden in document)
    document.addEventListener("visibilitychange", onchange);
    else if ((hidden = "mozHidden") in document)
    document.addEventListener("mozvisibilitychange", onchange);
    else if ((hidden = "webkitHidden") in document)
    document.addEventListener("webkitvisibilitychange", onchange);
    else if ((hidden = "msHidden") in document)
    document.addEventListener("msvisibilitychange", onchange);
    // IE 9 and lower:
    else if ("onfocusin" in document)
    document.onfocusin = document.onfocusout = onchange;
    // All others:
    else
    window.onpageshow = window.onpagehide
    = window.onfocus = window.onblur = onchange;
*/
    function onchange (evt) {
    var v = "visible", h = "hidden",
        evtMap = {
            focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
        };

    evt = evt || window.event;
    if (evt.type in evtMap)
        document.body.className = evtMap[evt.type];
    else
        document.body.className = this[hidden] ? "hidden" : "visible";
    }

    // set the initial state (but only if browser supports the Page Visibility API)
    if( document[hidden] !== undefined )
    onchange({type: document[hidden] ? "blur" : "focus"});


    //툴팁 스크립트 start
    var $tooltipTitle;

    $(".tooltip > i").hover(function(e) {
        $tooltipTitle = $(this).attr("title");
        $(this).attr("title", "");
        $(this).parent().append("<div id='tip'></div>");
        $("#tip").css("max-width", $("#tip").parent().parent().width());
        $("#tip").text($tooltipTitle);

        var pageX = $(this).position().left + 20;
        var pageY = $(this).position().top + $(this).innerHeight();
        if (!$(this).parents(".tooltip").hasClass("block")) {
            $("#tip").css({left : pageX + "px", top : pageY + "px"}).fadeIn(500);
        } else {
            $("#tip").css({right : blockPageX + "px", top : pageY + "px"}).fadeIn(500);
        }
    }, function() {
        $(this).attr("title", $tooltipTitle);
        $("#tip").remove();
    });
    //툴팁 스크립트 end

    //셀렉트 박스 스크립트 select start
    $(document).on("change", ".select_info > select", function() {
        if (!$(this).parent(".analysis_nav")) {
            var $val = $(this).children("option:selected").text();
            $(this).siblings("p").empty().html($val);
        }
    });
    //셀렉트 박스 스크립트 select end

    //셀렉트 박스 스크립트 ul start
    $(document).on("click", ".select_info > p", function() {
        if ($(this).hasClass("active")) {
            $(this).removeAttr("class");
            $(this).siblings("ul").removeAttr("active");
            $(this).siblings(".select_close").removeClass("active");
        } else {
            $(this).addClass("active");
            $(this).siblings("ul").addClass("active");
            $(this).siblings(".select_close").addClass("active");
        }
    });
    $(document).on("click", ".select_info > ul > li", function() {
        var $val = $(this).text();
        if ($(this).parent().hasClass("active")) {
            $(this).parent().removeAttr("class");
            $(this).parent().siblings("p").empty().html($val);
            $(this).parent().siblings("p").removeAttr("class");
            $(this).parent().siblings(".select_close").removeClass("active");
        } else {
            $(this).parent().addClass("active");
            $(this).parent().siblings("p").addClass("active");
            $(this).parent().siblings(".select_close").addClass("active");
        }
    });
    $(document).on("click", ".select_info > .select_close", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings("p").removeAttr("class");
            $(this).siblings("ul").removeClass("active");
        } else {
            $(this).addClass("active");
            $(this).siblings("p").addClass("active");
            $(this).siblings("ul").addClass("active");
        }
    });
    //셀렉트 박스 스크립트 ul end

    //file 스크립트 start
    $(document).on("change", ".file_info input[type='file']", function(e) {
        var $fileValue = $(this).val().split("\\");
        var $fileName = $fileValue[$fileValue.length - 1]; // 파일명

        if ($(this).val() == "") {
            if ($(this).hasClass("register")) {
                $(this).siblings("p").html("<span>등록할 등기부 열람파일을 선택하세요.</span>");
            } else {
                $(this).siblings("p").html("<span>파일을 선택하세요.</span>");
            }
        } else {
            $(this).siblings("p").text($fileName);
        }
    });
    //file 스크립트 end

    //메인 슬라이드
    if ($(".main_slider").length) {
        mainSlider = $('.main_slider').bxSlider({
            minSlides: 1,
            auto: true,
            autoDelay: 0,
            pause: 8000,
            autoControls: true,
            stopAutoOnClick: false,
            controls: false,
            pager: true,
			stopAuto : true,
			shrinkItems: false,
            pagerType: 'short',
            responsive: true,
            onSliderLoad: function(){
                $(".mainSlider").css("visibility", "visible").animate({
                    opacity:1
                });

                $(".mainSlider .bx-controls.bx-has-pager").append('<div class="bx-page-load-bar"><span></span></div>');

                function loop() {
                    $(".bx-page-load-bar > span")
                    .animate({width:"100%"}, 8000)
                    .animate({width:"0"},0, loop);
                }

                if ($(".mainSlider .bx-start").hasClass("active")) {
                    loop();
                }

                $(".mainSlider .bx-stop").on("click", function() {
                    $(".bx-page-load-bar > span").stop(true);
                    $(".bx-page-load-bar > span").css("width", 0);
                });

				$(window).focus(function() {
					loop();
				});
				$(window).blur(function() {
                    $(".bx-page-load-bar > span").stop(true);
				});

                $(".mainSlider .bx-start").on("click", function() {
                    $(".bx-page-load-bar > span").css("width", 0);
                    loop();
                });
            },
            onSlideAfter: function() {
                if ($(".mainSlider .bx-stop").hasClass("active")) {
                    $(".bx-page-load-bar > span").stop(true);
                    $(".mainSlider .bx-start").trigger('click');
                }
            }
        });
    }

    //메인 공지 체크리스트 슬라이드
    if($(".main_latest_notice").length) {
        $(".main_latest_notice .lat_slider").bxSlider({
            touchEnabled : (navigator.maxTouchPoints > 0),
            minSlides: 1,
            auto: true,
            autoHover: true,
            speed: 500,
            autoDelay: 3000,
            pause: 3000,
            mode: 'vertical',
            controls: true,
            pager: false,
            responsive: true,
            onSliderLoad: function(){
                $(".main_latest_notice").css("visibility", "visible").animate({
                    opacity : 1
                });
            }
        });
    }

    //메인 공지사항 슬라이드
    if($(".main_news_notice").length) {
        /*
        newsNotice = {
            'init' : function(){
              this.action();
            },
            'action' : function(){
                var $ele = {
                    'roll' : $(".main_news_notice .lat_slider"),
                };
                var opts = function(){
                    //PC인 경우
                    if($(window).width() > 640){
                        var vars = {
                            'touchEnabled' : (navigator.maxTouchPoints > 0),
                            'speed' : 500,
                            'moveSlides' : 1,
                            'minSlides' : 3,
                            'maxSlides' : 3,
                            'slideWidth' : $(".main_news_notice").width()/3,
                            'controls' : true,
                            'pager' : false,
                            'responsive' : true,
                            'onSliderLoad' : function(){
                                $(".main_news_notice").css("visibility", "visible").animate({
                                    opacity : 1
                                });
                            }
                        }
                    //모바일인 경우
                    } else {
                        var vars = {
                            'speed' : 500,
                            'moveSlides' : 1,
                            'minSlides' : 1,
                            'maxSlides' : 1,
                            'slideWidth' : $(".main_news_notice").width(),
                            'controls' : true,
                            'pager' : false,
                            'responsive' : true,
                            'onSliderLoad' : function(){
                                $(".main_news_notice").css("visibility", "visible").animate({
                                    opacity : 1
                                });
                            }
                        }
                    }
                    return vars;
                };

                var rolling = function(){
                    roll = $ele.roll.bxSlider(opts());
                };
                rolling();
                $(window).on({
                    'load resize' : function(){
                        roll.reloadSlider(opts());
                    }
                });
            }
        }
        newsNotice.init();
        */

        $(".main_news_notice .lat_slider").slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 841,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }

    //메인 파트너 슬라이드
    if($(".main_partners").length) {
        partners = {
            'init' : function(){
              this.action();
            },
            'action' : function(){
                var $ele = {
                    'roll' : $(".main_partners .main_partners_slider"),
                };
                var opts = function(){
                    //PC인 경우
                    if($(window).width() > 640){
                        var vars = {
                            'speed' : 500,
                            'auto' : true,
                            'autoDelay' : 3000,
                            'pause' : 3000,
                            'autoHover' : true,
                            'moveSlides' : 5,
                            'minSlides' : 5,
                            'maxSlides' : 5,
                            'slideWidth' : $(".main_partners").width()/5,
                            'controls' : false,
                            'pager' : false,
                            'responsive' : true,
                            'onSliderLoad' : function(){
                                $(".main_partners").css("visibility", "visible").animate({
                                    opacity : 1
                                });
                            }
                        }
                    //모바일인 경우
                    } else {
                        var vars = {
                            'speed' : 500,
                            'auto' : true,
                            'autoDelay' : 3000,
                            'pause' : 3000,
                            'autoHover' : true,
                            'moveSlides' : 2,
                            'minSlides' : 2,
                            'maxSlides' : 2,
                            'slideWidth' : $(".main_partners").width()/2,
                            'controls' : false,
                            'pager' : false,
                            'responsive' : true,
                            'onSliderLoad' : function(){
                                $(".main_partners").css("visibility", "visible").animate({
                                    opacity : 1
                                });
                            }
                        }
                    }
                    return vars;
                };

                var rolling = function(){
                    roll = $ele.roll.bxSlider(opts());
                };
                rolling();
                $(window).on({
                    'load resize' : function(){
                        roll.reloadSlider(opts());
                    }
                });
            }
        }
        partners.init();
    }

    //메인 사업영역 슬라이드
    if($(".main_business").length) {
        $('.main_business').slick({
            centerMode: true,
            dots: false,
            arrows: false,
            infinite: true,
            centerPadding: '0',
            slidesToShow: 5,
            responsive: [
                {
                    breakpoint: 1361,
                    settings: {
                    slidesToShow: 3,
                        slidesToScroll: 3,
                        centerPadding: '80px',
                        dots: true,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        centerPadding: '60px',
                        dots: true,
                    }
                },
                {
                    breakpoint: 841,
                    settings: {
                        centerPadding: '60px',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                    }
                },
                {
                    breakpoint: 641,
                    settings: {
                        centerPadding: '40px',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });
    }

    //서브 상단 타이틀 활성화
    if ($(".sub_title_info").length) {
        $(".sub_title_info").addClass("animate");
    }

    // 폰트 사이즈 비율 변경
    if ($(".analysis_info .lab_cate_var2").length) {
        $(".analysis_info .lab_cate_var2").fitText(0.36);
    }
});

//링크 점선 삭제 스크립트
function bluring() {
　　　　if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") {
　　　　　　document.body.focus();
　　　　}
}
document.onfocusin = bluring;