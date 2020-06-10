var player = "";
var mp4Vid = "";
var sensorZone = "";
var varTimer;
var contador=0;
var cambiosensorZone ="";

window.addEventListener('load', function(){
  player = document.getElementById('bgvid');
  mp4Vid = document.getElementById('mp4Source');
  sensorZone = document.createElement("String");
  cambiosensorZone = document.createElement("String");
})

var internetGlobal;
	var isOnLine = navigator.onLine;
			window.onload = checkInternetConnection;
			function checkInternetConnection() {
				if (isOnLine) {
					internetGlobal=true;
				} else {
					internetGlobal=false;    
				}
      };
      
//This function cancels the "error" when returning a product or touching it repeatedly
function  videoEncurso(){
  if(sensorZone!=cambiosensorZone){
    contador=0;
  } 
};	

//This function plays the video when a person interacts with the products. Permissions for another interaction are reset with the timerPermisos function.
	
function reproducirVideoTrigger() {
  player.pause();
    player.load();
    player.play();
};

//Timer to control the speed of interaction response.
function inicioInteraccion(data){
  //varTimer=setTimeout(function(){ 
  contador++;
  videoEncurso();
  cambiosensorZone=sensorZone;
    //if(contador==1){
      reproducirVideoTrigger();
      apiCall(data);
      //guardarNumeros();	
      mixpanel.track(sensorZone);
      
    //};
  //}, 50);
};

player.onended = function() {
  mp4Vid.src = "videos/video.mp4";
  player.pause();
  player.load();
  player.play();
  contador=0;
};

/**
 * Trigger an API to track listener records in CSV file
 */

function apiCall(data){
  var xhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/saveFile"
  var jsonResponse = JSON.stringify(data)
  console.log(data);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.response);
    }
  };
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(jsonResponse);
}

/**
 * Add Dynamic Listener when user hovers on image
 * @param {*} event 
 */

function addListener(event){  
  event = event || window.event; // IE
  var target = event.target || event.srcElement; // IE
  var imageId = target.id;
  var box1 = document.getElementById(imageId);
  var data = {};
  data.IS_ONLINE = internetGlobal
  //alert(imageId);

  box1.addEventListener('mousedown', function(e){
    console.log("mousedown listener called",imageId);
    
    mp4Vid.src = "videos/video1.mp4";
    sensorZone="INTER_24_PROF_A01";
    data.LOG_TYPE = 'mousedown'
    data.AOI_ZONE = sensorZone

    inicioInteraccion(data);
    e.preventDefault();
    e.stopPropagation();
  }, {passive: false});

  box1.addEventListener('mouseup', function(e){
    console.log("mouseup listener called",imageId);
    mp4Vid.src = "videos/video1.mp4";
    sensorZone="INTER_24_PROF_A01";
    data.LOG_TYPE = 'mousedown'
    data.AOI_ZONE = sensorZone

    inicioInteraccion(data);
    e.preventDefault()
    e.stopPropagation();
  }, {passive: false});

  box1.addEventListener('mouseleave', function(e){
    console.log("mouseleave listener called",imageId);
    var old_element = box1;
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    e.preventDefault()
    e.stopPropagation();
  }, {passive: false});
}  



