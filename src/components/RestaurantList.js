import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../data/restaurants";

const RestaurantList = () => {
  return (
    <div style={{ padding: "20px", overflowY: "scroll", height: "100vh" }}>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={index} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;