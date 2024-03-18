function set_dataBase(){
    var ac_Check = localStorage.getItem("cv ");
    if(ac_Check != null){
        
        Swal.fire({
  position: "center",
  icon: "error",
  title: "Already You Have Account Please Login",
  showConfirmButton: false,
  timer: 2000
});
                    setTimeout(next,2000)
            function next(){
            window.location="login.html";
        }
        
        
    }else{
     saved();   
    }

}

function saved(){
    set_username= document.getElementById('usernamed').value;
	set_lastname= document.getElementById('lastname').value;
	set_email= document.getElementById('email').value;
	set_pass2= document.getElementById('pass2').value;
    set_actype= document.getElementById('ac_type').value;
    acbb = "hjiohuiohyyydgyuo6789427846891uio&*90746789y78))*7964789${set_username}";
    ac_Tk = "GHUITY7639U(&89t6748Y*(T&^yuegiyaduif67465&GTYVGdvtyu6%6753678TY&*TydvgwyuitrydtyURF%y45r763tyu^%78564tyi${acbb}))";
    
    localStorage.setItem("username",set_username);
    localStorage.setItem("lastname",set_lastname);
    localStorage.setItem("useremail",set_email);
    localStorage.setItem("password",set_pass2);
    localStorage.setItem("accountType",set_actype);
    localStorage.setItem("acToken",ac_Tk);
    window.location="login.html";
    
}