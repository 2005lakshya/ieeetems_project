import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import RestaurantList from "./RestaurantList";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const MapPage = () => {
  const vitVellore = [12.96861, 79.15579];

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      overflow: "hidden",
      fontFamily: "sans-serif"
    }}>
      
      <div style={{
        width: "35%",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        overflowY: "auto",
        height: "100vh",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)"
      }}>
        <h1 style={{
          color: "#6C2BD9",
          fontSize: "1.8rem",
          marginBottom: "15px"
        }}>
          VIT FoodFinder
        </h1>

        <RestaurantList />
      </div>

      <div style={{ flex: 1 }}>
        <MapContainer
          center={vitVellore}
          zoom={16}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={vitVellore}>
            <Popup>VIT Vellore</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
