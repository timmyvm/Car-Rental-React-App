import React, { useState } from "react";
import {
  faCalendarAlt,
  faCar,
  faL,
  faLocationDot,
  faSpinner,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Booking = ({
  carModels,
  bookingOpen,
  setBookingOpen,
  selectedModel,
  setSelectedModel,
  setSuccessOpen,
  successOpen
}) => {
  const [bookingLoading, setBookingLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setBookingLoading(true);

    setTimeout(() => {
      setBookingLoading(false)
      setBookingOpen(false)
      setSuccessOpen(true)
    }, 2000)


    setTimeout(() => {
      setSuccessOpen(false)
    },5000)
  }

  return (
    <div className={`booking ${bookingOpen && "booking-open"}`}>
      <div className="booking__container">
        <button
          className="booking__close"
          onClick={() => {
            setBookingOpen(false);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h3 className="booking__title">Book a Car</h3>
        <form
          action=""
          className="booking__form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="form__item">
            <label htmlFor="" className="form__item__label">
              <FontAwesomeIcon icon={faCar} />
              <span>
                Select Your model <span className="required"></span>
              </span>
            </label>
            <select
              className="form__item__select"
              value={selectedModel}
              onChange={(event) => setSelectedModel(event.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              {carModels.map((model) => (
                <option key={model.id} value={`${model.make} ${model.model}`}>
                  {model.make} {model.model}
                </option>
              ))}
            </select>
          </div>
          <div className="form__item">
            <label htmlFor="" className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Pick-Up<span className="required"></span>
              </span>
            </label>
            <select name="" id="" className="form__item__select">
              <option value="" disabled>
                Select
              </option>
              <option value="">New York</option>
              <option value="">London</option>
              <option value="">Sydney</option>
              <option value="">BeiJing</option>
              <option value="">Los Angeles</option>
            </select>
          </div>
          <div className="form__item">
            <label htmlFor="" className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Drop Off<span className="required"></span>
              </span>
            </label>
            <select name="" id="" className="form__item__select">
              <option disabled>Select</option>
              <option value="">New York</option>
              <option value="">London</option>
              <option value="">Sydney</option>
              <option value="">BeiJing</option>
              <option value="">Los Angeles</option>
            </select>
          </div>
          <div className="form__item">
            <label htmlFor="" className="form__item__label">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>
                Pick-Up<span className="required"></span>
              </span>
            </label>
            <input type="date" className="form__item__input" />
          </div>
          <div className="form__item">
            <label htmlFor="" className="form__item__label">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>
                Drop-Off<span className="required"></span>
              </span>
            </label>
            <input type="date" className="form__item__input" />
          </div>

          <div className="form__item">
            <button className="form__item__submit">
              {bookingLoading ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="form__item__submit__loading"
                />
              ) : (
                "Book ride"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
