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
var origin = new google.maps.LatLng(34.04924594193164, -118.24104309082031);  
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
var m;
var fl = false;
function initialize()
{

    geocoder = new google.maps.Geocoder();
    geocoder = new google.maps.Geocoder();
    
    //var pos = new google.maps.LatLng(34.04924594193164, -118.24104309082031);  
    map = new google.maps.Map(document.getElementById("map"),
    {
        zoom: 14,
        center: origin,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
        position: origin,
        draggable: true,
        map: map
    });
    //origin = pos;
  //  var trafficLayer = new google.maps.TrafficLayer();
    //trafficLayer.setMap(map);
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
        
        
      } else {
        alert("Geocode was not successful for the following reason: " + status);       
      }
    });

  } 

time = 0;
var f = false;
var i = 0.1;
var timeMulti = 1;
var ang_inc = 20;
function makeIsochrone(){
  var time1 = document.getElementById("time").value;
  //initialize();
  //time = 0;
  //console.log(time);

  if(time < parseInt(time1)){
   ang = 0;
   flag = true;
   time = time + 5;
    
    if(parseInt(time) <= 5){
     // ang_inc = 20;
      timeMulti = 1;
    }
    else if(parseInt(time) <= 10){
      //ang_inc = 20;
      fillCircle_0_5();
      timeMulti = 1;
    }else if(parseInt(time) <= 15){
      //ang_inc = 16;
      fillCircle_5_10();
      timeMulti = 20/16;
    }else if(parseInt(time) <= 20){
      fillCircle_10_15();
      console.log("20");
      //ang_inc = 20;
      timeMulti = 20/16;
    }else {
      //ang_inc = 8;
      timeMulti = 20 / 8;
    }

   console.log(time);
   //setTimeout(function(){initPts(origin,time)}, 2000);
   initPts(origin, time); 
  
  }
} 

  
function initPts(pts, time) {
  
  x = pts.lat();
  y = pts.lng();
  var l;
  var t;
  
  l = (parseInt(time) * m / 4);
  
  if(ang <= 360) {
    
    ang = ang + ang_inc;
    x1 = x + l * Math.cos(ang);
    y1 = y + l * Math.sin(ang);
    destination =  new google.maps.LatLng(x1, y1);
    flag = true;
    setTimeout(function(){calculateDistancesDrive();}, timeMulti* 300);
     
  }
  
   if(ang == 360){
    //fillCircle();
    console.log("h");
    makeIsochrone();
   
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
function calculateEndPoints(){
  var t;
  if(timeArray.length == 4){
      t = parseInt(timeArray[0])*60 + parseInt(timeArray[2]); 
  } else{
      t = parseInt(timeArray[0]);
  }  

  //t = parseInt(timeArray[0]); 
   
  if(t > parseInt(time)){

     console.log("greater  " + t + " " + time);
     // if(t - parseInt( time) > 2 ){
      //l1 = ((t - parseInt(time)) * (m / 4) ) / 3;
      l1= m / 4;
      x1 = x1 - (l1 * Math.cos(ang));
      y1 = y1 - (l1 * Math.sin(ang));      
       
      // here we will check for time between x,y - x1,y1      
      destination =  new google.maps.LatLng(x1, y1);
                
        setTimeout(function(){calculateDistancesDrive()}, timeMulti * 300);
      //calculateDistancesDrive();
      //}
  } 
  if(t <= parseInt(time)  ){
  console.log("lower  " + t + " " + time);
  
  if(flag == true){
    if((parseInt(time) - t) <= 2) {
      console.log("draw");
    if(parseInt(time) <= 5){
      addCircle5();
    }

    if(parseInt(time) > 5 && parseInt(time) <= 10){
      addCircle10();
    }
    if(parseInt(time) > 10 && parseInt(time) <= 15){
  
      addCircle15();
      
    }
    if(parseInt(time)> 15 && parseInt(time) <= 20){
      addCircle20();
      //fillCircle();
    }
    if(parseInt(time) > 20 && parseInt(time) <= 25){
      addCircle25();
      //fillCircle();
    }
    if(parseInt(time) > 25 && parseInt(time) <= 30){
      addCircle30();
      //fillCircle();
    }
    if(parseInt(time) > 30 && parseInt(time) <= 40){
      addCircle40();
      //fillCircle();
    }
    if(parseInt(time) > 40 && parseInt(time) <= 45){
      addCircle45();
      //fillCircle();
    }
    if(parseInt(time)> 45 && parseInt(time) <= 50){
      addCircle50();
      //fillCircle();
    }
    if(parseInt(time) > 50 && parseInt(time) <= 55){
      addCircle55();
      //fillCircle();
    }
    if(parseInt(time) > 55 && parseInt(time) <= 60){
      addCircle60();
      //fillCircle();
    }
}
    flag = false;   
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
      var t1 = results[0].duration.text;
      timeArray = t1.split(" ");
      calculateEndPoints();    
  }

}


function fillCircle(){
  var d = Math.sqrt((x1 - origin.lat())*(x1 - origin.lat()) + (y1 - origin.lng())*(y1 - origin.lng()));
  while(d >= 0){
    x1 = x1 - (l1 * Math.cos(ang));
    y1 = y1 - (l1 * Math.sin(ang));
    d = d - l1;
    destination = new google.maps.LatLng(x1, y1);
    addCircle10();
  }
}

function minRadius(a5) {
  var d = Math.sqrt((a5[0].lat() - origin.lat())*(a5[0].lat() - origin.lat()) + (a5[0].lng() - origin.lng())*(a5[0].lng() - origin.lng()));  
  var min  = d;
  for(var i = 1; i < a5.length; i++){
    if(min > Math.sqrt((a5[i].lat() - origin.lat())*(a5[i].lat() - origin.lat()) + (a5[i].lng() - origin.lng())*(a5[i].lng() - origin.lng()))  ){
      min = d;
    }
  }
  return min;
}
/*
function fillCircle(){
  if(time == 5){
    var r = minRadius(a5);
    for(var i = 0; i < 360; i = i + 15) { 
      destination = new google.maps.LatLng(x1, y1);
      addCircle5();
    }
  }
}*/

function addPolygon(){

  poly = new google.maps.Polyline({
    path: a5,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 1, 
  });
  poly.setMap(map);
}