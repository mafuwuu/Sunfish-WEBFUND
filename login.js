function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "webfund" && password == "admin"){
        location.href = "homepage.html"
        alert("Login Successful");
        return true;
    }
    else{
        alert("Login Failed Please check username and password");
        return false;
    }
}