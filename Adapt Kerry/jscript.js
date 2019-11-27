


//This code was taken from a youtube tutorial on responsive navigation bars
// www.youtube.com/watch?v=gXkqy0b4M5g

var navSlide = () => {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');


  //could not make the hr at the top and the logo headeing dissapear when clicking on the menu so came up with this
  var hr = document.querySelector('.hr');
  var header = document.querySelector('.logoHeading')

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    hr.classList.toggle('hr-dissapear');
    header.classList.toggle('logoHeadingDiss')


    burger.classList.toggle('toggle');
  });
}

navSlide();



//Go back button, taken from W3S
https://www.w3schools.com/jsref/met_his_back.asp



function goBack() {
  window.history.back();
}



// SCROLL BACK TO TOP BUTTON CODE TAKEN FROM W3SCHOPOLS
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// GEO Location

if (navigator.geolocation)
{
  navigator.geolocation.getCurrentPosition(showPosition);
}

else{
  document.getElementById("demo").innerHTML="Geolocation is not supported by your browser";
}

function showPosition()
{

  document.getElementById("demo").innerHTML="Latitute: " + position.coords.latitute + "<br>Longatitute: " + position.coords.longitude;
}






//GOOGLE MAP - https://www.w3schools.com/graphics/google_maps_intro.asp

function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(52.283807, -9.691582),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }