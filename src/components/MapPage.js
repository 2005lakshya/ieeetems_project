import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import RestaurantList from "./RestaurantList";
import RestaurantDetail from "./RestaurantDetail";
import restaurants from "../data/restaurants";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

// Create custom icons for normal and hovered states
const normalIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const hoveredIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [35, 57],
  iconAnchor: [17, 57],
  popupAnchor: [1, -48],
  shadowSize: [57, 57]
});

// Real coordinates for restaurants in Vellore (Updated with accurate Google Maps locations)
const restaurantCoordinates = {
  "The Vellore Kitchen": [12.9315089, 79.1362734], // Actual location from Google Maps
  "Hundreds Heritage": [12.9498823, 79.1374049], // Gandhi Nagar, Vellore - Verified
  "Apna Dhaba": [12.9708, 79.1551], // Near VIT Campus
  "Divine Cafe": [12.9701, 79.1556], // Close to VIT Main Gate
  "Treat Restaurant": [12.9193, 79.1341], // Officers Line, Vellore - Verified
  "7th Heaven Café": [12.9699, 79.1564], // Very close to VIT
  "Tara Maa Mess": [12.9689, 79.1572], // Near VIT hostels
  "Salt and Pepper": [12.9243, 79.1366], // Gandhi Road, Vellore
  "Arabian Majlis": [12.9201, 79.1323], // Fort Area, Vellore
  "Karthik Mess": [12.9705, 79.1558], // Near VIT campus
  "Hangout Cafe": [12.9712, 79.1549], // VIT area
  "NH 46 Cafe": [12.9685, 79.1541], // NH 46 near VIT
  "Atti Cafe": [12.9718, 79.1553], // Very close to VIT main gate
  "Zan Cafe": [12.9703, 79.1547], // Near VIT campus
  "Hive Food Street": [12.9666, 79.1617], // Food street near VIT
  "Café Coffee Day (CCD)": [12.9693, 79.1576], // Near VIT main gate - Verified
  "Frozen Bottle": [12.9378, 79.1653], // Arcot Road, Vellore - Verified
  "Burger King": [12.9378655, 79.1653495], // Arcot Road, Vellore - Google Maps verified
  "Pizza Hut": [12.9363, 79.1658], // Arcot Road, Vellore - Verified
  "KFC": [12.9361, 79.1661], // Arcot Road, Vellore - Verified  
  "McDonald's": [12.9365, 79.1655], // Arcot Road, Vellore - Verified
  "Behrouz Biryani": [12.9245, 79.1371], // Delivery kitchen in city area
  "NIC Ice Creams": [12.9256, 79.1378], // Gandhi Road area, Vellore
  "Sweet Truth": [12.9251, 79.1375], // City center delivery
  "The Good Bowl": [12.9248, 79.1373], // City area delivery kitchen
  "Olio - The Wood Fired Pizzeria": [12.9381, 79.1649], // Arcot Road area
  "Yummo Ice Creams": [12.9259, 79.1382], // City area
  "Hotel Saravana Bhavan": [12.9235, 79.1354], // Gandhi Road, Vellore - Chain location
  "Hotel Aryaas": [12.9241, 79.1361], // Gandhi Road area, Vellore
  "Gingee Restaurant": [12.9238, 79.1358], // City center area
  "Darling Namma Veedu": [12.9185, 79.1318], // Popular biryani place in city
  "Cafe California": [12.9691, 79.1579] // Very close to VIT main gate - student favorite
};

// Component to handle map control
const MapController = ({ selectedRestaurant, restaurantCoordinates, vitVellore }) => {
  const map = useMap();
  
  React.useEffect(() => {
    if (selectedRestaurant) {
      // Only zoom in when a restaurant is selected
      const restaurantCoords = restaurantCoordinates[selectedRestaurant.name];
      if (restaurantCoords) {
        map.setView(restaurantCoords, 16, {
          animate: true,
          duration: 1.5
        });
      }
    }
    // Don't zoom out when going back to list - keep current view
  }, [selectedRestaurant, map, restaurantCoordinates]);
  
  return null;
};

const MapPage = () => {
  const vitVellore = [12.96861, 79.15579];
  const [hoveredRestaurant, setHoveredRestaurant] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleRestaurantHover = (restaurantName) => {
    setHoveredRestaurant(restaurantName);
  };

  const handleRestaurantLeave = () => {
    setHoveredRestaurant(null);
  };

  const handleRestaurantClick = (restaurant) => {
    // Save current scroll position before switching to detail view
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollTop);
    }
    setSelectedRestaurant(restaurant);
  };

  const handleBackToList = () => {
    setSelectedRestaurant(null);
    // Restore scroll position after a brief delay to ensure DOM is updated
    setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = scrollPosition;
      }
    }, 50);
  };

  return (
    <div style={{
      display: "flex",
      height: "100%",
      overflow: "hidden",
      fontFamily: "sans-serif"
    }}>
      
      {selectedRestaurant ? (
        <RestaurantDetail 
          restaurant={selectedRestaurant} 
          onBack={handleBackToList} 
        />
      ) : (
        <div 
          ref={scrollContainerRef}
          style={{
            width: "35%",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            overflowY: "auto",
            height: "100%",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)"
          }}
        >
          <RestaurantList 
            onRestaurantHover={handleRestaurantHover}
            onRestaurantLeave={handleRestaurantLeave}
            onRestaurantClick={handleRestaurantClick}
          />
        </div>
      )}

      <div style={{ flex: 1 }}>
        <MapContainer
          center={vitVellore}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <MapController 
            selectedRestaurant={selectedRestaurant}
            restaurantCoordinates={restaurantCoordinates}
            vitVellore={vitVellore}
          />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          
          {/* VIT Vellore Marker */}
          <Marker position={vitVellore}>
            <Popup>
              <div>
                <h3>VIT Vellore</h3>
                <p>Vellore Institute of Technology</p>
              </div>
            </Popup>
          </Marker>

          {/* Restaurant Markers */}
          {restaurants.map((restaurant, index) => {
            const position = restaurantCoordinates[restaurant.name];
            if (!position) return null; // Skip if coordinates not found
            
            const isHovered = hoveredRestaurant === restaurant.name;
            
            return (
              <Marker 
                key={index} 
                position={position}
                icon={isHovered ? hoveredIcon : normalIcon}
                eventHandlers={{
                  mouseover: () => setHoveredRestaurant(restaurant.name),
                  mouseout: () => setHoveredRestaurant(null)
                }}
              >
                <Popup>
                  <div style={{ maxWidth: '200px' }}>
                    <h3 style={{ margin: '0 0 8px 0', color: '#6C2BD9' }}>
                      {restaurant.name}
                    </h3>
                    <p style={{ margin: '4px 0', fontWeight: 'bold' }}>
                      Distance: {restaurant.distance}
                    </p>
                    <p style={{ margin: '4px 0', fontWeight: 'bold' }}>
                      Cost: {restaurant.cost}
                    </p>
                    <p style={{ margin: '4px 0' }}>
                      <strong>Popular:</strong> {restaurant.popularItems.slice(0, 2).join(', ')}
                    </p>
                    <p style={{ margin: '4px 0', fontSize: '0.9em' }}>
                      {restaurant.description.slice(0, 100)}...
                    </p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
