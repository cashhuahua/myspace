$(function () {
    // 导航栏下拉菜单，鼠标放上去显示，移开隐藏
    $('li.dropdown').mouseover(function() {
        $(this).addClass('open');
    }).mouseout(function() {
        $(this).removeClass('open');
    })


// 固定导航栏
    $(window).load(function() {
        var H = $(".productNav").offset().top;
//        console.log(H);
        $(window).scroll(function() {
            var docSccrollTop = $(document).scrollTop();
//            console.log(docSccrollTop);
            if($(window).width() >=992){
                if (docSccrollTop > H) {
                    $(".productNav").css({
                        "position": "fixed",
                        "top": 0
                    });
                    $(".navReal").addClass("align-horizontal").removeClass("productNav");

                    // 此时 nav的位置固定，如果不设置 main部分的margin-top的话，将有一部分内容被挡住 nav的高度
                    $(".bigProductImg").css("margin-top", $(".productNav").height());
                } else {
                    $(".productNav").css({
                        "position": "static"
                    }); /*静态定位*/
                    $(".navReal").addClass("productNav").removeClass("align-horizontal");
                    $(".bigProductImg").css("margin-top", 0);
                }
            }
        });
    })



    //    返回顶部，    当页面滚动了50的时候，出现这个层
    $(window).scroll(function () {
        if($(window).scrollTop()>100){
            $(".totop").show();
        }else{
            $(".totop").hide();
        }
    })
//        当点击的时候回到顶部
    $(".totop").on("click",function () {
        $("body,html").animate({
            scrollTop:0
        });
    })


})