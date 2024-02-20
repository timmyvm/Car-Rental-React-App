import React, { useEffect, useState } from "react";
import ModelHero from "../Components/ModelHero";
import VehicleModels from "../Components/VehicleModels";
import Booking from "../Components/Booking";
import axios from "axios";
import SuccsessPopup from "../Components/ui/SuccsessPopup";

const Models = () => {
  const [carModels, setCarModels] = useState([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");

  async function fetchModels() {
    const { data } = await axios.get(
      "https://car-rental-api.up.railway.app/car"
    );

    const models = data.data;

    setCarModels(models);
  }

  useEffect(() => {}, [bookingOpen]);

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <>
      <SuccsessPopup
        setsuccessOpen={setSuccessOpen}
        successOpen={successOpen}
      />
      <Booking
        setSuccessOpen={setSuccessOpen}
        successOpen={successOpen}
        carModels={carModels}
        bookingOpen={bookingOpen}
        setBookingOpen={setBookingOpen}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
      />

      <ModelHero />
      <VehicleModels
        carModels={carModels}
        setCarModels={setCarModels}
        setBookingOpen={setBookingOpen}
        setSelectedModel={setSelectedModel}
      />
    </>
  );
};

export default Models;
