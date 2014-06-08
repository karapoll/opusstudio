if(!sessionStorage.getItem("intro"))
{
	sessionStorage.setItem("intro",true);
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = "css/anim.css";
	var head = document.querySelector("head");
	head.appendChild(link);
}