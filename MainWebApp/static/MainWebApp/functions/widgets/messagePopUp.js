function messagePopUp_Creation(typeOfMessage, title, message){
         switch (typeOfMessage) {
            case 'accepted':

              $('.messagePopUp-header').css("background-color", "#44A19F");
              break;
            case 'failed':
              $('.messagePopUp-header').css("background-color", "#D95456");
              break;
        }
        $('.messagePopUp-header')[0].innerHTML = "<h2>" + title + "</h2>";
        $('.messagePopUp-body')[0].innerHTML = "<p>" + message.replace("\n", "</p><p>") + "</p>";
         $(".messagePopUp").css("display", "block");
}

function messagePopUp_Close(){
         _layout_RefreshPage();
}
