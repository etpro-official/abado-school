function load_dara(loc){

loc = document.getElementById('lod');

setTimeout(onfc,1);
    userac()
    user_login_scann()

function onfc(loc){
	loc = document.getElementById('lod');
	document.getElementById('box').style.display="block";
	loc.style.display="none";
    
}

}


function user_login_scann(){
    const cv_get = localStorage.getItem("cv");
}

function userac(rls){
    
    rls = localStorage.getItem("acToken");
    if(rls ==null){
        alert("You Dont Have Account")
        window.location.replace("signup.html")
      
    }else{
        console.log("You Have Account!")
    }
}