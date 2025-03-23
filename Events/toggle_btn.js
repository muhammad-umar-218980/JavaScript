let toggleBtn = document.querySelector("#toggleBtn");

let mode = "white";
let body = document.querySelector("body");


function changeMode(){
	if(mode == "white"){
		body.style.backgroundColor = "black";
		body.style.color = "white";
		mode = "black";
}else{
	body.style.backgroundColor = "white";
	body.style.color = "black";
	mode = "white";
}
};

toggleBtn.addEventListener("click", changeMode);