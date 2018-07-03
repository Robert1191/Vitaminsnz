$(document).ready(function(){
    _layout_ChangeTitleText("Liên Lạc");

    _layout_SetMenuBtnColor("contact");

    $('#contactForm form').submit(function() {
            loadingBackground_open();
            $.ajax({
                data: $(this).serialize(),
                type: 'POST',
                url: '/contact/',
                success: function(response) {
                    loadingBackground_close();
                    if (response == "success"){
                        console.log(response);
                        messagePopUp_Creation("accepted","Tin Nhắn Đã Gửi Thành Công","Rất cảm ơn quý khách đã liên lạc với chúng tôi.\nChúng tôi sẽ cố gắng hồi âm quý khách trong thời gian nhanh nhất.");
                    }else{
                            console.log(response + "  222  ");
                        messagePopUp_Creation("failed","Tin Nhắn Đã Không Được Gửi Thành Công","Chúng tôi sẽ cố gắng khắc phục lỗi trong thời gian nhanh nhất.\nXin quý khách vui lòng thử lại vào ngày mai.");
                    }
                }
            });
            return false;
     });
});


function contact_MessageSubmit(){

}
