$( document ). ready(function(){          // DOM생성 후 실행
	$("#login_pw").keydown(function(key) { // enter키 이벤트
		if (key.keyCode == 13) {
			login();
		}
    });
});

    function regist(){
        var enc_client_ip = $('#enc_client_ip').text();
        window.location.href = "/regist?mode=" + enc_client_ip;
    }

    function login(){
        var csrf_token = $('#csrf_token');
        var login_id = $('#login_id').val();
        var login_pw = $('#lpgon_pw').val(); // 선택한 input의 값을 가져옴
        var lock = 0;
        
        if($('#login_id').val() == ''){       //공백체크
            $('#login_id').focus();
            lock = 1;
        }

        else if($('#login_pw').val() == ''){
            $('#login_pw').focus();
            lock = 1;
        }
        
        if(lock == 0){
            $.post( "/login_check", { 
                csrfmiddlewaretoken : csrf_token,
                login_id: login_id,
                login_pw: login_pw 
                })
                .done(function( data ) {
                    if(data.return == 'success'){
                        window.location.href ="/dashboard";
                    }

                    else if(data.return == 'fail'){
                        swal({
                            type: 'error',
                            title: 'login fail',
                            text: 'please check your ID or Password',
                        })
                    }
                });
        }
    
    }
