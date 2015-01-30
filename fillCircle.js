
function fillCircle_0_5(){
  
  for(var i = 0; i < a5.length-1; i++) {
    var xm = (origin.lat() + a5[i+1].lat()) / 2; 
    var ym = (origin.lng() + a5[i+1].lng()) / 2
   destination = new google.maps.LatLng(xm, ym);
    var circleOption = {
       strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#00FF00',
      fillOpacity: 0.8,
      map: map,
      center: destination,
      radius: 300
    }; 

    var cityCircle5 = new google.maps.Circle(circleOption);
    addWindow5(cityCircle5);
  }
}

function fillCircle_5_10(){

  for(var i = 0; i < a10.length-1; i++) {
    var xm = (a10[i].lat() + a10[i+1].lat()) / 2; 
    var ym = (a10[i].lng() + a10[i+1].lng()) / 2
    
   destination = new google.maps.LatLng(xm, ym);
    var circleOption = {
       strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#00FF00',
      fillOpacity: 0.5,
      map: map,
      center: destination,
      radius: 400
    }; 
    
    var cityCircle10 = new google.maps.Circle(circleOption);
    addWindow10(cityCircle10);

  }

    for(var i = 0; i < a10.length-1; i++) {
    var j = 0;
    if(j < a5.length){
      var xm = (a10[i].lat() + a5[j++].lat()) / 2; 
      var ym = (a10[i].lng() + a5[j++].lng()) / 2
      destination = new google.maps.LatLng(xm, ym); 
    }
   
    var circleOption = {
       strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#00FF00',
      fillOpacity: 0.5,
      map: map,
      center: destination,
      radius: 400
    }; 
    
    var cityCircle10 = new google.maps.Circle(circleOption);
    addWindow10(cityCircle10);

  }
}

function addWindow10(cityCircle10){
  var infowindow = new google.maps.InfoWindow({
      content: "5-10 mins",
      position: cityCircle10.center
  });
    google.maps.event.addListener(cityCircle10, 'mouseover', function(event) {
    infowindow.open(map);
  })
    google.maps.event.addListener(cityCircle10, 'mouseout', function(event) {
    infowindow.close();
  })
}


function fillCircle_10_15(){
  for(var i = 0; i < a15.length-1; i++) {
    var xm = (a15[i].lat() + a15[i+1].lat()) / 2; 
    var ym = (a15[i].lng() + a15[i+1].lng()) / 2
   destination = new google.maps.LatLng(xm, ym);
    var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#00FF00',
      fillOpacity: 0.3,
      map: map,
      center: destination,
      radius: 600
    }; 

    var cityCircle15 = new google.maps.Circle(circleOption);
    addWindow15(cityCircle15);
  }
}

function addWindow15(cityCircle15){
  var infowindow = new google.maps.InfoWindow({
      content: "10-15 mins",
      position: cityCircle15.center
  });
    google.maps.event.addListener(cityCircle15, 'mouseover', function(event) {
    infowindow.open(map);
  })
    google.maps.event.addListener(cityCircle15, 'mouseout', function(event) {
    infowindow.close();
  })
}
