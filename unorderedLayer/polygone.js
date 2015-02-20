function addPolygon5(){

  poly5 = new google.maps.Polygon({
    path: a5,
    strokeColor: '#7CFC00',
      strokeOpacity: 0.1,
      strokeWeight: 0,
     fillColor: '#7CFC00',
      fillOpacity: 0.9,
  });
  poly5.setMap(map);
  //utillDistance5(poly);
  addPolyWind5(poly5);
  stack.push(poly5);   
  
}

function addPolyWind5(poly5){
  var infowindow;
  console.log("inside polyWind");
    google.maps.event.addListener(poly5, 'mouseover', function(event) {
     infowindow = new google.maps.InfoWindow({
      content: "0-5 mins",
      position: event.latLng
      });  
     console.log("open!!");
    infowindow.open(map);
  });
    google.maps.event.addListener(poly5, 'mouseout', function(event) {
    console.log("close!!");
    infowindow.close();
  });
}

function addPolygon10(){

  poly10 = new google.maps.Polygon({
    path: a10,
    strokeColor: '#80FF00',
    strokeOpacity: 0.1,
    strokeWeight: 5, 
    fillColor: '#80FF00',
    fillOpacity: 0.7
  });
  poly10.setMap(map);
  //utillDistance10();
  addPolyWind10(poly10);
  

}

function addPolyWind10(poly10){
    var infowindow; 
    google.maps.event.addListener(poly10, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "0-10 mins",
    position: event.latLng
  });
    infowindow.open(map);
  });
    google.maps.event.addListener(poly10, 'mouseout', function(event) {
    infowindow.close();
  });
}
function addPolygon5_10(){

  poly5_10 = new google.maps.Polygon({
    path: a5_10,
    strokeColor: '#80FF00',
    strokeOpacity: 0.1,
    strokeWeight: 5, 
    fillColor: '#80FF00',
    fillOpacity: 0.7
  });
  poly5_10.setMap(map);
  //utillDistance10();
  addPolyWind5_10(poly5_10);
  

}

function addPolyWind5_10(poly5_10){
    var infowindow; 
    google.maps.event.addListener(poly5_10, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "5-10 mins",
    position: event.latLng
  });
    infowindow.open(map);
  });
    google.maps.event.addListener(poly5_10, 'mouseout', function(event) {
    infowindow.close();
  });
}


function addPolygon10_15(){

  poly10_15 = new google.maps.Polygon({
    path: a10_15,
    strokeColor: '#99FF33',
      strokeOpacity: 0.2,
      strokeWeight: 1,
      fillColor: '#99FF33',
      fillOpacity: 0.6,
  });
  poly10_15.setMap(map);
  //utillDistance15();
  addPolyWind10_15(poly10_15);
}

function addPolyWind10_15(poly10_15){
    var infowindow; 
    google.maps.event.addListener(poly10_15, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "10-15 mins",
    position: event.latLng
  });
    infowindow.open(map);
  })
    google.maps.event.addListener(poly10_15, 'mouseout', function(event) {
    infowindow.close();
  });
}
function addPolygon15_25(){

  poly15_25 = new google.maps.Polygon({
    path: a15_25,
    strokeColor: '#B2FF66',
      strokeOpacity: 0.5,
      strokeWeight: 2,
      fillColor: '#B2FF66',
      fillOpacity: 0.6,
  });
  poly15_25.setMap(map);
  //utillDistance15();
  addPolyWind15_25(poly15_25);
}

function addPolyWind15_25(poly15_25){
    var infowindow; 
    google.maps.event.addListener(poly15_25, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "15-25 mins",
    position: event.latLng
  });
    infowindow.open(map);
  })
    google.maps.event.addListener(poly15_25, 'mouseout', function(event) {
    infowindow.close();
  });
}

function addPolygon25(){

  poly25 = new google.maps.Polygon({
    path: a10_25,
    strokeColor: '#B2FF66',
      strokeOpacity: 0.5,
      strokeWeight: 2,
      fillColor: '#B2FF66',
      fillOpacity: 0.6,
  });
  poly25.setMap(map);
  console.log("utill20");
  //utillDistance25();
  addPolyWind25(poly25);
}

function addPolyWind25(poly25){
    var infowindow; 
    google.maps.event.addListener(poly25, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "10-25 mins",
    position: event.latLng
  });
    infowindow.open(map);
  });
    google.maps.event.addListener(poly25, 'mouseout', function(event) {
    infowindow.close();
  });
}

function addPolygon35(){

  poly35 = new google.maps.Polygon({
    path: a25_35,
    strokeColor: '#CCFF99',
      strokeOpacity: 0.3,
      strokeWeight: 1,
      fillColor: '#CCFF99',
      fillOpacity: 0.6,
  });
  poly35.setMap(map);
  console.log("poly35utillcall");
 // utillDistance35();
  addPolyWind35(poly35);

}

function addPolyWind35(poly35){
    var infowindow; 
    google.maps.event.addListener(poly35, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "25-35 mins",
    position: event.latLng
  });
    infowindow.open(map);
  });
    google.maps.event.addListener(poly35, 'mouseout', function(event) {
    infowindow.close();
  });
}


function addPolygon45(){

  poly45 = new google.maps.Polygon({
    path: a25_45,
    strokeColor: '#99FFFF',
      strokeOpacity: 0.6,
      strokeWeight: 0,
      fillColor: '#99FFFF',
      fillOpacity: 0.8,
  });
  poly45.setMap(map);
  console.log("poly35utillcall");
 // utillDistance45();
  addPolyWind45(poly45); 
}

function addPolyWind45(poly45){
    var infowindow; 
    google.maps.event.addListener(poly45, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "25-45 mins",
    position: event.latLng
  });
    infowindow.open(map);
  });
    google.maps.event.addListener(poly45, 'mouseout', function(event) {
    infowindow.close();
  });
}

function addPolygon35_45(){

  poly35_45 = new google.maps.Polygon({
    path: a35_45,
    strokeColor: '#99FFFF',
      strokeOpacity: 0.6,
      strokeWeight: 0,
      fillColor: '#99FFFF',
      fillOpacity: 0.8,
  });
  poly35_45.setMap(map);
  console.log("poly35utillcall");
 // utillDistance45();
  addPolyWind35_45(poly35_45); 
}

function addPolyWind35_45(poly35_45){
    var infowindow; 
    google.maps.event.addListener(poly35_45, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "35-45 mins",
    position: event.latLng
  });
    infowindow.open(map);
  });
    google.maps.event.addListener(poly35_45, 'mouseout', function(event) {
    infowindow.close();
  });
}

 
function addPolygon60(){

   poly60 = new google.maps.Polygon({
    path: a45_60,
    strokeColor: '#99FFFF',
      strokeOpacity: 0.3,
      strokeWeight: 5,
      fillColor: '#99FFFF',
      fillOpacity: 0.4,
  });
  poly60.setMap(map);
  console.log("poly35utillcall");
  utillDistance60();
  addPolyWind60(poly60);
}

function addPolyWind60(poly60){
    var infowindow; 
    google.maps.event.addListener(poly60, 'mouseover', function(event) {
    infowindow = new google.maps.InfoWindow({
    content: "45-60 mins",
    position: event.latLng
    
  });
    console.log("open60");
    console.log(event.latLng.lat());
    infowindow.open(map);
  });
    google.maps.event.addListener(poly60, 'mouseout', function(event) {
    console.log("close60");
    infowindow.close();
  });
} 