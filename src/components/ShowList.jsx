import React, { useState, useEffect } from "react";
import "./ShowList.css";
import { Link } from "react-router-dom";

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchShows() {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setShows(data);
    }
    fetchShows();
  }, []);

  return (
    <div className="card-container">
      <h1>Show List</h1>
      <div className="card-columns">
        {shows.map((show) => (
          <div key={show.show.id} className="card">
            <div className="card-image">
              <img
                src={
                  show.show.image ? show.show.image.medium : "default-image-url"
                }
                alt={show.show.name}
              />
            </div>
            <div className="card-content">
              <h2 className="card-title">{show.show.name}</h2>
              <p
                className="card-description"
                dangerouslySetInnerHTML={{ __html: show.show.summary }}
              >
                {/* {show.show.summary} */}
              </p>
              <Link to={`/shows/${show.show.id}`} className="card-link">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
