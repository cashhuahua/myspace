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






})