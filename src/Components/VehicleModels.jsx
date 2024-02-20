import React, { useEffect, useState } from "react";
import Model from "./ui/Model";
import ModelSkeleton from "./ui/ModelSkeleton";

const VehicleModels = ({
  carModels,
  setCarModels,
  setBookingOpen,
  setSelectedModel,
}) => {
  const [sort, setSort] = useState("");

  function sortModels(sortOption) {
    const sortedModels = [...carModels];

    if (sortOption === "HIGH_TO_LOW") {
      sortedModels.sort((a, b) => b.per_day_price - a.per_day_price);
    } else if (sortOption === "LOW_TO_HIGH") {
      sortedModels.sort((a, b) => a.per_day_price - b.per_day_price);
    } else if (sortOption === "RATING_HIGH_LOW") {
      sortedModels.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "RATING") {
      sortedModels.sort((a, b) => a.rating - b.rating);
    }

    setCarModels(sortedModels);
  }

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSort(selectedSort); 
    sortModels(selectedSort); 
  };

  return (
    <section id="models">
      <div className="container">
        <div className="row models__row">
          <div className="models__header">
            <h2 className="model__header__title">Vehicle Models</h2>
            <select
              defaultValue={sort}
              className="models__header__sort"
              onChange={handleSortChange}
            >
              <option disabled value="">Sort</option>
              <option value="HIGH_TO_LOW">Price (High to Low)</option>
              <option value="LOW_TO_HIGH">Price (Low to High)</option>
              <option value="RATING_HIGH_LOW">Rating (High to Low)</option>
              <option value="RATING">Rating (Low to High)</option>
            </select>
          </div>
          <div className="models__list">
            {carModels.length > 0 ? (
              carModels.map((model) => (
                <Model
                  model={model}
                  key={model.id} 
                  setBookingOpen={setBookingOpen}
                  setSelectedModel={setSelectedModel}
                />
              ))
            ) : (
              // Use key={index} to avoid console warnings
              new Array(20).fill(0).map((_, index) => (
                <ModelSkeleton key={index} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;
