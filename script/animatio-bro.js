function page_database_reder(){
    if(localStorage.getItem("acToken")!=null)
        {
        document.getElementById("body1").style.dispaly="none"
            window.alert('You Have Account You Dont Reacreate Again')
            window.location="login.html";
        }else{
setTimeout(load_dara,2000)
        }
function load_dara(){
	document.getElementById("loder").style.display="none";
	document.getElementById("body").style.display="block";
	next();
}
 

	function next(boxer){

	boxer = document.getElementById('boxer');

	boxer.style.width="450px";

}

}