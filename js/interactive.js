/*Planogram Interactive
Desarrollado para Boomerang RMS.
http://www.boomerangrms.com
Fecha: Noviembre 2019	
Versión: 1.0.1
Autor: Walter Bravo
Celular:5518281871
Copyright 2019*/


//FileSaver
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.FileSaver = mod.exports;
  }
})(this, function () {
  "use strict";

  /*
  * FileSaver.js
  * A saveAs() FileSaver implementation.
  *
  * By Eli Grey, http://eligrey.com
  *
  * License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
  * source  : http://purl.eligrey.com/github/FileSaver.js
  */
  // The one and only way of getting global scope in all environments
  // https://stackoverflow.com/q/3277182/1008999
  var _global = typeof window === 'object' && window.window === window ? window : typeof self === 'object' && self.self === self ? self : typeof global === 'object' && global.global === global ? global : void 0;

//   function bom(blob, opts) {
//     if (typeof opts === 'undefined') opts = {
//       autoBom: false
//     };else if (typeof opts !== 'object') {
//       console.warn('Deprecated: Expected third argument to be a object');
//       opts = {
//         autoBom: !opts
//       };
//     } // prepend BOM for UTF-8 XML and text/* types (including HTML)
//     // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF

//     if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
//       return new Blob([String.fromCharCode(0xFEFF), blob], {
//         type: blob.type
//       });
//     }

//     return blob;
//   }

//   function download(url, name, opts) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.responseType = 'blob';

//     xhr.onload = function () {
//       saveAs(xhr.response, name, opts);
//     };

//     xhr.onerror = function () {
//       console.error('could not download file');
//     };

//     xhr.send();
//   }

//   function corsEnabled(url) {
//     var xhr = new XMLHttpRequest(); // use sync to avoid popup blocker

//     xhr.open('HEAD', url, false);

//     try {
//       xhr.send();
//     } catch (e) {}

//     return xhr.status >= 200 && xhr.status <= 299;
//   } // `a.click()` doesn't work for all browsers (#465)


//   function click(node) {
//     try {
//       node.dispatchEvent(new MouseEvent('click'));
//     } catch (e) {
//       var evt = document.createEvent('MouseEvents');
//       evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
//       node.dispatchEvent(evt);
//     }
//   }

//   var saveAs = _global.saveAs || ( // probably in some web worker
//   typeof window !== 'object' || window !== _global ? function saveAs() {}
//   /* noop */
//   // Use download attribute first if possible (#193 Lumia mobile)
//   : 'download' in HTMLAnchorElement.prototype ? function saveAs(blob, name, opts) {
//     var URL = _global.URL || _global.webkitURL;
//     var a = document.createElement('a');
//     name = name || blob.name || 'download';
//     a.download = name;
//     a.rel = 'noopener'; // tabnabbing
//     // TODO: detect chrome extensions & packaged apps
//     // a.target = '_blank'

//     if (typeof blob === 'string') {
//       // Support regular links
//       a.href = blob;

//       if (a.origin !== location.origin) {
//         corsEnabled(a.href) ? download(blob, name, opts) : click(a, a.target = '_blank');
//       } else {
//         click(a);
//       }
//     } else {
//       // Support blobs
//       a.href = URL.createObjectURL(blob);
//       setTimeout(function () {
//         URL.revokeObjectURL(a.href);
//       }, 4E4); // 40s

//       setTimeout(function () {
//         click(a);
//       }, 0);
//     }
//   } // Use msSaveOrOpenBlob as a second approach
//   : 'msSaveOrOpenBlob' in navigator ? function saveAs(blob, name, opts) {
//     name = name || blob.name || 'download';

//     if (typeof blob === 'string') {
//       if (corsEnabled(blob)) {
//         download(blob, name, opts);
//       } else {
//         var a = document.createElement('a');
//         a.href = blob;
//         a.target = '_blank';
//         setTimeout(function () {
//           click(a);
//         });
//       }
//     } else {
//       navigator.msSaveOrOpenBlob(bom(blob, opts), name);
//     }
//   } // Fallback to using FileReader and a popup
//   : function saveAs(blob, name, opts, popup) {
//     // Open a popup immediately do go around popup blocker
//     // Mostly only available on user interaction and the fileReader is async so...
//     popup = popup || open('', '_blank');

//     if (popup) {
//       popup.document.title = popup.document.body.innerText = 'downloading...';
//     }

//     if (typeof blob === 'string') return download(blob, name, opts);
//     var force = blob.type === 'application/octet-stream';

//     var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari;

//     var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);

//     if ((isChromeIOS || force && isSafari) && typeof FileReader === 'object') {
//       // Safari doesn't allow downloading of blob URLs
//       var reader = new FileReader();

//       reader.onloadend = function () {
//         var url = reader.result;
//         url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;');
//         if (popup) popup.location.href = url;else location = url;
//         popup = null; // reverse-tabnabbing #460
//       };

//       reader.readAsDataURL(blob);
//     } else {
//       var URL = _global.URL || _global.webkitURL;
//       var url = URL.createObjectURL(blob);
//       if (popup) popup.location = url;else location.href = url;
//       popup = null; // reverse-tabnabbing #460

//       setTimeout(function () {
//         URL.revokeObjectURL(url);
//       }, 4E4); // 40s
//     }
//   });
//   _global.saveAs = saveAs.saveAs = saveAs;

//   if (typeof module !== 'undefined') {
//     module.exports = saveAs;
//   }
});


//FileSaver

//Revisar si hay internet
//Check if there is internet

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



//Carga la función al cargar la página.
//Loads the function when loading the page.

window.addEventListener('load', function(){
	  
	this.console.log("window loaded")
	//Variables de video
	var player = document.getElementById('bgvid');
	var mp4Vid = document.getElementById('mp4Source');
	var sensorZone = document.createElement("String");
	var varTimer;
	var contador=0;
	var cambiosensorZone = document.createElement("String");
	
	//Variable de analíticos
	var analiticos = [ ];
	
	//VARIABLES 1: Datos generales
	var today = new Date();
	var log_date=today.getFullYear()+"-"+("0"+(today.getMonth()+1)).slice(-2)+"-"+today.getDate()+"-"+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+":"+today.getMilliseconds();
	var log_timezone="-0500";
	var log_type="EVENT";
	var log_app_version="1.0.1";
	var serial_id="G6BN91900JQJ";
	var source_MAC="1C:69:7A:01:EE:A7";
	var account="P&G";
	var project="DIVINE";
	var deployment_date="2019-12-13";
	var name="AA067";	
	var vendor="INTEL";
	var model="NUC7i5BNH";
	var store_name="INTERLOMAS"
	var aoi_id="INTER_24_PROF";
	var store_chain = "CHEDRAUI";
	var city= "NAUCALPAN";
	var lat= "19.403144";
	var longi= "-99.268634";
	var country="MEX";

	//SOLO PARA MIXPANEL
	mixpanel.identify("AA067");

	//VARIABLES 2: Para arreglo
	var items = [];
	var enter='\n';
	
	//PROCESO 1: Llenado de columnas
//INREALITY//
	items.push("LOG_TIMESTAMP"+',');
	items.push("LOG_TIMEZONE"+',');
	items.push("LOG_TYPE"+',');
	items.push("LOG_APP_VERSION"+',');
	items.push("SERIAL_ID"+',');
	items.push("SOURCE_MAC"+',');
	items.push("VENDOR"+',');
	items.push("MODEL"+',');
	items.push("ACCOUNT"+',');
	items.push("PROJECT"+',');
	items.push("DEPLOYMENT_DATE"+',');
	items.push("STORE_CHAIN"+',');		
	items.push("STORE_NAME"+',');
	items.push("NAME"+',');
	items.push("AOI_ID"+',');
	items.push("COUNTRY"+',');			
	items.push("CITY"+',');
	items.push("LATITUDE"+',');
	items.push("LONGITUDE"+',');
	items.push("UNIQUE_ID"+',');		
	items.push("AOI_ZONE"+',');		
	items.push("ACTION_TIMESTAMP"+',');
	items.push(enter);
	
		//Generar CSV
		//saveNumbers
	function guardarNumeros(){
		//BACKUP
		var uniqueID = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
		var todayDYN = new Date();
		var action_date=todayDYN.getFullYear()+"-"+("0"+(todayDYN.getMonth()+1)).slice(-2)+"-"+todayDYN.getDate()+" "+todayDYN.getHours()+":"+todayDYN.getMinutes()+":"+todayDYN.getSeconds()+":"+todayDYN.getMilliseconds();
		

	items.push(log_date+',');
	items.push(log_timezone+',');
	items.push(log_type+',');
	items.push(log_app_version+',');
	items.push(serial_id+',');
	items.push(source_MAC+',');
	items.push(vendor+',');
	items.push(model+',');
	items.push(account+',');
	items.push(project+',');
	items.push(deployment_date+',');
	items.push(store_chain+',');
	items.push(store_name+',');
	items.push(name+',');
	items.push(aoi_id+',');
	items.push(country+',');			
	items.push(city+',');
	items.push(lat+',');
	items.push(longi+',');
	items.push(uniqueID+',');		
	items.push(sensorZone+',');
	items.push(action_date+',');
	items.push(enter);		
		console.log(items);
		};
		
		//Nombre de archivo ONLINE/OFFLINE
		//ONLINE / OFFLINE file name
	function saveDataToFile() {
		var save_date=today.getFullYear()+"_"+("0"+(today.getMonth()+1)).slice(-2)+"_"+today.getDate()+"_"+today.getHours()+"_"+today.getMinutes();
			var blob = new Blob(items);
					console.log(blob);
					// if (internetGlobal==true) {
						//alert(internetGlobal);
						var url = URL.createObjectURL(blob);
						var hiddenElement = document.createElement('a');
						//hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(items);
						hiddenElement.href = url;
						hiddenElement.target = '_blank';
						hiddenElement.download = name+"_"+ save_date+"_"+"ONLINE.csv"
						hiddenElement.click();
		            //saveAs(blob, name+"_"+ save_date+"_"+"ONLINE.csv");
// 					items = [];
// 					} else {
// //						alert(internetGlobal);
// 			            //saveAs(blob, name+"_"+ save_date +"_"+"OFFLINE.csv");
// 						items = [];
			//}			
        };


//FUNCION 1: Función de respaldo de información.    
//Information backup function.
	// window.setInterval(function(){ // Set interval for checking
	// 	var date = new Date(); // Create a Date object to find out what time it is
	// 	console.log("event trigger");
	// 	//if(date.getHours() === 22 && date.getMinutes() ===00){ // Check the time
	// 	//alert("TIME");
	// 	saveDataToFile( );
	// 	//}
	// }, 60000); // Repeat every 60000 milliseconds (1 minute)
	//FIN DE FUNCION 1	

//FUNCION 2: Función de respaldo de información.
	//window.setInterval(function(){ // Set interval for checking
		//var date = new Date(); // Create a Date object to find out what time it is
		//if(date.getHours() === 22 && date.getMinutes() === 10){ // Check the time
		//saveDataToFile( );
		//}
	//}, 60000); // Repeat every 60000 milliseconds (1 minute)
	//FIN DE FUNCION 2		

	
		
		
	//Esta función cancela el "error" al devolver un producto o tocarlo varias veces	
	//This function cancels the "error" when returning a product or touching it repeatedly
	function  videoEncurso(){
		if(sensorZone!=cambiosensorZone){
			contador=0;
		} 
	};	
		
	//Esta función reproduce el video cuando una persona interactúa con los productos. Los permisos para otra interacción se reestablecen con la función timerPermisos.	
	//This function plays the video when a person interacts with the products. Permissions for another interaction are reset with the timerPermisos function.
	
	function reproducirVideoTrigger() {
	  player.pause();
      player.load();
      player.play();
	};


	//Timer para controlar la velocidad de respuesta de interacción.
    //Timer to control the speed of interaction response.

	function inicioInteraccion(){
		//varTimer=setTimeout(function(){ 
		contador++;
		videoEncurso();
		cambiosensorZone=sensorZone;
			if(contador==1){
				reproducirVideoTrigger();
				guardarNumeros();	
				mixpanel.track(sensorZone);
				
			};
		//}, 50);
	};
	
		//Timer para controlar la velocidad de respuesta de interacción. (NO REPRODUCE VIDEO NUEVO)
	//Timer to control the speed of interaction response. (DO NOT PLAY A NEW VIDEO)

	function inicioInteraccionTouch(){
		varTimer=setTimeout(function(){ 
		contador++;
		videoEncurso();
		cambiosensorZone=sensorZone;
			if(contador==1){
//				reproducirVideoTrigger();
				guardarNumeros();
				mixpanel.track(sensorZone);				
			};
		}, 50);
	};


	//Esta función espera a que el video termine y manda otra función para regresar al loop. Cuando el video termina se reestablecen los permisos para
	//una segunda interacción.

	/*English transalation
	This function waits for the video to finish and sends another function to return to the loop. When the video ends, permissions are restored
    a second interaction.
	*/
	
	player.onended = function() {
		mp4Vid.src = "videos/video.mp4";
		player.pause();
		player.load();
		player.play();
		contador=0;
	};
		

	//Se declaran "cajas" unidas a cada div. Cada caja detecta eventos touch.	
//"Boxes" are declared attached to each div. Each box detects touch events.

	 var box1 = document.getElementById('trigger1');
	 var box2 = document.getElementById('trigger2');
	 var box3 = document.getElementById('trigger3');
	 var box4 = document.getElementById('trigger4');
	 var box5 = document.getElementById('trigger5');
  
	//Cuando inicia el toque se cambia el nombre del video a reproducir y del sensorZone para analíticos. Se llama la función que reproducirá al video.
	//También se evitan interacciones accidentales. 

// When the touch starts, the name of the video to be played and the sensorZone for analytics are changed. The function that will play the video is called.
// Accidental interactions are also avoided.

	//Inicio de caja
// Cash start
// document.getElementById("trigger2").addEventListener("mouseenter", mouseEnter);
// document.getElementById("trigger2").addEventListener("mouseleave", mouseLeave);

	function mouseEnter() {
		console.log(" mouseEnter event trigger");
	}

	function mouseLeave() {
		console.log(" mouseLeave event trigger");
	}

    document.getElementById("trigger2").addEventListener('mouseenter', function(e){
		console.log("mouseenter listener called");
		mp4Vid.src = "videos/video1.mp4";
		sensorZone="INTER_24_PROF_A01";
		inicioInteraccion();
		e.preventDefault();
    }, {passive: false});
	
	box1.addEventListener('mousemove', function(e){
		console.log("mousemove listener called");
        e.stopPropagation();
		e.preventDefault()
    }, {passive: false});
 
    box1.addEventListener('mouseleave', function(e){
		console.log("mouseleave listener called");
        e.preventDefault()
    }, {passive: false});
	//Fin de caja

//Inicio de caja
    box2.addEventListener('touchstart', function(e){
		mp4Vid.src = "videos/video1.mp4";
		sensorZone="INTER_24_PROF_A02";
		inicioInteraccion();
		e.preventDefault();
    }, {passive: false});
	
	 box2.addEventListener('touchmove', function(e){
        e.stopPropagation();
		e.preventDefault()
    }, {passive: false});
 
    box2.addEventListener('touchend', function(e){
        e.preventDefault()
    }, {passive: false});
//Fin de caja

//Inicio de caja
    box3.addEventListener('touchstart', function(e){
		mp4Vid.src = "videos/video1.mp4";
		sensorZone="INTER_24_PROF_A03";
		inicioInteraccion();
		e.preventDefault();
    }, {passive: false});
	
	 box3.addEventListener('touchmove', function(e){
        e.stopPropagation();
		e.preventDefault()
    }, {passive: false});
 
    box3.addEventListener('touchend', function(e){
        e.preventDefault()
    }, {passive: false});
//Fin de caja

//Inicio de caja
    box4.addEventListener('touchstart', function(e){
		mp4Vid.src = "videos/video1.mp4";
		sensorZone="INTER_24_PROF_A04";
		inicioInteraccion();
		e.preventDefault();
    }, {passive: false});
	
	 box4.addEventListener('touchmove', function(e){
        e.stopPropagation();
		e.preventDefault()
    }, {passive: false});
 
    box4.addEventListener('touchend', function(e){
        e.preventDefault()
    }, {passive: false});
//Fin de caja

//Inicio de caja
    box5.addEventListener('touchstart', function(e){
		mp4Vid.src = "videos/video1.mp4";
		sensorZone="INTER_24_PROF_A05";
		inicioInteraccion();
		e.preventDefault();
    }, {passive: false});
	
	 box5.addEventListener('touchmove', function(e){
        e.stopPropagation();
		e.preventDefault()
    }, {passive: false});
 
    box5.addEventListener('touchend', function(e){
        e.preventDefault()
    }, {passive: false});
//Fin de caja
// End of cash



}, false);	
