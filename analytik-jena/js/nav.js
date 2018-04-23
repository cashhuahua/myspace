$(function () {
    //        鼠标移到导航栏的“技术服务”时下拉菜单显示，移开隐藏

    $(".tech").mouseenter(function () {
        $(".techDropDown").slideDown("fast");
        $(".tech-dropdown-bg").slideDown("fast");
        $(".nav").css(
            "backgroundColor","rgba(200,200,200,0.7)",
            "color","#000"
        )
    }).mouseleave(function () {
        $(".techDropDown").hide();
        $(".tech-dropdown-bg").hide();
        $(".nav").css(
            "backgroundColor","transparent"
        )

    })

    //        鼠标移到导航栏的“产品一览”时下拉菜单显示，移开隐藏
    $(".productList").mouseenter(function () {
        $(".productDrodown").slideDown("fast");
        $(".product-dropdown-bg").slideDown("fast");
        $(".nav").css(
            "backgroundColor","rgba(200,200,200,0.7)"
        )
    }).mouseleave(function () {
        $(".productDrodown").hide();
        $(".product-dropdown-bg").hide();
        $(".nav").css(
            "backgroundColor","transparent"
        )

    })

    //        鼠标移到移开右上角的图标时下拉菜单显示，移开隐藏

    $(".nav-hide").mouseenter(function () {
        $(".long-nav").slideDown("normal");
        $(".nav-hide").css(
            "backgroundColor","rgba(242,242,242,0.8)"
        )
    }).mouseleave(function () {
        $(".long-nav").hide();
        $(".nav-hide").css(
            "backgroundColor","transparent"
        )
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