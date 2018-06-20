
$(document).ready(function(){

    var staticLink = "../static/MainWebApp/";

    var screenWidth = $( document ).width();
    var isHiddenMenuOpen = false;

    $('#hiddenMenuButton').on( "click", function(e) {
        if(!isHiddenMenuOpen){
            openHiddenMenu();
        }else{
            closeHiddenMenu();
        }
    });

    $('#hiddenLayer').on( "click", function(e) {
            closeHiddenMenu();
    });

    $('#closeMenuButton').on( "click", function(e) {
         if(isHiddenMenuOpen){
            closeHiddenMenu();
        }
    });

    $('.btnStaffLogin').on( "click", function(e) {
         if(isHiddenMenuOpen){
            closeHiddenMenu();
        }
        staffLoginForm_Open();
    });

    function openHiddenMenu(){
        isHiddenMenuOpen = true;
        $('.responsiveMainMenuBar').css("left", 0);
        $('.mainContent').css("position", "fixed");
        $('#hiddenLayer').css("display", "block");
    }

    function closeHiddenMenu(){
        $('.responsiveMainMenuBar').css("left", -screenWidth);
        $('.mainContent').css("position", "absolute");
        $('#hiddenLayer').css("display", "none");
        isHiddenMenuOpen = false;
    }

});

function mainFunc_RefreshPage(){
     location.reload();
}

function mainFunc_PageTitle(name){
     document.title = name;
}

function mainFunc_SetMenuBtnColor(pageName){

    for (var i = 0; i < $(".buttonSection").children().length; i++) {
        (($(".buttonSection").children()[i]).className).replace("Selected","");
        if (($(".buttonSection").children()[i]).className != "btnStaffLogin"){
            if($($(".buttonSection").children()[i]).attr('href').indexOf(pageName) > 0){
                ($(".buttonSection").children()[i]).className = ($(".buttonSection").children()[i]).className + "Selected";
            }
        }

    }
}

