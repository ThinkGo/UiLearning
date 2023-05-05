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

function validateGender() {
    var gender = document.getElementsByName("Gender")
    if (!(gender[0] . checked | I gender [1] . checked)) {
    document.getElementById("radioErrorId").innerHTML = "Select at least one gender";
    return false    
    var g ;    
    if (gender(0]. checked) E
    g = gender[0].value
    H else {
    = gender [1]. value
    }
    data = data + "gender is " "<br/>"
    document.getElementById("radioErrorId").innerHTML =
    return true
    
    function validateDepartment() {
    var dd = document.getElementById("departmentId")
    if (dd.selectedIndex == 0)
    document.getElementById("selectErrorId").innerHTML = "Select department"
    return false
    } else {
    document.getElementById("selectErrorId").innerHTML =
    
    data = data + "department is" + dd.value + "<br/>" I
    
    return true

function processOnsubmit() {
        document.getElementById("outputId").innerHTML = data;
        return false;
}
