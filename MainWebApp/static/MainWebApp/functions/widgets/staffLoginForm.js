function staffLoginForm_Open(){
    $(".staffLoginForm").css("display", "block");
}

function staffLoginForm_Cancel(){
    $(".staffLoginForm-content form")[0].reset();
    $(".staffLoginForm").css("display", "none");
}

function staffLoginForm_Submit(){
    $('.staffLoginForm-content form').submit(function() {
            $.ajax({
                data: $(this).serialize(),
                type: 'POST',
                url: '/staffLoginSection/',
                success: function(response) {
                    /*if (response == "success"){
                        messagePopUp_Creation("accepted","Tin Nhắn Đã Gửi Thành Công","Rất cảm ơn quý khách đã liên lạc với chúng tôi.\nChúng tôi sẽ cố gắng hồi âm quý khách trong thời gian nhanh nhất.");
                    }else{
                        messagePopUp_Creation("failed","Tin Nhắn Đã Không Được Gửi Thành Công","Chúng tôi sẽ cố gắng khắc phục lỗi trong thời gian nhanh nhất.\nXin quý khách vui lòng thử lại vào ngày mai.");
                    }*/
                }
            });
            return false;
     });
}