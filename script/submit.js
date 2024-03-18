function sub(username){
	username= document.getElementById('usernamed').value;
	lastname= document.getElementById('lastname').value;
	email= document.getElementById('email').value;
	pass1= document.getElementById('pass1').value;
	pass2= document.getElementById('pass2').value;
    ac_type_chek = document.getElementById('ac_type').value;
	empty="";
    
  
    
    
    
    
    
    
	if (username == empty){
	
			document.getElementById('alerted').style.opacity="1";
			document.getElementById('res').innerText="Insert user name";
			document.getElementById('alerted').style.margin="20px 0px 0px 0px";
				setTimeout(opened,2000);
		function opened(){
			document.getElementById('alerted').style.opacity="0";
			document.getElementById('alerted').style.margin="0px 0px 0px 0px";
		}

	}else{
		if (lastname == empty){
 
			document.getElementById('alerted').style.opacity="1";
			document.getElementById('res').innerText="Insert last name";
			document.getElementById('alerted').style.margin="20px 0px 0px 0px";
				setTimeout(opened,2000);
		function opened(){
			document.getElementById('alerted').style.opacity="0";
			document.getElementById('alerted').style.margin="0px 0px 0px 0px";
		}

		}else{
			if (email == empty){
			document.getElementById('alerted').style.opacity="1";
			document.getElementById('res').innerText="Insert Email Adderss";
			document.getElementById('alerted').style.margin="20px 0px 0px 0px";
				setTimeout(opened,2000);
		function opened(){
			document.getElementById('alerted').style.opacity="0";
			document.getElementById('alerted').style.margin="0px 0px 0px 0px";
		}
			}else{
				if (pass1 == empty){


				document.getElementById('alerted').style.opacity="1";
			document.getElementById('res').innerText="Insert Password Above 8Character";
			document.getElementById('alerted').style.margin="20px 0px 0px 0px";
				setTimeout(opened,2000);
		function opened(){
			document.getElementById('alerted').style.opacity="0";
			document.getElementById('alerted').style.margin="0px 0px 0px 0px";
		}	


				}else{

					if (pass1.length<8){
			document.getElementById('alerted').style.opacity="1";
			document.getElementById('res').innerText="This Is Below 8Character";
			document.getElementById('alerted').style.margin="20px 0px 0px 0px";
				setTimeout(opened,2000);
		function opened(){
			document.getElementById('alerted').style.opacity="0";
			document.getElementById('alerted').style.margin="0px 0px 0px 0px";
		}
					}else{

						if (pass2 == empty){

				document.getElementById('alerted').style.opacity="1";
			document.getElementById('res').innerText="Comfirm Password";
			document.getElementById('alerted').style.margin="20px 0px 0px 0px";
				setTimeout(opened,2000);
		function opened(){
			document.getElementById('alerted').style.opacity="0";
			document.getElementById('alerted').style.margin="0px 0px 0px 0px";
		}


						}else{



if (pass1!=pass2){
					document.getElementById('alerted').style.opacity="1";
			document.getElementById('res').innerText="Not Same Password";
			document.getElementById('alerted').style.margin="20px 0px 0px 0px";
				setTimeout(opened,2000);
		function opened(){
			document.getElementById('alerted').style.opacity="0";
			document.getElementById('alerted').style.margin="0px 0px 0px 0px";
		}
}else{
	suc()
}


						}

					}


				}
			}


		}





	}
}


function suc(){


      if(ac_type_chek == "Teacher"){
        if(email == "teacher@gmail.com"){
            vdr();
        }else{
                    
                Swal.fire({
  position: "center",
  icon: "error",
  title: "<h4>You Are Not Teacher Please Change Your Account Type</h4>",
  showConfirmButton: false,
  timer: 2000
});
        }
    }else{
        vdr();

        
        
    }
  function vdr(){

  Swal.fire({
  position: "center",
  icon: "success",
  title: "Created Account Success",
  showConfirmButton: false,
  timer: 2000
});


set_dataBase()
  }  
    
    

}

function can(){


document.getElementById('success').style.opacity="1";
			document.getElementById('ress').innerText="Cancel Success";
			document.getElementById('success').style.margin="20px 0px 0px 0px";
				setTimeout(opened,2000);
		function opened(){
			document.getElementById('success').style.opacity="0";
			document.getElementById('success').style.margin="0px 0px 0px 0px";
		}


window.location="home.html";

}