








function check(){
    user_name = document.getElementById("username").value;
    user_pass = document.getElementById("password").value;
    user_ac = document.getElementById("user_type").value;
   us = localStorage.getItem("username");
   ps = localStorage.getItem("password");
   ac = localStorage.getItem("accountType");
    if(user_name != us){
        document.getElementById("res").innerText = "Wrong User Name Or Password!"
        document.getElementById("res").style.color="red";
    }else{
        if(user_pass != ps){
        document.getElementById("res").innerText = "Wrong User Name Or Password!"
        document.getElementById("res").style.color="red";  
        }else{
            if(user_ac != ac){
        document.getElementById("res").innerText = "Wrong Account Type!"
        document.getElementById("res").style.color="orange";
            }else{
                document.getElementById("res").innerText = "Login Success!"
                document.getElementById("res").style.color="green";  
                var token = "78492346789234697896uhjKL*()89483708HJUHJiopu&^*$&^$&*90*&^&#yubghjkYT&^*(&%67878yuGIY)";
                localStorage.setItem("cv" ,token)
                window.location ="account_page/AccountPage.html";
            }
        }
    }

}