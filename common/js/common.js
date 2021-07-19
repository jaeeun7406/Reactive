//중형태블릿 햄버거메뉴 js//
$(document).ready(function(){
    $(".m_nav_icon").toggle(function(){
        $("#gnb").slideDown('slow');
    }, function(){
        $("#gnb").slideUp('fast');
    });
});



//footer_select js//

$(document).ready(function(){
    $(".select_icon").click(function(){
        $(".family_site").fadeIn('slow');
        $(".select_icon i").removeClass("fa-angle-down");
        $(".select_icon i").addClass("fa-angle-up");
    });
    $(".select_icon").mouseleave(function(){
        $(".family_site").fadeOut('slow');
        $(".select_icon i").removeClass("fa-angle-up");
        $(".select_icon i").addClass("fa-angle-down");
    });
});