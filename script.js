var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById('button');

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
window.onload = function linearG(){
	setGradient();
}

function getRandomValues(r,g,b){
	this.r = rgbToHex(Math.floor((Math.random() * 255) + 1));
	this.g = rgbToHex(Math.floor((Math.random() * 255) + 1));
	this.b = rgbToHex(Math.floor((Math.random() * 255) + 1));

	let result =`#${this.r}${this.g}${this.b}`;
	 		
	console.log(result);
	return result ;
	

}

var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  console.log(hex);
  return hex;
};

function randomGradient(){
	color1.value =  getRandomValues();
	color2.value =  getRandomValues();

	console.log(color1.value);
	console.log(color2.value);
	setGradient();

}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener('click', randomGradient);