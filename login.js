<<<<<<< HEAD
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "webfund" && password == "admin"){
        alert("Login Successful");
        return true;
    }
    else{
        alert("Login Failed Please check username and password");
        return false;
    }
=======
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "webfund" && password == "admin"){
        alert("Login Successful");
        return true;
    }
    else{
        alert("Login Failed Please check username and password");
        return false;
    }
>>>>>>> e58de749f1ebd5097ce2b5fd33c5ae6ed85b6017
}