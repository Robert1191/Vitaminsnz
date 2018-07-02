$(document).ready(function(){
    _layout_ChangeTitleText("Giới Thiệu");

    _layout_SetMenuBtnColor ("about");

});

function popup(description){
    var para = document.createElement("p");
    var node = document.createTextNode(description);
    para.appendChild(node);
    var element = document.getElementsByClassName("staffInformation");
    console.log(para);
}

