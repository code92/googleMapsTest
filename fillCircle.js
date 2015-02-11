var j = 0;
var mul;
//mul = m / 10;
function comp(i, j)
{
  if(i.an <= j.an) {
    return -1
  }
  if(i.an > j.an){
    return 1;
  }
}

function midFill_0_5(){
  var l = a5.length-1;
  for(var i = 0; i < l; i++) {
  var xi = a5[i].lat();
  var yi = a5[i].lng();
  var xj = a5[i+1].lat();
  var yj = a5[i+1].lng();
  console.log("a10 for loop");
  rec5(xi,yi, xj,yj,5);
  } 
}

function midFill_10_15(){
  var l = a15.length-1;
  for(var i = 0; i < l; i++) {
    
  var xi = a15[i].lat();
  var yi = a15[i].lng();
  var xj = a15[i+1].lat();
  var yj = a15[i+1].lng();
  console.log("a10 for loop");
  rec5(xi,yi, xj,yj,15);
  } 
}

function midFill_15_25(){
  var l = a25.length-1;
  for(var i = 0; i < l; i++) {
    
  var xi = a25[i].lat();
  var yi = a25[i].lng();
  var xj = a25[i+1].lat();
  var yj = a25[i+1].lng();
  console.log("a10 for loop");
  rec5(xi,yi, xj,yj,25);
  } 
}

function midFill_25_35(){
  var l = a35.length-1;
  for(var i = 0; i < l; i++) {
    
  var xi = a35[i].lat();
  var yi = a35[i].lng();
  var xj = a35[i+1].lat();
  var yj = a35[i+1].lng();
  console.log("a10 for loop");
  rec5(xi,yi, xj,yj,35);
  } 
}

function midFill_35_45(){
  var l = a45.length-1;
  console.log("length a30 " + l);
  for(var i = 0; i < l; i++) {
    
  var xi = a45[i].lat();
  var yi = a45[i].lng();
  var xj = a45[i+1].lat();
  var yj = a45[i+1].lng();
  console.log("a30 for loop");
  rec5(xi,yi, xj,yj,45);
  }  
}

function midFill_45_60(){
  var l = a60.length-1;
  console.log("length a60 " + l);
  for(var i = 0; i < l; i++) {
    
  var xi = a60[i].lat();
  var yi = a60[i].lng();
  var xj = a60[i+1].lat();
  var yj = a60[i+1].lng();
  console.log("a60 for loop");
  rec5(xi,yi, xj,yj,60);
  }
  console.log("call Stack Poly");
  addPolygon60(); 
}

function rec5(x1, y1, x2, y2, n){       
    
    var xm = (x1 + x2) / 2;
    var ym = (y1 + y2) / 2;
    var dl = Math.sqrt(Math.pow(x1 - xm, 2) + Math.pow(y1 - ym, 2));
    var dr = Math.sqrt(Math.pow(xm - x2, 2) + Math.pow(ym - y2, 2));
     
     if((m / 5) >= dr || (m / 5) >= dl){
      
      destination = new google.maps.LatLng(xm, ym);
      if(n == 5){
        addCircle5();
      }
      if(n == 10){
        addCircle10();
      }
      if(n == 15){
        addCircle15();
      }
      if(n == 25){
        addCircle25();
      }
      if(n == 35){
        addCircle35();
      }
      
      if(n == 45){
        addCircle45();
      }
      if(n == 60){
        addCircle60();
      }
      return;
    }
    if((m / 10) < dl){
      rec5(x1 , y1 , xm, ym,n); 
    }
    if((m / 10) < dr){
      rec5(xm, ym,  x2,  y2,n);
    }
}

function midFill_5_10(){

  var l = a10.length-1;
  for(var i = 0; i < l; i++) {
    
    var xi = a10[i].lat();
    var yi = a10[i].lng();
    var xj = a10[i+1].lat();
    var yj = a10[i+1].lng();
    rec5(xi,yi, xj,yj,10);
  }
}
  
  

function fillCircle_0_5(){
  
  var xi = x;
  var yi = y;
  var d;
  d = Math.sqrt(Math.pow((origin.lat() - a5[a5.length-1].lat()), 2) + Math.pow((origin.lng() - a5[a5.length-1].lng()),2) );
  var d1 = 0;
  while(d1 < d){
    xi = xi + (m/10) * Math.cos(ang);
    yi = yi + (m/10) * Math.sin(ang);
    d1 = d1 + (m/10);
    console.log("fill");
    destination = new google.maps.LatLng(xi, yi);
    //a5.push(destination);   
    var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#00FF00',
      fillOpacity: 0.8,
      map: map,
      center: destination,
      radius: r
  };
  var cityCircle5 = new google.maps.Circle(circleOption);
  addWindow5(cityCircle5);
  }
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
   })
 }

function fillCircle_5_10(){

  var xi = a5[a5.length-1].lat();
  var yi = a5[a5.length-1].lng();
  var d;
  d = Math.sqrt(Math.pow((a5[a5.length-1].lat() - a10[a10.length-1].lat()),2) + Math.pow((a5[a5.length-1].lng() - a10[a10.length-1].lng()),2) );
  var d1 = 0;
  while(d1 < d){
    xi = xi + (m/10) * Math.cos(ang);
    yi = yi + (m/10) * Math.sin(ang);
    d1 = d1 + (m/10);
    console.log("fill");
    destination = new google.maps.LatLng(xi, yi);
    //a10.push(destination);
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
    addWindow10(cityCircle10);
   // addCircle10();
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
   
  var xi = a10[a10.length-1].lat();
  var yi = a10[a10.length-1].lng();
  var d;
  d = Math.sqrt(Math.pow((a10[a10.length-1].lat() - a15[a15.length-1].lat()),2) + Math.pow((a10[a10.length-1].lng() - a15[a15.length-1].lng()),2) );
  var d1 = 0;
  while(d1 < d){
    xi = xi + (m/10) * Math.cos(ang);
    yi = yi + (m/10) * Math.sin(ang);
    d1 = d1 + (m/10);
    console.log("fill");
    destination = new google.maps.LatLng(xi, yi);
    a15.push(destination);
    var circleOption = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#00FF00',
      fillOpacity: 0.3,
      map: map,
      center: destination,
      radius: r
    }; 

    var cityCircle15 = new google.maps.Circle(circleOption);
    addWindow15(cityCircle15);
    //addCircle15();
}

}

function addWindow15(cityCircle15){
  var infowindow = new google.maps.InfoWindow({
      content: "10-15 mins",
      position: cityCircle15.center
  });
    google.maps.event.addListener(cityCircle15, 'mouseover', function(event) {
    infowindow.open(map);
  });
    google.maps.event.addListener(cityCircle15, 'mouseout', function(event) {
    infowindow.close();
  
  })
}

function fillCircle_15_20(){
   
  var xi = a15[a15.length-1].lat();
  var yi = a15[a15.length-1].lng();
  var d;
  d = Math.sqrt(Math.pow((a15[a15.length-1].lat() - a20[a20.length-1].lat()),2) + Math.pow((a15[a15.length-1].lng() - a20[a20.length-1].lng()),2) );
  var d1 = 0;
  while(d1 < d){
    xi = xi + (m/10) * Math.cos(ang);
    yi = yi + (m/10) * Math.sin(ang);
    d1 = d1 + (m/10);
    console.log("fill");
    destination = new google.maps.LatLng(xi, yi);
    //a20.push(destination);
    var circleOption = {
       strokeColor: '#FF0000',
      strokeOpacity: 0.1,

      strokeWeight: 0,
      fillColor: '#7CFC00',
      fillOpacity: 0.8,
      map: map,
      center: destination,
      radius: r
    }; 

    var cityCircle20 = new google.maps.Circle(circleOption);
   addWindow20(cityCircle20);
   //addCircle20();
}

}


function addWindow20(cityCircle20){
  var infowindow = new google.maps.InfoWindow({
      content: "15-20 mins",
      position: cityCircle20.center
  });
    google.maps.event.addListener(cityCircle20, 'mouseover', function(event) {
    infowindow.open(map);
  });
    google.maps.event.addListener(cityCircle20, 'mouseout', function(event) {
    infowindow.close();
  
  })
}


function fillCircle_20_25(){
   
  var xi = a20[a20.length-1].lat();
  var yi = a20[a20.length-1].lng();
  var d;
  d = Math.sqrt(Math.pow((a20[a20.length-1].lat() - a25[a25.length-1].lat()),2) + Math.pow((a20[a20.length-1].lng() - a25[a25.length-1].lng()),2) );
  var d1 = 0;
  while(d1 < d){
    xi = xi + (m/10) * Math.cos(ang);
    yi = yi + (m/10) * Math.sin(ang);
    d1 = d1 + m / 10;
    console.log("fill");
    destination = new google.maps.LatLng(xi, yi);
    //a25.push(destination);
    var circleOption = {
    
       strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#9ACD32',
      fillOpacity: 0.8,
      map: map,
      center: destination,
      radius: r
    }; 

    var cityCircle25 = new google.maps.Circle(circleOption);
    addWindow25(cityCircle25);
}
   //addCircle25();
}


function fillCircle_25_30(){
   
  var xi = a25[a25.length-1].lat();
  var yi = a25[a25.length-1].lng();
  var d;
  d = Math.sqrt(Math.pow((a25[a25.length-1].lat() - a30[a30.length-1].lat()),2) + Math.pow((a25[a25.length-1].lng() - a30[a30.length-1].lng()),2) );
  var d1 = 0;
  while(d1 < d){
    xi = xi + (m/10) * Math.cos(ang);
    yi = yi + (m/10) * Math.sin(ang);
    d1 = d1 + (m/10);
    console.log("fill");
    destination = new google.maps.LatLng(xi, yi);
   // a30.push(destination);
    var circleOption = {
       strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 0,
      fillColor: '#DAA520',
      fillOpacity: 0.8,
      map: map,
      center: destination,
      radius: r
    }; 

    var cityCircle30 = new google.maps.Circle(circleOption);
    addWindow30(cityCircle30);
  }

}

function fillCircle_30_35(){
   
  var xi = a30[a30.length-1].lat();
  var yi = a30[a30.length-1].lng();
  var d;
  d = Math.sqrt(Math.pow((a30[a30.length-1].lat() - a35[a35.length-1].lat()),2) + Math.pow((a30[a30.length-1].lng() - a35[a35.length-1].lng()),2) );
  var d1 = 0;
  while(d1 < d){
    xi = xi + (m/10) * Math.cos(ang);
    yi = yi + (m/10) * Math.sin(ang);
    d1 = d1 + (m/10);
    console.log("fill");
    destination = new google.maps.LatLng(xi, yi);
    //a35.push(destination);
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

    var cityCircle35 = new google.maps.Circle(circleOption);
    addWindow35(cityCircle35);
}

}

function fillCircle_35_40(){
   
  var xi = a35[a35.length-1].lat();
  var yi = a35[a35.length-1].lng();
  var d;
  d = Math.sqrt(Math.pow((a35[a35.length-1].lat() - a40[a40.length-1].lat()),2) + Math.pow((a35[a35.length-1].lng() - a40[a40.length-1].lng()),2) );
  var d1 = 0;
  while(d1 < d){
    xi = xi + (m/10) * Math.cos(ang);
    yi = yi + (m/10) * Math.sin(ang);
    d1 = d1 + (m/10);
    console.log("fill");
    destination = new google.maps.LatLng(xi, yi);
    //a40.push(destination);
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

}

function fillCircle_40_45(){
   
  var xi = a40[a40.length-1].lat();
  var yi = a40[a40.length-1].lng();
  var d;
  d = Math.sqrt(Math.pow((a40[a40.length-1].lat() - a45[a45.length-1].lat()),2) + Math.pow((a40[a40.length-1].lng() - a45[a45.length-1].lng()),2) );
  var d1 = 0;
  while(d1 < d){
    xi = xi + (m/10) * Math.cos(ang);
    yi = yi + (m/10) * Math.sin(ang);
    d1 = d1 + (m/10);
    console.log("fill");
    destination = new google.maps.LatLng(xi, yi);
    //a45.push(destination);
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

}

function fillCircle_45_50(){
   
  var xi = a45[a45.length-1].lat();
  var yi = a45[a45.length-1].lng();
  var d;
  d = Math.sqrt(Math.pow((a45[a45.length-1].lat() - a50[a50.length-1].lat()),2) + Math.pow((a45[a45.length-1].lng() - a50[a50.length-1].lng()),2) );
  //j = j + 1;
  console.log("J " +  j);
  var d1 = 0;
  while(d1 < d){
    xi = xi + (m/10) * Math.cos(ang);
    yi = yi + (m/10) * Math.sin(ang);
    d1 = d1 + (m/10);
    console.log("fill");
    destination = new google.maps.LatLng(xi, yi);
    //a50.push(destination);
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
    addWindow45(cityCircle50);
}

}

function fillCircle_50_55(){
   
  var xi = a50[a50.length-1].lat();
  var yi = a50[a50.length-1].lng();
  var d;
  d = Math.sqrt(Math.pow((a50[a50.length-1].lat() - a55[a55.length-1].lat()),2) + Math.pow((a50[a50.length-1].lng() - a55[a55.length-1].lng()),2) );
  

  var d1 = 0;
  while(d1 < d){
    xi = xi + (m/10) * Math.cos(ang);
    yi = yi + (m/10) * Math.sin(ang);
    d1 = d1 + (m/10);
    console.log("fill");
    destination = new google.maps.LatLng(xi, yi);
    //a55.push(destination);
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

}

function fillCircle_55_60(){
   
  var xi = a55[j].lat();
  var yi = a55[j].lng();
  var d;
  d = Math.sqrt(Math.pow((a55[j].lat() - a60[j].lat()),2) + Math.pow((a55[j].lng() - a50[j].lng()),2) );
 
  var d1 = 0;
  while(d1 < d){
    xi = xi + (m/10) * Math.cos(ang);
    yi = yi + (m/10) * Math.sin(ang);
    d1 = d1 + (m/10);
    console.log("fill");
    destination = new google.maps.LatLng(xi, yi);
    //a60.push(destination);
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

    var cityCircle60 = new google.maps.Circle(circleOption);
    addWindow60(cityCircle60);
}

}

function fillCircle5(){
  for(var i = 0; i < a5.lenght(); i++) {
    xm  = (a5[i].lat() + a5.lat[i+1]) / 2;
    ym = (a5[i].lng() + a5[i+1].lng())/2;
    destination = new google.maps.LatLng(xm, ym);

  }
}