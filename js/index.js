var player = "";
var mp4Vid = "";
var sensorZone = "";
var varTimer;
var contador=0;
var cambiosensorZone =""
var visitedZone = [];

window.addEventListener('load', function(){
  player = document.getElementById('bgvid');
  mp4Vid = document.getElementById('mp4Source');
  sensorZone = document.createElement("String");
  cambiosensorZone = document.createElement("String");

  player.onended = function() {
    mp4Vid.src = "videos/video.mp4";
    console.log("onended listener triggered");
    reproducirVideoTrigger();
    // player.pause();
    // player.load();
    // player.play();
     contador=0;
  };
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
  player.addEventListener("canplay", function onCanPlay() {
    player.removeEventListener("canplay", onCanPlay);
    player.play();
  });
  player.load();
};

//Timer to control the speed of interaction response.
function inicioInteraccion(data){
  varTimer=setTimeout(function(){ 
  contador++;
  videoEncurso();
  cambiosensorZone=sensorZone;
    if(contador==1){
      reproducirVideoTrigger();
      apiCall(data);
      mixpanel.track(sensorZone);
    };
  }, 5000);
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

function firstVisit(data){
  reproducirVideoTrigger()
  apiCall(data)
  mixpanel.track(sensorZone);
}

function secondVisit(data){
  varTimer=setTimeout(function(){ 
    reproducirVideoTrigger()
    apiCall(data);
    mixpanel.track(sensorZone);
  },5000);
}

function checkArrayElem(value){
  if(!visitedZone.includes(value)){
    visitedZone.push(value)
  }
}
/**
 * Add Dynamic Listener when user hovers on image
 * @param {*} event 
 */

function addListener(event){  
  event = event || window.event; // IE
  var target = event.target || event.srcElement; // IE
  var trigger = target.id;
  var box1 = document.getElementById(trigger);
  var data = {};
  data.IS_ONLINE = internetGlobal
  //alert(trigger);

  switch(trigger){

    case 'trigger1':
      mp4Vid.src = "videos/video1.mp4";
      sensorZone="INTER_24_PROF_A01";
      break;

    case 'trigger2':
      mp4Vid.src = "videos/video2.mp4";
      sensorZone="INTER_24_PROF_A02";
      break;

    case 'trigger3':
      mp4Vid.src = "videos/video3.mp4";
      sensorZone="INTER_24_PROF_A03";
      break;

    case 'trigger4':
      mp4Vid.src = "videos/video4.mp4";
      sensorZone="INTER_24_PROF_A04";
      break;

    case 'trigger5':
      mp4Vid.src = "videos/video5.mp4";
      sensorZone="INTER_24_PROF_A05";
      break;

    default:
      console("event not triggered");
  }

  data.LOG_TYPE = 'mouseenter'
  data.AOI_ZONE = sensorZone
  console.log("....",visitedZone);
  if(visitedZone.includes(sensorZone)){
    console.log("second visit");
    secondVisit(data);
  }else{
    console.log("first visit");
    firstVisit(data);
  }

  box1.addEventListener('mousedown', function(e){
    console.log("mousedown listener called",trigger);
    data.LOG_TYPE = 'mousedown'
    data.AOI_ZONE = sensorZone

    inicioInteraccion(data);
    e.preventDefault();
    e.stopPropagation();
  }, {passive: false});

  box1.addEventListener('mouseup', function(e){
    console.log("mouseup listener called",trigger);
    data.LOG_TYPE = 'mouseup'
    data.AOI_ZONE = sensorZone

    //inicioInteraccion(data);
    e.preventDefault()
    e.stopPropagation();
  }, {passive: false});

  box1.addEventListener('mouseleave', function(e){
    console.log("mouseleave listener called",trigger);
    checkArrayElem(sensorZone);
    var old_element = box1;
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    e.preventDefault()
    e.stopPropagation();
  }, {passive: false});
}  



