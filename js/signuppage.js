let userEmailInp =document.getElementById("userEmailInp");
let userFnameInp = document.getElementById("userFnameInp");
let userLnameInp = document.getElementById("userLnameInp");
let userpasswordInp = document.getElementById("userpasswordInp");
let ContinueBtn = document.getElementById("Continuebtn");
let smallElement=document.getElementById("smallElement");
let smallElementFname=document.getElementById("smallElementFname");
let smallElementLname=document.getElementById("smallElementLname");
let smallElementpassword=document.getElementById("smallElementpassword");
let users;
if(localStorage.getItem("usersdata") == null)
{
    users=[];
}
else{
    users=JSON.parse(localStorage.getItem("usersdata"))
}
/* moreSocialMedai */
let showBtn =document.getElementById("show")
showBtn.addEventListener("click",function(){
    let moreSocialMedai = document.getElementById("more-social-medai")
    if(moreSocialMedai.style.display=="flex")
    {
        moreSocialMedai.style.display="none" ;
        showBtn.innerHTML="<h4>More <i class='fas fa-chevron-down'></i></h4>";
    }
    else
    {
        moreSocialMedai.style.display="flex";
        showBtn.innerHTML="<h4>Less <i class='fas fa-chevron-up'></i></h4>";
    }
})
/*Handling expected errors of email */
userEmailInp.addEventListener("blur",function(){
    if(validateEmail(userEmailInp.value) == false ){
        smallElement.innerHTML="This is not a valid email address";
        userEmailInp.style.borderColor="red";
    }
    else
    {
        userEmailInp.style.borderColor="#B9BECE";

    }
})
userEmailInp.addEventListener("focus",function(){
     smallElement.innerHTML="";
})
/*Handling expected errors of fname */
userFnameInp.addEventListener("blur",function(){
    if(validateName(userFnameInp.value) == false){
        smallElementFname.innerHTML="Name should not contain special characters or Numbers";
        userFnameInp.style.borderColor="red";
    }
    else
    {
        userFnameInp.style.borderColor="#B9BECE";

    }
})
userFnameInp.addEventListener("focus",function(){
    smallElementFname.innerHTML="";
})
/*Handling expected errors of Lname */
userLnameInp.addEventListener("blur",function(){
    if(validateName(userLnameInp.value) == false){
        smallElementLname.innerHTML="Name should not contain special characters or Numbers";
        userLnameInp.style.borderColor="red";
    }
    else
    {
        userLnameInp.style.borderColor="#B9BECE";
    }
})
userLnameInp.addEventListener("focus",function(){
    smallElementLname.innerHTML="";
})
/*Handling expected errors of password */
userpasswordInp.addEventListener("blur",function(){
    if(validatepassword(userpasswordInp.value) == false){
        smallElementpassword.innerHTML="password must contain an uppercase letter and numbers";
        userpasswordInp.style.borderColor="red";
    }
    else
    {
        userpasswordInp.style.borderColor="#B9BECE";
    }
})
userpasswordInp.addEventListener("focus",function(){
    smallElementpassword.innerHTML="";
})
/* show datacontainer */
ContinueBtn.addEventListener("click",function(){

    let datacontainer = document.getElementById("datacontainer")
    if(userEmailInp.value == "")
    {
        smallElement.innerHTML="Please enter your email";
    }
    else if(validateEmail(userEmailInp.value) == true ){
        datacontainer.style.display ="block";
        ContinueBtn.innerHTML="Create Account";
        ContinueBtn.setAttribute("onclick","add()")
    }
})
/* function  of validate Email */
function validateEmail(userEmailInp){
    let userEMailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(userEMailRegex.test(userEmailInp) == true)
    {
        return true;
    }
    else{
        return false;
    }
}
/* function  of validate Name */
function validateName(userNameInp){
    let userNameRegex =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    if(userNameRegex.test(userNameInp) == true)
    {
        return true;
    }
    else{
        return false;
    }
}
/* function  of validate password */
function validatepassword(userpasswordInp){
    let userpasswordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(userpasswordRegex.test(userpasswordInp) == true)
    {
        return true;
    }
    else{
        return false;
    }
}
/* add to local storage */
function add(){
    if(validateName(userFnameInp.value) == true)
    {
        if(validateName(userLnameInp.value) == true)
        {
            if(validatepassword(userpasswordInp.value) == true)
            {
                let user={
                    fname:userFnameInp.value,
                    lname:userLnameInp.value,
                    email:userEmailInp.value,
                    password:userpasswordInp.value
                }
                users.push(user)
                localStorage.setItem("usersdata",JSON.stringify(users))
                window.location.href="index.html";
            }
            else
            {
                smallElementpassword.innerHTML="password must contain an uppercase letter and numbers";
                userpasswordInp.style.borderColor="red";
            }

        }
        else
        {
            smallElementLname.innerHTML="Name should not contain special characters or Numbers";
            userLnameInp.style.borderColor="red";

        }
    }
    else
    {
        smallElementFname.innerHTML="Name should not contain special characters or Numbers";
        userFnameInp.style.borderColor="red";
    }
}