$(document).ready(function(){
    window.onscroll = function() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $('.mainMenuBar').css("position", "fixed");
        } else {
            $('.mainMenuBar').css("position", "relative");
        }
    };

    var brandList = ["Aptamil", "Absolute Organic", "Barnes Natural", "Bayer", "Bio Island",
                    "Bio Organics", "Bioglan", "Blossom", "Blackmores", "Bushman",
                        "Cenovis", "Centrum", "Driclor", "Goat", "Healthy Care Australia",
                        "Healthy Way", "Just Organic",
                        "Life Space", "Macro Organic", "Morlife","Nicorette", "Oriental Botanicals", "Ostelin",
                        "Pentavite", "Prospan", "Swisse", "Sustagen", "Thursday Plantation", "Tom Organic", "Trilogy"
                    ];
        for (i = 0; i < brandList.length; i+=12) {
            var div = $("<div></div>");
            var ul = $("<ul></ul>");
            for (a = i; a < i + 12; a++){
                if(brandList[a] != undefined){
                     ul.append($('<a class="h5" onclick=\'printString("' + brandList[a] + '")\'>'+ brandList[a] + '</a>'));
                }

            }
            div.append(ul);
            $('#brandBtnDetails').append(div);

        }

    var productList = ["Thực Phẩm Chức Năng", "Sản Phẩm Organic", "Siêu Thực Phẩm Superfoods", "Sukin Skincare", "Làm Đẹp", "Baby Care" ];

    var ul = $("<ul></ul>");
    for (i = 0; i < productList.length; i++) {
        ul.append($('<a class="h5" onclick="printString(\'' + productList[i] + '\')">'+ productList[i] + '</a>'));
    }
    $('#productBtnDetails').append(ul);

});

function printString(s){
    console.log(s);
}

/*
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
}*/

