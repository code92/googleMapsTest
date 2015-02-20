var c  = 0;
var inc = 0.5;
 
function calculateTimePerUnit(){

  if(c == 0){
    x1 = origin.lat() + inc;
    y1 = origin.lng();
  }else if(c == 1){
    x1 = origin.lat();
    y1 = origin.lng() + inc;
  }else if(c == 2){
    x1 = origin.lat() - inc;
    y1 = origin.lng();
  }else if(c == 3){
    x1 = origin.lat();
    y1 = origin.lng() - inc;
  } 
  destination =  new google.maps.LatLng(x1, y1);
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
  {
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
  }, call);
}
m = 0;
function call(response, status) {
  var a1;
  if (status != google.maps.DistanceMatrixStatus.OK) {
     alert('Error was: ' + status);
  } else {
      var results = response.rows[0].elements;
      var t1 = results[0].duration.text;
      var a = t1.split(" ");
      if(a.length == 4){
        a1 = parseInt(a[0])*60 + parseInt(a[2]);
      } else {
        a1 = parseInt(a[0]);
      }
      
      m = m + inc / a1;     
      
      if(c < 4){
        c++;
        console.log(m);
        calculateTimePerUnit();
      }
   }

}
