var geocoder;
var map;  
var destination;
var x;
var y;
var inc_x;
var inc_y;
var cityCircle;
var timeArray;
var t1;
var time;
var x1, y1, l1, ang = 0;
var flag; 
var array = [];
var origin = new google.maps.LatLng(28.5300262,77.3894611);  
var a5  = [];
var a10 = [];
var a15 = [];
var a20 = [];
var a25 = [];
var a30 = [];
var a35 = [];
var a40 = [];
var a45 = [];
var a50 = [];
var a55 = [];
var a60 = [];
var a10_25=[];
var a45_60=[];
var a10_15=[];
var a25_35=[];
var a25_45=[];
var a5_10 = [];
var a10_15 = [];
var a15_25=[];
var a35_45 = [];

var m;
var fl = false;
var f = true;
var ang1 = 0;
var infowindow;
var stack = new Array();
var poly5;
var poly10;
var poly15;
var poly25;
var poly35;
var poly45;
var poly60;

function initialize()
{

    geocoder = new google.maps.Geocoder();
    //geocoder = new google.maps.Geocoder();
  
    //var pos = new google.maps.LatLng(34.04924594193164, -118.24104309082031);  
    map = new google.maps.Map(document.getElementById("map"),
    {
        zoom: 12,
        center: origin,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
        position: origin,
        draggable: true,
        map: map
    });
   // utillDistance60();
    //origin = pos;
    /*var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map); */
}

function codeAddress() {

    var address = document.getElementById("address").value;  
    geocoder.geocode( { 'address': address}, function(results, status){
        if (status == google.maps.GeocoderStatus.OK) {
            
        map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
            origin  =  results[0].geometry.location;
      //      var trafficLayer = new google.maps.TrafficLayer();
      //trafficLayer.setMap(map); 
    //DistanceMatrixServices implementation 
            //from here starting new
            origin = results[0].geometry.location;
          // utillDistance60();
      } else {
        alert("Geocode was not successful for the following reason: " + status);       
      }
    });
}  
 

function utillDistance60(){

   var addr; //geocoder.geocode({'address':document.getElementById("address").value},function(results,status){origin = results[0].geometry.location;});
    console.log("utill");
    google.maps.event.addListener(map,'click',function(event) {destination = event.latLng;
     calculateDistancesDriveForInfo();
    });
}

function calculateDistancesDriveForInfo(){
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, callbackForInfo);
}

function callbackForInfo(response, status) {
  if (status != google.maps.DistanceMatrixStatus.OK) {
    alert('Error was: ' + status);
  } else {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
      var outputDiv = document.getElementById('outputDiv');
      outputDiv.innerHTML = '';
      var results = response.rows[0].elements;  
      outputDiv.innerHTML += origins[0] + '<br>'+' TO '+ '<br>' + destinations[0]
        + ':' + results[0].distance.text + ' in '
            + results[0].duration.text + '<br>';
        popup(origins[0], destinations[0], results[0].distance.text, results[0].duration.text);
       
   }
}

function isInfoWindowOpen(infoWindow){
    var map = infoWindow.getMap();
    return (map !== null && typeof map !== "undefined");
}
function popup(o,d,dis, t){
  // google.maps.event.addListener(cityCircle, 'mouseover', function(event) {
    //placeMarker(event.latLng);
    if(infowindow != null && infowindow.getMap()){
      infowindow.close();
    }
    infowindow = new google.maps.InfoWindow({
    content: dis +' in ' + t ,
    position: destination
    });
    infowindow.open(map);
  
}

function callback(response, status) {
  if(status != google.maps.DistanceMatrixStatus.OK) {
    alert('Error was: ' + status);
  } else {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
      var outputDiv = document.getElementById('outputDiv');
      outputDiv.innerHTML = '';
      var results = response.rows[0].elements;
      outputDiv.innerHTML += origins[0] + '<br>'+' TO '+ '<br>' + destinations[0]
        + ':' + results[0].distance.text + ' in '
            + results[0].duration.text + '<br>';   
  }
}

var time_inc = 10;
time = 0;
var f = false;
var i = 0.1;
var timeMulti = 1;
var ang_inc = 0.5;
ang = 0;
var fl = true; 
var xin ;
var yin;
var div = 2;

function makeIsochrone(){

  var time1 = document.getElementById("time").value;    
  if(time != 5){ 
  
    flag = true;
    time = time + time_inc;
    ang = 0;
    timeMulti = 1;
    if(parseInt(time) <= 5){
    ang_inc = 0.5;
    }else if(parseInt(time) <= 10){
      ang_inc = 0.5;
      time_inc = 15;
    }else if(parseInt(time) <= 15){
      ang_inc = 0.5;
      time_inc = 20;
    }else if(parseInt(time) <= 25){
      ang_inc = 0.4;
      time_inc = 20;
      //timeMulti = 1.3;
    }else if(parseInt(time) <= 35){
      //timeMulti = 20/16;
      time_inc = -30;
    }else if(parseInt(time) <= 45){
      time_inc = 15;
      //timeMulti = 1.3; 
    }else if(parseInt(time) <= 60){
      //timeMulti = 2;
      ang_inc = 0.4;
      time_inc = -45;
    } 
    console.log(time);
    initPts(origin, time);  
  
  }

} 

function initPts(pts, time) {
  
  var t;
  x = origin.lat();
  y = origin.lng();
  var l;
  
  if(ang < 6){

    l = (parseInt(time) * m / 5);
    
    xin =  x + l*Math.cos((0));
    yin =  y + l* Math.sin((0));  
    
    x1 = x + (Math.cos(ang )*(xin - x) - Math.sin(ang )*(yin-y));
    y1 = y + (Math.sin(ang )*(xin - x) + Math.cos(ang )*(yin-y)); 
    
    xin = x1;
    yin = y1;

    console.log("xin yin " + xin + yin + "x1 y1 " + x1 + y1);
    destination =  new google.maps.LatLng(x1, y1);
    flag = true;
    //if(time == 10 || time == 15 || time == 20 || time == 25|| time == 30|| time == 35 || time == 45 ||time == 40 || time == 50 ||time == 55){
      // setTimeout(function(){calculateDistancesDrive();}, 500);
    //}else{
      calculateDistancesDrive();
    //}
  
  }
  
  if(ang >= 6){
  
  if(time == 5){  
    poly10.setMap(null);
    addPolygon5();
     for(var k = 0; k < a5.length; k++) {
        a5_10.push(a5[k]);
    }
      a5_10.push(a5[0]);
      a5_10.push(a10[0]);
      for(var k = a10.length-1; k >= 0 ;k--) {
        a5_10.push(a10[k]);
      } 
      addPolygon5_10();
  }
  if(time == 10){
      addPolygon10();
  }

  if(time == 15){
    for(var k = 0; k < a10.length; k++) {
        a10_15.push(a10[k]);
    }
      a10_15.push(a10[0]);
      a10_15.push(a15[0]);
      for(var k = a15.length-1; k >= 0 ;k--) {
        a10_15.push(a15[k]);
      }
      poly25.setMap(null);
      addPolygon10_15(); 
      for(var k = 0; k < a15.length; k++) {
        a15_25.push(a15[k]);
      }
      a15_25.push(a15[0]);
      a15_25.push(a25[0]);
      for(var k = a25.length-1; k >= 0 ;k--) {
        a15_25.push(a25[k]);
      }
      addPolygon15_25();
  }

  if(time == 25){
   for(var k = 0; k < a10.length; k++) {
    a10_25.push(a10[k]);
   }
    a10_25.push(a10[0]);
    a10_25.push(a25[0]);
    for(var k = a25.length-1; k >= 0 ;k--) {
      a10_25.push(a25[k]);
    }
    addPolygon25(); 
  }

  if(time == 35){
    for(var k = 0; k < a25.length; k++) {
    a25_35.push(a25[k]);
   }
    a25_35.push(a25[0]);
    a25_35.push(a35[0]);
    for(var k = a35.length-1; k >= 0 ;k--) {
      a25_35.push(a35[k]);
    }
    poly45.setMap(null);
    addPolygon35(); 
     for(var k = 0; k < a35.length; k++) {
    a35_45.push(a35[k]);
   }
    a35_45.push(a35[0]);
    a35_45.push(a45[0]);
    for(var k = a45.length-1; k >= 0 ;k--) {
      a35_45.push(a45[k]);
    }
    addPolygon35_45();
  }

  if(time == 45){
    for(var k = 0; k < a25.length; k++) {
    a25_45.push(a25[k]);
   }
    a25_45.push(a25[0]);
    a25_45.push(a45[0]);
    for(var k = a45.length-1; k >= 0 ;k--) {
      a25_45.push(a45[k]);
    }
    addPolygon45();   
    
  }

  if(time == 60){
    for(var k = 0; k < a45.length; k++) {
    a45_60.push(a45[k]);
   }
    a45_60.push(a45[0]);
    a45_60.push(a60[0]);
    for(var k = a60.length-1; k >= 0 ;k--) {
      a45_60.push(a60[k]);
    }
    addPolygon60();   
    
  }
    makeIsochrone();
    f = false;
  }
     
}

function drawPolygon()
{
   addPolygon(); 
}

function abs(v){
  if(v < 0){
    return -v;
  }
  return v;
}
//min = Math.sqrt(Math.pow(origin.lat()-x1,2) + Math.pow(origin.lng()-y1, 2));
var t;
function calculateEndPoints(){

 var t;
 if(timeArray.length != 0){
   if(timeArray.length == 4){
      t = parseInt(timeArray[0])*60 + parseInt(timeArray[2]); 
   } else{
      t = parseInt(timeArray[0]);
   }  
  
  if(t > parseInt(time) &&  t - time > 2){
     //min = Math.pow(Math.pow(origin.lat() - x1, 2) + Math.pow(origin.lng() - y1, 2));
     console.log("greater  " + t + " " + time);
     l1= (m / 4);
     console.log("m/4 " + m / 4);
     console.log(l1);
     console.log(t - time);
     x1 = x1 - (l1 * Math.cos(ang));
     y1 = y1 - (l1 * Math.sin(ang));      
      // here we will check for time between x,y - x1,y1      
      destination =  new google.maps.LatLng(x1, y1);
       setTimeout(function(){calculateDistancesDrive();}, 100);
      //calculateDistancesDrive();
  } 

  if(t <= parseInt(time)  || ((parseInt(t - time) <= 2) && t >= parseInt(time))){
   console.log("lower  " + t + " " + time);

    if(flag == true){
      
      if((parseInt(time) - t <= 1) || (t - time <= 2) && t >= time) {
        console.log("draw");
        if(parseInt(time) <= 5){
           a5.push(destination);
        }
        if(parseInt(time) > 5 && parseInt(time) <= 10){
           a10.push(destination);

        }
        if(parseInt(time)  >10 && parseInt(time) <= 15){
           a15.push(destination);
        }
        if(parseInt(time) > 15&& parseInt(time) <= 25){
           a25.push(destination);
        }
        if(parseInt(time) > 25 && parseInt(time) <= 35){
           a35.push(destination);
        }
        if(parseInt(time) > 35 && parseInt(time) <= 45){
           a45.push(destination);
        }
        if(parseInt(time) > 45 && parseInt(time) <= 60){
           a60.push(destination);
        }
      
      }else{
          
          x1 = x1 + (l1 * Math.cos(ang));
          y1 = y1 + (l1 * Math.sin(ang));      
          
          xin = x1 - ((m/7) * Math.cos(ang));
          yin = y1 - ((m/7) * Math.sin(ang));
          console.log("time is much lower" + x1 + " " + y1 +"     "+ xin + " " + yin);
          if(time <= 5){
             a5.push(new google.maps.LatLng(xin, yin));
          }
          if(time > 5 && time <= 10){
             a10.push(new google.maps.LatLng(xin, yin));
          }

          if(time > 10 && time <= 15){
             a15.push(new google.maps.LatLng(xin, yin));
          }

          if(time > 15 && time <= 25){
             a25.push(new google.maps.LatLng(xin, yin));
          }

          if(time > 25 && time <= 35){
             a35.push(new google.maps.LatLng(xin, yin));
          }

          if(time > 35 && time <= 45){
             a45.push(new google.maps.LatLng(xin, yin));
          }

          if(time > 45 && time <= 60){
             a60.push(new google.maps.LatLng(xin, yin));
          }
      }
    } 

    flag = false;    
    ang = ang + ang_inc;    
    initPts(origin, time);
    
  }

 }

}

function calculateDistancesDrive(){
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, callback);
}
 
function callback(response, status) {
  
  if (status != google.maps.DistanceMatrixStatus.OK) {
     alert('Error was: ' + status);
  } else {
      
      var results = response.rows[0].elements;
      if(results[0].duration){
        var t1 = results[0].duration.text;
        timeArray = t1.split(" ");
        }
        calculateEndPoints();    
  }

}
 
