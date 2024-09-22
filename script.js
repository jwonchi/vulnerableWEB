
function submitLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // 이 부분은 실제 보안상 취약점을 담고 있습니다. 예를 들어, 입력된 사용자 이름과 비밀번호를 그대로 alert로 표시합니다.
    alert('Logging in with:\nUsername: ' + username + '\nPassword: ' + password);
    
    // 실제 어플리케이션에서는 서버에 안전하게 로그인 데이터를 보내고 응답을 처리해야 합니다.
}
