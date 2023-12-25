import React from 'react'

const GeoLocation = () => {
navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  // Show a map centered at latitude / longitude.
  alert(latitude+','+longitude);
  

});
 
}


export default GeoLocation