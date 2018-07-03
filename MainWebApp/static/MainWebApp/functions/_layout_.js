$(document).ready(function(){
    var isHiddenMenuOpen = false;

    $('.hiddenBtn').on( "click", function(e) {
        openHiddenMenu();
    });

    $('.closeMenuBtn').on( "click", function(e) {
        closeHiddenMenu();
    });

    $('#hiddenLayer').on( "click", function(e) {
            closeHiddenMenu();
    });

    $('.btnStaffLogin').on( "click", function(e) {
         if(isHiddenMenuOpen){
            closeHiddenMenu();
        }
        staffLoginForm_Open();
    });


    function openHiddenMenu(){
        isHiddenMenuOpen = true;
        $('.responsiveMainMenuBar').css('display', 'block');
        $('#hiddenLayer').css("display", "block");
    }

    function closeHiddenMenu(){
        $('.responsiveMainMenuBar').css('display', 'none');
        $('#hiddenLayer').css("display", "none");
        isHiddenMenuOpen = false;
    }

});

function _layout_ChangeTitleText(name){
    document.title = name + " - Trang Trí Nội Thất Anh Thư";
}

function _layout_SetMenuBtnColor(pageName){

    for (var i = 0; i < $(".btnSection").children().length; i++) {
        (($(".btnSection").children()[i]).className).replace("btnSectionItemSelected","");
        if (($(".btnSection").children()[i]).className != "btnStaffLogin"){
            if(($(".btnSection").children()[i].href).toLowerCase().indexOf(pageName) > 0){
                ($(".btnSection").children()[i]).className = ($(".btnSection").children()[i]).className + " btnSectionItemSelected";
            }
        }
    }
}

function _layout_RefreshPage(){
    location.reload();
}
