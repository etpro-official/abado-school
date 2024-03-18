
 get_email_name_check = localStorage.getItem("useremail");
 get_user_name_check = localStorage.getItem("username");
function data_load(){
    var get_user_name = localStorage.getItem("username");
    var display_user_name = document.getElementById("user_name_display");
    var display_user_name2 = document.getElementById("user_name_display2");
    display_user_name.innerText = get_user_name;
     display_user_name2.innerText = get_user_name;
    placer()
    check_user_ac_token()
}

function check_user_ac_token(){
    if(localStorage.getItem("acToken")==null){
        document.getElementById("body").style.display="none";
    }else{
        document.getElementById("body").style.display="block";
    }
}

function placer(get_user_name,get_last_name,get_email_name,get_ac_type,get_pass_type,bod_cheak){
 get_user_name = localStorage.getItem("username");
 get_last_name = localStorage.getItem("lastname");
 get_email_name = localStorage.getItem("useremail");
 get_ac_type = localStorage.getItem("accountType");
get_pass_type = localStorage.getItem("password");
document.getElementById("fir_name").value = get_user_name;
document.getElementById("sec_name").value = get_last_name; 
document.getElementById("em").value = get_email_name;
document.getElementById("acTp").value = get_ac_type;
document.getElementById("passed1").value = get_pass_type;
document.getElementById("passed2").value = get_pass_type;
lol()
    rpsd()
    read_colors()
}



function lol(bod_cheak){
    rds = localStorage.getItem("cv");
    if(rds == null){
        document.getElementById("body").style.display="none";
        window.location="../login.html";
    }else{
        document.getElementById("body").style.display="block";
    }
}

function rpsd(vssd_pass1,vssd_pass2){
    vssd_pass1 = document.getElementById("passed1");
    vssd_pass2 = document.getElementById("passed2");
    vssd_pass1.type="password";
    vssd_pass2.type="password";
    if (get_email_name_check == "teachers@gmail.com"){
         get_user_name_check = localStorage.getItem("username");
        Swal.fire("Hellow Teacher Welcome To Your Profile");
        document.getElementById("em").type="password";
    }else{
        console.log("perfect work!")
    }
}

function read_colors(colors){
    colors= localStorage.getItem("body_color");
    bod_col = JSON.parse(colors)[0].bodcol;
    bac_color = JSON.parse(colors)[0].baccol;
    nav_col = JSON.parse(colors)[0].navcol;
    navcol2 = JSON.parse(colors)[0].navcol2;
    
    document.getElementById("body").style.background=bac_color;
    document.getElementById("side_bar_off").style.background =nav_col;
    document.getElementById("side_bar").style.background =navcol2;
    document.getElementById("body").style.color=bod_col;
}

function open_bar(side){
	side =document.getElementById("side_bar");
	if (side.style.width !== "100%"){
		side.style.width="100%";
	}else{
		side.style.width="0%";
	}
}

function side_closer(){
    side =document.getElementById("side_bar");
    side.style.width="0%";
}


function Profile_opner(){
	document.getElementById("dash").style.display="none";
	document.getElementById("setting").style.display="none";
	document.getElementById("pro").style.display="block";
    document.getElementById("notifi").style.display="none";
side_closer()
}

function dashB(){
	document.getElementById("dash").style.display="block";
	document.getElementById("pro").style.display="none";
	document.getElementById("setting").style.display="none";
    document.getElementById("notifi").style.display="none";
side_closer()
}


function set(){
	document.getElementById("dash").style.display="none";
	document.getElementById("pro").style.display="none";
    document.getElementById("notifi").style.display="none";
	document.getElementById("setting").style.display="block";
side_closer()
}


function saved(firstName,lastNamed,email,acType,passer1,passer2){

    
    firstName = document.getElementById("fir_name").value;
    lastNamed = document.getElementById("sec_name").value;
    email = document.getElementById("em").value;
    acType = document.getElementById("acTp").value;
    passer1 = document.getElementById("passed1").value;
    passer2 = document.getElementById("passed2").value;
    empty = "";
    passlen = passer1.length;
    if(firstName == empty){
      fill()
    }else{
        if(lastNamed == empty){
            fill()
        }else{
            if(email == empty){
                fill()
            }else{
                if(passer1 == empty){
                    fill()
                }else{
                    if(passlen <8){
                        fill2()
                    }else{
                       if(passer2 == empty){
                        fill3()
                       }else{
                        if(passer2 != passer1){
                        pass_error()
                        }else{
                            if(acType == "Teacher"){
                                if(email != "teachers@gmail.com"){
                                    tecError()
                                }else{
                                    sucMassage()
                                }
                            }else{
                                   sucMassage()
                                   }
                        }
                       }
                    }
                }
            }
        }
    }
    
    

    
    
    
    }
    
function pass_error(){
        Swal.fire({
  position: "center",
  icon: "error",
  title: "Password Not Same",
  showConfirmButton: false,
  timer: 1500
});
}

function tecError(){
            Swal.fire({
  position: "center",
  icon: "error",
  title: "You Are Not Teacher",
  showConfirmButton: false,
  timer: 1500
});
}



function sucMassage(){
    
   
    firstName = document.getElementById("fir_name").value;
    lastNamed = document.getElementById("sec_name").value;
    email = document.getElementById("em").value;
    acType = document.getElementById("acTp").value;
    passer1 = document.getElementById("passed1").value;
    
    localStorage.setItem("username",firstName)
    localStorage.setItem("lastname",lastNamed)
    localStorage.setItem("accountType",acType)
    localStorage.setItem("useremail",email)
    localStorage.setItem("password",passer1)
    
    
      Swal.fire({
  position: "center",
  icon: "success",
  title: "Profile Changes Saved Success",
  showConfirmButton: false,
  timer: 1500
});
    setTimeout(reload,1500)
}

function reload(){
    location.reload();
}

function fill(){
    Swal.fire({
  position: "center",
  icon: "error",
  title: "Fill Blank Input Box",
  showConfirmButton: false,
  timer: 1500
});
}


function fill2(){
    Swal.fire({
  position: "center",
  icon: "error",
  title: "Password Will Be Above 8 Character",
  showConfirmButton: false,
  timer: 1500
});
}
    


function fill3(){
    Swal.fire({
  position: "center",
  icon: "error",
  title: "Confirm Password Please",
  showConfirmButton: false,
  timer: 1500
});
}
    






function log_out(){

Swal.fire({
  title: "Do you want to Log Out In This Page?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Logout",
  denyButtonText: `Don't Logout`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire("Logout!", "", "success");
      window.location.replace("../login.html");
      localStorage.removeItem("cv");
       let deletingAll = browser.history.deleteAll();
  deletingAll.then(onDeleteAll);
      
      
  } else if (result.isDenied) {
    Swal.fire("Success", "", "Logout cancel");
  }
});

    side_closer()
}

function notifi(){
    document.getElementById("notifi").style.display="block";
    document.getElementById("dash").style.display="none";
	document.getElementById("pro").style.display="none";
	document.getElementById("setting").style.display="none";
    side_closer()
}





function darkmode(){
    side_off = document.getElementById("side_bar_off");
    side_bar = document.getElementById("side_bar");
    body = document.getElementById("body");
    body.style.color="white";
    body.style.background="#3e3e42";
    side_off.style.background="#2d2d30";
    side_bar.style.background="#2d2d30";
    navbar.style.color="black";
     save_appira1()
}

function lightmode(){
    side_off = document.getElementById("side_bar_off");
    side_bar = document.getElementById("side_bar");
    body = document.getElementById("body");
    body.style.color="black";
    body.style.background="white";
    side_off.style.background="#5b50ff";
    side_bar.style.background="#5b50ff";
    navbar.style.color="balck";
    save_appira2()
}



function save_appira1(){
color_coll = [{
    baccol:"#3e3e42",
    bodcol:"white",
    navcol:"#2d2d30",
    navcol2:"#2d2d30"
}];
localStorage.setItem("body_color" ,JSON.stringify(color_coll));
      
  

}

function save_appira2(){
color_coll = [{
    baccol:"white",
    bodcol:"black",
    navcol:"#5b50ff",
    navcol2:"#2d2d30"
}];
localStorage.setItem("body_color" ,JSON.stringify(color_coll));
}


function save_appira(){
Swal.fire({
  position: "center",
  icon: "success",
  title: "Your Appearance has been saved",
  showConfirmButton: false,
  timer: 1500
});
}

function deleteAc(){
    Swal.fire({ 
  title: "Do you want to Log Out In This Page?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Delete",
  denyButtonText: `Don't Delete `
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire("Do You Want Delete This", "Account?", "success");
      window.location.replace("../signup.html");
      localStorage.clear()
       let deletingAll = browser.history.deleteAll();
  deletingAll.then(onDeleteAll);
      
      
  } else if (result.isDenied) {
    Swal.fire("Success", "", "Logout cancel");
  }
});
    
}


/*document.getElementById('file').addEventListener("change",function(){
	console.log(this.files);


const reader = new FileReader();


reader.addEventListener("load", ()=>{
	 localStorage.setItem("Profile" , reader.result)
})

reader.readAsDataURL(this.files[0]);})


function oms(){
	const imgUrl = localStorage.getItem("Profile");
if(imgUrl){
	document.getElementById("imgPreview").setAttribute("src" ,imgUrl);
}

}


*/


fetch('https://api.telegram.org/bot7059875715:AAGYaCvEPbffdIZORPSZKnHH2UOHNR7OayA/getUpdates')
    .then(res => res.json())
    .then(data => {
    console.log(data);
        const dataLen = data.result.length-1;
        console.log(dataLen);
        console.log(data.result[dataLen].message.text);
        let text =data.result[dataLen].message.text;
    localStorage.setItem("message" , text);
    const textMs = localStorage.getItem("message");
        document.getElementById("notifiMes").innerText = textMs;
    });

