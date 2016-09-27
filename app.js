 var spinCancun = function(){
   document.getElementById('cancun').style.transform = "rotate(180deg)";
 };

 var spinBackCancun = function(){
   document.getElementById('cancun').style.transform = "rotate(0deg)";
 };

 var makeBigAppleBigger = function(){
   document.getElementById('nyc').style.transform = "scale(1.5,1.5)";
 };

var makeBigAppleNormal = function(){
  document.getElementById('nyc').style.transform = "scale(1,1)";
};

var makeh1Bigger = function(){
  document.getElementById('topheading').style.transform = "scale(2,2)";
};

function rolloverHawaii(my_image){
  my_image.src="Hawaiin_Tourist.jpg";
};

function mouseawayHawaii(my_image){
  my_image.src="images/hawaii-art.jpg"
};

function rolloverCancun(my_image){
  my_image.src="Mexican_Tourist.jpg";
};

function mouseawayCancun(my_image){
  my_image.src="images/cancun.jpg"
};

function rolloverNewYork(my_image){
  my_image.src="guysellingwatches.jpg";
};

function mouseawayNewYork(my_image){
  my_image.src="images/nyc.jpeg";
};

function scammer(my_image){
  my_image.src="lochte.jpg";
};
