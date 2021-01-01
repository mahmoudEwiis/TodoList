let showBtn =document.getElementById("show");
let userEmailInp = document.getElementById("userEmailInp");
let userpasswordInp = document.getElementById("userpasswordInp");
let loginBtn = document.getElementById("loginBtn");
let smallElement = document.getElementById("smallElement");
let smallElementpassword=document.getElementById("smallElementpassword");
let users;
/*get Item from local storage */
if(localStorage.getItem("usersdata") == null)
{
    users=[];
}
else{
    users=JSON.parse(localStorage.getItem("usersdata"))
}
showBtn.addEventListener("click",function(){
    let moreSocialMedai = document.getElementById("more-social-medai")
    if(moreSocialMedai.style.display=="flex")
    {
        moreSocialMedai.style.display="none" 
        showBtn.innerHTML="<h4>More <i class='fas fa-chevron-down'></i></h4>"
    }
    else
    {
        moreSocialMedai.style.display="flex"
        showBtn.innerHTML="<h4>Less <i class='fas fa-chevron-up'></i></h4>"
    }
})
/*Handling expected errors of email */
userEmailInp.addEventListener("blur",function(){
    if(userEmailInp.value == "" ){
        smallElement.innerHTML="Please enter your email or username";
        userEmailInp.style.borderColor="red";
    }
    else
    {
        userEmailInp.style.borderColor="#B9BECE";

    }
})
userEmailInp.addEventListener("focus",function(){
     smallElement.innerHTML="";
     userEmailInp.style.borderColor="#237eee";
})
/*Handling expected errors of password */
userpasswordInp.addEventListener("blur",function(){
    if(userpasswordInp.value == ""){
        smallElementpassword.innerHTML="Please enter your password";
        userpasswordInp.style.borderColor="red";
    }
    else
    {
        userpasswordInp.style.borderColor="#B9BECE";
    }
})
userpasswordInp.addEventListener("focus",function(){
    smallElementpassword.innerHTML="";
    userpasswordInp.style.borderColor="#237eee";

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
/* search in local storage */
loginBtn.addEventListener("click", function(){
    if(userEmailInp.value == "")
    {
        smallElement.innerHTML="Please enter your email or username";
    }
    if( userpasswordInp.value == "")
    {
        smallElementpassword.innerHTML="Please enter your password";
    }

    for(let i=0;i<users.length;i++)
    {
        if(userpasswordInp.value != "" && userEmailInp.value != "" )
        {
            if(userEmailInp.value == users[i].email && userpasswordInp.value == users[i].password)
            {

                window.location.href="todolist.html"
            }
            else
            {
                smallElement.innerHTML="Your email and password don't match our records. Please try again."
            }
        }
    }    
})