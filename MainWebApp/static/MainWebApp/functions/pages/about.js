$(document).ready(function(){
    mainFunc_PageTitle("Giới Thiệu - Trang Trí Nội Thất Anh Thư");

    mainFunc_SetMenuBtnColor ("about");


});

function popup(description){
    var para = document.createElement("p");
    var node = document.createTextNode(description);
    para.appendChild(node);
    var element = document.getElementsByClassName("staffInformation");
    console.log(para);
}
