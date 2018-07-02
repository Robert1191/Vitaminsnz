$(document).ready(function(){

    $('.hiddenBtn').on( "click", function(e) {
        $('.responsiveMainMenuBar').css('animation','LeftEffect 0.5s');
        $('.responsiveMainMenuBar').css('display', 'block');
    });

    $('.closeMenuBtn').on( "click", function(e) {
        $('.responsiveMainMenuBar').css('display', 'none');
    });

});

function _layout_ChangeTitleText(name){
    document.title = name + " - Trang Trí Nội Thất Anh Thư";
}

function _layout_SetMenuBtnColor(pageName){

    for (var i = 0; i < $(".btnSection").children().length; i++) {
        (($(".btnSection").children()[i]).className).replace("btnSectionItemSelected","");
        if (($(".btnSection").children()[i]).className != "btnStaffLogin"){
            if(($(".btnSection").children()[i].href).toLowerCase().indexOf(pageName) > 0){
                console.log((($(".btnSection").children()[i]).className));
                ($(".btnSection").children()[i]).className = ($(".btnSection").children()[i]).className + " btnSectionItemSelected";
            }
        }
    }
}
