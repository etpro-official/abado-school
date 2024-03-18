function open_bar_menu_function(style_off,off_text){
	style_off = document.getElementById('hid');
	off_text = document.getElementById("msgd");
	if (style_off.style.width!=="100%"){
		style_off.style.width="100%";
		off_text.style.opacity="0";
	}else{
		style_off.style.width="0%";
		off_text.style.opacity="1";
	}
}

function clos(){
 document.getElementById('hid').style.width="0%";

}

function page_opener(page_opner){
	page_opner = document.getElementById("paged");
	if(page_opner.style.height!=="138px"){
		page_opner.style.height="138px";
	}else{
		page_opner.style.height="0px";
	}
}	

function page_loaded_ani_style(butn,text,nav,mds){



var loder = document.getElementById("page_loder");

const timer = setTimeout(myGreeting,3000)

function myGreeting(){
	document.getElementById("page_loder").style.opacity="0";
	document.getElementById("page_loder").style.display="none";
	document.getElementById("body").style.opacity="1";
	setTimeout(nextstp,100)
}


	function nextstp(butn,text,nav,mds){
	butn = document.getElementById("lern");
	butn.style.margin="0px 0px 0px 0px";
	text = document.getElementById("msgd");
	text.style.opacity="1";
	nav = document.getElementById("nav");
	nav.style.margin="0px 0px 0px 0px";
	mds = document.getElementById("mds");
	mds.style.opacity="1";

}
}


addEventListener('scroll',(scv)=>{
scv = window.scrollY;
	if (scv > 460){
		document.getElementById("cd1").style.scale="1";
		document.getElementById("cd2").style.scale="1";
		document.getElementById("cd3").style.scale="1";
		document.getElementById("cd4").style.scale="1";
		document.getElementById("cd4").style.scale="1";
	}else{
		document.getElementById("cd1").style.scale="1";
		document.getElementById("cd2").style.scale="1";
		document.getElementById("cd3").style.scale="1";
		document.getElementById("cd4").style.scale="1";

	}

})

addEventListener('scroll' , (lol)=>{
	lol = scrollY
	if (lol >460){
		document.getElementById("up").style.opacity="1";
	}else{
		document.getElementById("up").style.opacity="0";
	}
})


addEventListener('scroll',(bor)=>{
	bor = window.scrollY;
	console.log(bor)

	if (bor > 750){
		document.getElementById("img_ss").style.opacity="1";
		document.getElementById("mdss").style.opacity="1";
		document.getElementById("mdss").style.margin="100px 0px 0px 30px";
	}
})


addEventListener('scroll' ,(news)=>{
	news = window.scrollY;
	if (news > 1200){
		document.getElementById("nwssd").style.opacity="1";
		document.getElementById("new_text").style.opacity="1";
		document.getElementById("new_text").style.margin="0px 0px 0px 30px";
	}
})


addEventListener('scroll',(scvd)=>{
scvd = window.scrollY;
console.log(scvd);
	if (scvd > 1800){
		document.getElementById("book_dvv1").style.scale="1";
		document.getElementById("book_dvv2").style.scale="1";
		document.getElementById("book_dvv3").style.scale="1";
		document.getElementById("book_dvv4").style.scale="1";
	}

})

function signup(){window.location="signup.html";}
function login(){window.location="login.html";}
function ops(){window.location="about.html";}