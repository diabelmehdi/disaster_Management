import React, { useContext } from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import { ThemeContext } from "../LoginRescue/AppRescue";
import "./Style.css";

const uluru = { lat: 52.237049, lng: 21.017532 };
let adress = "Prasowa 29 Warsaw";

export const MapWithMarker = React.memo(function Map() {
  const { victims, setDataVictims } = useContext(ThemeContext);
  const { ref, map, google } = useGoogleMaps(
    "AIzaSyBkz_rtiTK4wHl18HUy_BnjmKnMEn4FxRw",
    {
      zoom: 4,
      center: uluru,
    }
  );

  // console.log(victims[0].city)

  const geocoder = new window.google.maps.Geocoder();

  if (map) {
    geocoder.geocode({ address: adress }, (results, status) => {
      if (status === "OK") {
        new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
      } else {
        alert("Something is wrong" + status);
      }
    });
  }

  return <div ref={ref} class="map-map" />;
});
