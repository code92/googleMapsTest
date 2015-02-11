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
var f = true;
var ang1 = 0;
var infowindow;

function initialize()
{

    geocoder = new google.maps.Geocoder();
    geocoder = new google.maps.Geocoder();
  
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
           // utillDistance();
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

function utillDistance45(){

   var addr; //geocoder.geocode({'address':document.getElementById("address").value},function(results,status){origin = results[0].geometry.location;});
    console.log("utill");
    google.maps.event.addListener(map,'click',function(event) {destination = event.latLng;
     calculateDistancesDriveForInfo();
    });
}

function utillDistance35(){

   var addr; //geocoder.geocode({'address':document.getElementById("address").value},function(results,status){origin = results[0].geometry.location;});
    console.log("utill");
    google.maps.event.addListener(map,'click',function(event) {destination = event.latLng;
     calculateDistancesDriveForInfo();
    });
}

function utillDistance25(){

   var addr; //geocoder.geocode({'address':document.getElementById("address").value},function(results,status){origin = results[0].geometry.location;});
    console.log("utill");
    google.maps.event.addListener(map,'click',function(event) {destination = event.latLng;
     calculateDistancesDriveForInfo();
    });
}

function utillDistance15(){

   var addr; //geocoder.geocode({'address':document.getElementById("address").value},function(results,status){origin = results[0].geometry.location;});
    console.log("utill");
    google.maps.event.addListener(map,'click',function(event) {destination = event.latLng;
     console.log("insideevent15");
     calculateDistancesDriveForInfo();
    });
}

function utillDistance10(){

   var addr; //geocoder.geocode({'address':document.getElementById("address").value},function(results,status){origin = results[0].geometry.location;});
    console.log("utill");
    google.maps.event.addListener(map,'click',function(event) {destination = event.latLng;
     console.log("insideevent10");
     calculateDistancesDriveForInfo();
    });
}

function utillDistance5(){

   var addr; //geocoder.geocode({'address':document.getElementById("address").value},function(results,status){origin = results[0].geometry.location;});
    console.log("utill5");
    google.maps.event.addListener(map,'click',function(event) {destination = event.latLng;
     console.log("inside event5");
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
    //deleteOverlays();
    //for (var i = 0; i < origins.length; i++) {
      var results = response.rows[0].elements;
      //addMarker(origins[i], false); 
      // for (var j = 0; j < results.length; j++) {
        //addMarker(destinations[j], true);
        
        outputDiv.innerHTML += origins[0] + '<br>'+' TO '+ '<br>' + destinations[0]
        + ':' + results[0].distance.text + ' in '
            + results[0].duration.text + '<br>';
        popup(origins[0], destinations[0], results[0].distance.text, results[0].duration.text);
      //}
    //}
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

var time_inc = 5;
time = 0;
var f = false;
var i = 0.1;
var timeMulti = 1;
var ang_inc = 1;
ang = 0;
var fl = true; 
var xin ;
var yin;

function makeIsochrone(){

  var time1 = document.getElementById("time").value;    
  if(time <= parseInt(time1)){ 
  
    flag = true;
    time = time + time_inc;
    ang = 0;
    timeMulti = 1;
    if(parseInt(time) <= 5){
    ang_inc = 0.5;
    }else if(parseInt(time) <= 10){
      ang_inc = 0.5;
    }else if(parseInt(time) <= 15){
      ang_inc = 0.5;
      time_inc = 10;
    }else if(parseInt(time) <= 25){
      ang_inc = 0.4;
      //timeMulti = 1.3;
    }else if(parseInt(time) <= 35){
      //timeMulti = 20/16;
    }else if(parseInt(time) <= 45){
      time_inc = 15;
      //timeMulti = 1.3; 
    }else if(parseInt(time) <= 60){
      //timeMulti = 2;
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

    l = (parseInt(time) * m / 4);
    
    xin =  x + l*Math.cos((0));
    yin =  y + l* Math.sin((0));  
    
    x1 = x + (Math.cos(ang )*(xin - x) - Math.sin(ang )*(yin-y));
    y1 = y + (Math.sin(ang )*(xin - x) + Math.cos(ang )*(yin-y)); 

    console.log("xin yin " + xin + yin + "x1 y1 " + x1 + y1);
    destination =  new google.maps.LatLng(x1, y1);
    flag = true;
    
    if(time == 10 || time == 15 || time == 20 || time == 25|| time == 30|| time == 35 || time == 45 ||time == 40 || time == 50 ||time == 55){
       setTimeout(function(){calculateDistancesDrive();},  timeMulti*1000);
    }else{
      calculateDistancesDrive();
    }
  
  }
  
  if(ang >= 6){
  /*
  if(time == 5){  
    addPolygon5();
  }
  if(time == 10){
    addPolygon10();
  }
  if(time == 15){
    addPolygon15();
  }
  if(time == 25){
    addPolygon25();
  }
  if(time == 35){
    addPolygon35();
  }
  if(time == 45){
    addPolygon45();
  }
  if(time == 60){
    addPolygon60();
  }*/
  if(time == 60){
    
     /*midFill_0_5(); 
     midFill_5_10();
     midFill_10_15();
     midFill_15_25();
     midFill_25_35();
     midFill_35_45();
     midFill_45_60();*/
     addPolygon60();
     addPolygon45();
     addPolygon35();
     addPolygon25();
     addPolygon15();
     addPolygon10();
     addPolygon5();
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
  
  if(t > parseInt(time) ){
     //min = Math.pow(Math.pow(origin.lat() - x1, 2) + Math.pow(origin.lng() - y1, 2));
     console.log("greater  " + t + " " + time);
     l1= (t - parseInt(time))*(m / 10);
     console.log("m/4 " + m / 4);
     console.log(l1);
     console.log(t - time);
     x1 = x1 - (l1 * Math.cos(ang));
     y1 = y1 - (l1 * Math.sin(ang));      
       
      // here we will check for time between x,y - x1,y1      
      destination =  new google.maps.LatLng(x1, y1);
      //if(time == 60){
       // setTimeout(function(){calculateDistancesDrive();},  100);
     // }else{
        calculateDistancesDrive();
     // }
      
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
        if(parseInt(time)> 15 && parseInt(time) <= 25){
          addCircle25();
        }
        if(parseInt(time) > 25 && parseInt(time) <= 35){
          addCircle35();
        }
        if(parseInt(time) > 35 && parseInt(time) <= 45){
          addCircle45();
        }
        if(parseInt(time) > 45 && parseInt(time) <= 60){
          addCircle60();
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
 
function addPolygon10(){

  poly = new google.maps.Polygon({
    path: a10,
    strokeColor: '#80FF00',
    strokeOpacity: 0.4,
    strokeWeight: 5, 
    fillColor: '#80FF00',
    fillOpacity: 0.2
  });
  poly.setMap(map);
  //utillDistance10();
  addPolyWind10(poly);
}

function addPolyWind10(poly){
    var infowindow; 
    google.maps.event.addListener(poly, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "5-10 mins",
    position: event.latLng
  });
    infowindow.open(map);
  });
    google.maps.event.addListener(poly, 'mouseout', function(event) {
    infowindow.close();
  });
}

function addPolygon5(){

  var poly = new google.maps.Polygon({
    path: a5,
    strokeColor: '#66CC00',
      strokeOpacity: 0.5,
      strokeWeight: 0,
     fillColor: '#66CC00',
      fillOpacity: 0.2,
  });
  poly.setMap(map);
  //utillDistance5(poly);
  addPolyWind5(poly);
  
  
}

function addPolyWind5(poly){
  var infowindow;
  console.log("inside polyWind");
    google.maps.event.addListener(poly, 'mouseover', function(event) {
     infowindow = new google.maps.InfoWindow({
      content: "0-5 mins",
      position: event.latLng
      });  
     console.log("open!!");
    infowindow.open(map);
  });
    google.maps.event.addListener(poly, 'mouseout', function(event) {
    console.log("close!!");
    infowindow.close();
  });
}

function addPolygon15(){

 var poly = new google.maps.Polygon({
    path: a15,
    strokeColor: '#99FF33',
      strokeOpacity: 0.4,
      strokeWeight: 5,
      fillColor: '#99FF33',
      fillOpacity: 0.4,
  });
  poly.setMap(map);
  //utillDistance15();
  addPolyWind15(poly);
}

function addPolyWind15(poly){
    var infowindow; 
    google.maps.event.addListener(poly, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "10-15 mins",
    position: event.latLng
  });
    infowindow.open(map);
  })
    google.maps.event.addListener(poly, 'mouseout', function(event) {
    infowindow.close();
  });
}

function addPolygon25(){

  var poly = new google.maps.Polygon({
    path: a25,
    strokeColor: '#B2FF66',
      strokeOpacity: 0.5,
      strokeWeight: 5,
      fillColor: '#B2FF66',
      fillOpacity: 0.5,
  });
  poly.setMap(map);
  console.log("utill20");
  //utillDistance25();
  addPolyWind25(poly);
}

function addPolyWind25(poly){
    var infowindow; 
    google.maps.event.addListener(poly, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "15-25 mins",
    position: event.latLng
  });
    infowindow.open(map);
  });
    google.maps.event.addListener(poly, 'mouseout', function(event) {
    infowindow.close();
  });
}

function addPolygon35(){

  var poly = new google.maps.Polygon({
    path: a35,
    strokeColor: '#CCFF99',
      strokeOpacity: 0.3,
      strokeWeight: 5,
      fillColor: '#CCFF99',
      fillOpacity: 0.6,
  });
  poly.setMap(map);
  console.log("poly35utillcall");
 // utillDistance35();
  addPolyWind35(poly);

}

function addPolyWind35(poly){
    var infowindow; 
    google.maps.event.addListener(poly, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "25-35 mins",
    position: event.latLng
  });
    infowindow.open(map);
  });
    google.maps.event.addListener(poly, 'mouseout', function(event) {
    infowindow.close();
  });
}


function addPolygon45(){

  var poly = new google.maps.Polygon({
    path: a45,
    strokeColor: '#33FFFF',
      strokeOpacity: 0.4,
      strokeWeight: 5,
      fillColor: '#33FFFF',
      fillOpacity: 0.4,
  });
  poly.setMap(map);
  console.log("poly35utillcall");
 // utillDistance45();
  addPolyWind45(poly); 
}

function addPolyWind45(poly){
    var infowindow; 
    google.maps.event.addListener(poly, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "35-45 mins",
    position: event.latLng
  });
    infowindow.open(map);
  });
    google.maps.event.addListener(poly, 'mouseout', function(event) {
    infowindow.close();
  });
}
 
function addPolygon60(){

  var poly = new google.maps.Polygon({
    path: a60,
    strokeColor: '#99FFFF',
      strokeOpacity: 0.3,
      strokeWeight: 5,
      fillColor: '#99FFFF',
      fillOpacity: 0.4,
  });
  poly.setMap(map);
  console.log("poly35utillcall");
  utillDistance60();
  addPolyWind60(poly);
}

function addPolyWind60(poly){
    var infowindow; 
    google.maps.event.addListener(poly, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "45-60 mins",
    position: event.latLng
    
  });
    console.log("open60");
    console.log(event.latLng.lat());
    infowindow.open(map);
  });
    google.maps.event.addListener(poly, 'mouseout', function(event) {
    console.log("close60");
    infowindow.close();
  });
}