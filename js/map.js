if ("geolocation" in navigator) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      setCurrentPosition,
      positionError,
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 0,
      }
    );

    function setCurrentPosition(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Creating a map object
      var map = new L.map("map").setView([lat, lng], 10);

      // Creating a Layer object
      var layer = new L.TileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      );

      // Adding layer to the map
      map.addLayer(layer);
    }

    function positionError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error("User denied the request for Geolocation.");
          break;

        case error.POSITION_UNAVAILABLE:
          console.error("Location information is unavailable.");
          break;

        case error.TIMEOUT:
          console.error("The request to get user location timed out.");
          break;

        case error.UNKNOWN_ERROR:
          console.error("An unknown error occurred.");
          break;
      }
    }
  }
} else {
  console.log("navigation not supported");
}
