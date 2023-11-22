"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./../waiting/waiting.scss";
import "../../main.scss";

export default function ReservationContent({ onCompleted }) {
  const [reservations, setReservations] = useState([]);
  console.log(reservations);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/reservation`)
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  if (!reservations.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="reservationContainer">
      <div className="reservationList">
        {reservations.map((reservation) => (
          <div key={reservation._id} className="reservationBox">
            <div className="reservationDetails">
              <div>
                <span>예약: {reservation._id}</span>
                <span>{reservation.user?.name}</span>
                <span>{reservation.people}명</span>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                  {reservation.user?.phone_number}
                </span>
              </div>
              <div className="reservationTime">
                예약시간: {reservation.date} {reservation.hour}
              </div>
              <div className="buttonContainer">
                <button onClick={() => onCompleted(reservation._id)}>
                  <FontAwesomeIcon icon={faCheck} />
                  입장
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
