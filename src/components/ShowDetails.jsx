import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ShowDetails.css";
import BookTicket from "./BookTicket";

function ShowDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShowData(data));
  }, [id]);

  // const handleBookTicketClick = () => {
  //   navigate(`/shows/${id}/book-ticket`);
  // };

  const handleReturnClick = () => {
    navigate(`/`);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  if (!showData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="show-details-container">
      <div className="image-container">
        <img src={showData.image.medium} alt={showData.name} />
      </div>
      <div className="details-container">
        <h1 className="title is-4">{showData.name}</h1>
        <p className="subtitle is-6">Type: {showData.type}</p>
        <p dangerouslySetInnerHTML={{ __html: showData.summary }}>
          {/* {showData.summary} */}
        </p>
        <button onClick={handleOpenModal} className="button is-primary">
          Book Ticket
        </button>
        {isOpen && <BookTicket onClose={handleCloseModal} showId={id} />}
        <button onClick={handleReturnClick} className="button is-primary">
          Return to Home
        </button>
      </div>
    </div>
  );
}

export default ShowDetails;
