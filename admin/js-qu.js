function check(username,password,getname,getpass){
    
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

    getname = localStorage.getItem("adus");
    getpass = localStorage.getItem("adpass");
    
   if(username != getname){
       error();
   }else{
       if(password!=getpass){error();}else{window.alert("login success")}
   }
    
}

    function error(){
             Swal.fire({
  title: "<p style='color:red;'>Wrong Password</p>",
  text: "You are not admin",
  icon: "error"
});    
    }
    

function post_ms(){
   const message_send = document.getElementById("mess").value;
message_url = `https://api.telegram.org/bot7059875715:AAGYaCvEPbffdIZORPSZKnHH2UOHNR7OayA/sendMessage?chat_id=-1002120075926&text=${message_send}`;
    let api = new XMLHttpRequest()
    api.open("GET" , message_url , true);
    api.send()
}
    
localStorage.setItem("adus" , "admin")
localStorage.setItem("adpass" , "adminpass")



fetch('https://api.telegram.org/bot6801917012:AAGUkbzK7hAodG6TncNOBkZPGFL1QJ2Ft6k/getUpdates')
    .then(res => res.json())
    .then(data => {console.log(data);});