var data="";

function validateUser() {
    var username = document.getElementById("userid").value;
    if (username == "" || username == null) {
        document.getElementById("usernameerrorid").innerHTML = "Username is invalid";
    }
    else{
        data= data+"username is "+username +"<br/>"
    }
}
function validatePassword() {
    var password = document.getElementById("passid").value;
    if (password == "" || password == null) {
        document.getElementById("passworderrorid").innerHTML = "Password is invalid";
    }
    else{
        data= data+"pwd is "+password +"<br/>"
    }

}
function validateConfirmpassword() {
    var password = document.getElementById("passid").value;
    var confirmpassword = document.getElementById("confirmpassid").value;
    if (password != confirmpassword) {
        document.getElementById("confirmpassworderrorid").innerHTML = "CONFIRM Password is invalid";
    }
}
function validateTerms() {
    var terms = document.getElementById("termsid");
    if (terms.checked) {
        document.getElementById("submitid").disabled =false;
    }else{
        document.getElementById("submitid").disabled = true;
    }
}


function processOnsubmit() {
        document.getElementById("outputId").innerHTML = data;
        return false;
}
