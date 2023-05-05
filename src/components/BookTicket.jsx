import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookTicket.css";

function BookTicket({ onClose }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(`ticket-${id}`, JSON.stringify(formData));
    setIsOpen(false);
    navigate(`/confirmation/${id}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    onClose(true);
  };

  return (
    <div className={`book-ticket modal ${isOpen ? "is-active" : ""}`}>
      <button
        className="modal-background"
        onClick={() => onClose(true)}
      ></button>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Book Ticket</p>
          <button
            className="modal-close"
            aria-label="close"
            onClick={handleCloseModal}
          >X</button>
        </header>
        <section className="modal-card-body">
          <form onSubmit={handleFormSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-primary">
                  Book Ticket
                </button>
              </div>
              <div className="control">
                <button
                  type="button"
                  className="button is-link is-light"
                  onClick={() => onClose(true)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default BookTicket;
