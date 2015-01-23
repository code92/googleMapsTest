var geocoder;
var map;  
var origin;
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
function initialize()
{
    
    geocoder = new google.maps.Geocoder();
    geocoder = new google.maps.Geocoder();
    //change in file
    var pos = new google.maps.LatLng(34.04924594193164, -118.24104309082031);  
    map = new google.maps.Map(document.getElementById("map"),
    {
        zoom: 13,
        center: pos,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
        position: pos,
        draggable: true,
        map: map
    });
    origin = pos;
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
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
            var trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map); 
    //DistanceMatrixServices implementation 
            //from here starting new
            origin = results[0].geometry.location;
            //utillDistance();  
        
      } else {
        alert("Geocode was not successful for the following reason: " + status);       
      }
    });
  } 

function makeIsochrone(){
   time = document.getElementById("time").value;
  ang = 0;
  initPts(origin,time);
} 

function initPts(pts, time) {
  
  var ang_inc = 20;
  x = pts.lat();
  y = pts.lng();
  var l = 0.030; // this is equivalent to the time 5 - 7 mins
  var t;
  l = (parseInt(time)*0.004);
  
  if(ang < 360) {
    x1 = x + l *Math.cos(ang);
    y1 = y + l *Math.sin(ang);
    destination =  new google.maps.LatLng(x1, y1);
    calculateDistancesDrive();
    flag = true;
    //calculateEndPoints();      
    ang = ang + ang_inc; 
    //console.log(ang);
       
  }
  //addPolygon();
}

function calculateEndPoints(){
  var t;
  if(timeArray.length == 4){
      t = parseInt(timeArray[0])*60 + parseInt(timeArray[2]); 
  } else{
      t = parseInt(timeArray[0]);
  }  

  t = parseInt(timeArray[0]); 
  //console.log(t);
  if(t > parseInt(time)){
      
      l1 = ((t - parseInt(time))*0.004);
      // l1 = 0.001;
      x1 = x1 - (l1 * Math.cos(ang));
      y1 = y1 - (l1 * Math.sin(ang));
     // console.log(l1);
      // here we will check for time between x,y - x1,y1      
      destination =  new google.maps.LatLng(x1, y1);          
     // console.log("h");
      calculateDistancesDrive(); 
  }

  //console.log(destination.lat() +" " + destination.lng());
  
  if(flag == true){
    //array.push(destination);
    
    if(time <= 10)
      addCircle10();
    if(time > 10 && time <= 25){
      addCircle25();
    }
    if(time > 25 && time <= 40){
      addCircle40();
    }
    if(time > 40 && time <= 60){
      addCircle60();
    }
    flag = false;   
    initPts(origin, time);
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

function addCircle10(){

  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#00F000',
      fillOpacity: 0.8,
      map: map,
      center: destination,
      radius: 200
  };

 cityCircle = new google.maps.Circle(circleOption);
}


function addCircle25(){

  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#00F000',
      fillOpacity: 0.8,
      map: map,
      center: destination,
      radius: 400
  };

 cityCircle = new google.maps.Circle(circleOption);
}


function addCircle40(){

  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#00F000',
      fillOpacity: 0.8,
      map: map,
      center: destination,
      radius: 600
  };

 cityCircle = new google.maps.Circle(circleOption);
}


function addCircle60(){

  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#00F000',
      fillOpacity: 0.8,
      map: map,
      center: destination,
      radius: 800
  };

 cityCircle = new google.maps.Circle(circleOption);
}

function addPolygon(){

  poly = new google.maps.Polygon({
    paths: array,
    strokeColor: '#00FF00',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: '#00FF00',
    fillOpacity: 0.35
  });
  poly.setMap(map);
}