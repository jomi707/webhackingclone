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
        alert(csrf_token);
        
    }
