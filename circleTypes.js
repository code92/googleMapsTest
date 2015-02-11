var circle10 = [];
var d = [];var j = 0;
 var r = 125;r
function addCircle5(){

  a5.push(destination);
  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#66CC00',
      fillOpacity: 0.3,
      map: map,
      center: destination,
      radius: r/4
  };
  var cityCircle5 = new google.maps.Circle(circleOption);
  addWindow5(cityCircle5); 
}

function addWindow5(cityCircle5){
  var infowindow = new google.maps.InfoWindow({
      content: "0-5 mins",
      position: cityCircle5.center
  });
    google.maps.event.addListener(cityCircle5, 'mouseover', function(event) {
    infowindow.open(map);
  })
    google.maps.event.addListener(cityCircle5, 'mouseout', function(event) {
    infowindow.close();
  });
}

function addCircle10(){
  
  a10.push(destination);
  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#00FF00',
      fillOpacity: 0.5,
      map: map,
      center: destination,
      radius: r
  };

  var cityCircle10 = new google.maps.Circle(circleOption);
  //circle10.push(cityCircle10);
 // d = ["t","is","a","bin","cc","aa","asd","fdds","dfds","dfs"];
  addWindow10(cityCircle10);
  
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
  });
}
function addCircle15(){
    a15.push(destination);
    
  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#00FF00',
      fillOpacity: 0.2,
      map: map,
      center: destination,
      radius: r
  }; 

 var cityCircle15 = new google.maps.Circle(circleOption);
 addWindow15(cityCircle15);

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

function addCircle25(){
  a25.push(destination);
  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,

      strokeWeight: 0,
      fillColor: '#7CFC00',
      fillOpacity: 0.3,
      map: map,
      center: destination,
      radius: r
  };
  var cityCircle25 = new google.maps.Circle(circleOption);
  addWindow25(cityCircle25);
}

function addWindow25(cityCircle25){
  var infowindow = new google.maps.InfoWindow({
      content: "15-25 mins" ,
      position: cityCircle25.center
  });
    google.maps.event.addListener(cityCircle25, 'mouseover', function(event) {
    infowindow.open(map);
  })
    google.maps.event.addListener(cityCircle25, 'mouseout', function(event) {
    infowindow.close();
  })
}

function addCircle35(){
  a35.push(destination);
  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#9ACD32',
      fillOpacity: 0.2,
      map: map,
      center: destination,
      radius: r
  };
  var cityCircle35 = new google.maps.Circle(circleOption);
  addWindow35(cityCircle35);
}

function addWindow35(cityCircle35){
  var infowindow = new google.maps.InfoWindow({
      content: "25-35 mins" ,
      position: cityCircle35.center
  });
    google.maps.event.addListener(cityCircle35, 'mouseover', function(event) {
    infowindow.open(map);
  })
    google.maps.event.addListener(cityCircle35, 'mouseout', function(event) {
    infowindow.close();
  })
}

function addCircle45(){
  a45.push(destination);

  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#DAA520',
      fillOpacity: 0.3,
      map: map,
      center: destination,
      radius: r
  };
 var cityCircle45 = new google.maps.Circle(circleOption);
  addWindow45(cityCircle45);
}

function addWindow45(cityCircle45){
  var infowindow = new google.maps.InfoWindow({
      content: "35-45 mins",
      position: cityCircle45.center
  });
    google.maps.event.addListener(cityCircle45, 'mouseover', function(event) {
    infowindow.open(map);
  });
    google.maps.event.addListener(cityCircle45, 'mouseout', function(event) {
    infowindow.close();
  })
}

function addCircle60(){
  a60.push(destination);
   console.log("a60 " +a60[0].lat());
 
  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#ffA500',
      fillOpacity: 0.5,
      map: map,
      center: destination,
      radius: r
  };
  var cityCircle60 = new google.maps.Circle(circleOption);
  addWindow60(cityCircle60);
}

function addWindow60(cityCircle60){
  var infowindow = new google.maps.InfoWindow({
      content: "45-60 mins",
      position: cityCircle60.center
  });
    google.maps.event.addListener(cityCircle60, 'mouseover', function(event) {
    infowindow.open(map);
  });
    google.maps.event.addListener(cityCircle60, 'mouseout', function(event) {
    infowindow.close();
  })
}

/*
function addCircle40(){
  a40.push(destination);

  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#ffA500',
      fillOpacity: 0.8,
      map: map,
      center: destination,
      radius: r
  };

 var cityCircle40 = new google.maps.Circle(circleOption);
  addWindow40(cityCircle40);
}

function addWindow40(cityCircle40){
  var infowindow = new google.maps.InfoWindow({
      content: "35-40 mins",
      position: cityCircle40.center
  });
    google.maps.event.addListener(cityCircle40, 'mouseover', function(event) {
    infowindow.open(map);
  })
    google.maps.event.addListener(cityCircle40, 'mouseout', function(event) {
    infowindow.close();
  })
}


function addCircle45(){
 a45.push(destination);

  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#ff8c00',
      fillOpacity: 0.8,
      map: map,
      center: destination,
      radius: r
  };
  var cityCircle45 = new google.maps.Circle(circleOption);
  addWindow45(cityCircle45);
}

function addWindow45(cityCircle45){
  var infowindow = new google.maps.InfoWindow({
      content: "40-45 mins",
      position: cityCircle45.center
  });function addPolygon20(){

  poly = new google.maps.Polygon({
    path: a20,
    strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#7CFC00',
      fillOpacity: 0.3,
  });
  poly.setMap(map);
// addPolygon5();
}

    google.maps.event.addListener(cityCircle45, 'mouseover', function(event) {
    infowindow.open(map);
  })
    google.maps.event.addListener(cityCircle45, 'mouseout', function(event) {
    infowindow.close();
  })
}


function addCircle50(){
  a50.push(destination);

  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#ff4500',
      fillOpacity: 0.6,
      map: map,
      center: destination,
      radius: r
  };
  var cityCircle50 = new google.maps.Circle(circleOption);
  addWindow50(cityCircle50);
}

function addWindow50(cityCircle50){
  var infowindow = new google.maps.InfoWindow({
      content: "45-50 mins",
      position: cityCircle50.center
  });
    google.maps.event.addListener(cityCircle50, 'mouseover', function(event) {
    infowindow.open(map);
  })
    google.maps.event.addListener(cityCircle50, 'mouseout', function(event) {
    infowindow.close();
  })
}

function addCircle55(){
  
  a55.push(destination);
  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#ff0000',
      fillOpacity: 0.6,
      map: map,
      center: destination,
      radius: r
  };
  var cityCircle55 = new google.maps.Circle(circleOption);
  addWindow55(cityCircle55);
}

function addWindow55(cityCircle55){
  var infowindow = new google.maps.InfoWindow({
      content: "50-55 mins",
      position: cityCircle55.center
  });
    google.maps.event.addListener(cityCircle55, 'mouseover', function(event) {
    infowindow.open(map);
  })
    google.maps.event.addListener(cityCircle55, 'mouseout', function(event) {
    infowindow.close();
  })
}


function addCircle60(){
  a60.push(destination);

  var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#ff0000',
      fillOpacity: 0.8,
      map: map,
      center: destination,
      radius: r
  };

 var cityCircle60 = new google.maps.Circle(circleOption);
 addWindow60(cityCircle60);
}

function addWindow60(cityCircle60){
  var infowindow = new google.maps.InfoWindow({
      content: "55-60 mins",
      position: cityCircle60.center
  });
    google.maps.event.addListener(cityCircle60, 'mouseover', function(event) {
    infowindow.open(map);
  })
    google.maps.event.addListener(cityCircle60, 'mouseout', function(event) {
    infowindow.close();
  })
}
 */