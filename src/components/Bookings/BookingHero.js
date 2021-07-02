import React from "react";
import Prev from "./prev";
import "./BookingHero.css";

const BookingHero = () => {
  return (
    <div className="upcoming__bookings">
      <h4 style={{ color: "#fff" }}> Upcoming bookings</h4>
      <div className="upcoming">
        <img
          src="https://images.unsplash.com/photo-1594849960846-71e76b6fe2ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhYmlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="img"
          className="upcoming__image"
        />
        <div className="upcoming__info">
          <div className="info__text">HouseStay,Darjeeling</div>
          <div className="dates">03-05-2021 to 26-05-2021</div>
          <div className="booking-id">Id: CNPD52347895</div>
          <div className="book__button">View details</div>
        </div>
      </div>
      <div className="prevbookings">
        <h4 style={{ color: "#fff" }}> Previous bookings</h4>
        <div className="prev__container">
          <Prev
            image={
              " https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            }
            name={"HouseStay,Darjeeling"}
            bookingId={"CNPD52347895"}
          />
          <Prev
            image={
              "https://images.unsplash.com/photo-1531183436556-51f742660c8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FiaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60 "
            }
            name={"HouseStay,Rajasthan"}
            bookingId={"CNPD52347880"}
          />
          <Prev
            image={
              "https://images.unsplash.com/photo-1515533536176-2932291cf320?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiaW4lMjBpbiUyMHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            }
            name={"HouseStay,Darjeeling"}
            bookingId={"CNPD52347865"}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingHero;
