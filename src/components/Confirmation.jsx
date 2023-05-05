import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Retrieve data from localStorage
    const userData = JSON.parse(localStorage.getItem(`ticket-${id}`));

    // If userData is not present in localStorage, redirect to the homepage
    if (!userData) {
      navigate("/");
      return;
    }

    const { name, email } = userData;

    // Show confirmation message after 2 seconds
    const timeout = setTimeout(() => {
      alert(`Thank you for booking a ticket for ${name} (${email})`);
      navigate(`/shows/${id}`);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [id, navigate]);

  return (
    <div className={`modal is-active`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Confirmation</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => navigate(`/shows/${id}`)}
          >Delete</button>
        </header>
        <section className="modal-card-body">
          <p>Booking in progress...</p>
        </section>
      </div>
    </div>
  );
}

export default Confirmation;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function Confirmation() {
//   const [formData, setFormData] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const storedData = localStorage.getItem(`ticket-${id}`);
//     setFormData(JSON.parse(storedData));
//   }, [id]);

//   if (!formData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Thank you for booking a ticket for Show ID {id}!</h1>
//       <p>Name: {formData.name}</p>
//       <p>Email: {formData.email}</p>
//     </div>
//   );
// }

// export default Confirmation;