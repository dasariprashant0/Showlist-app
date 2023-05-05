import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowDetails from "./components/ShowDetails";
import ShowList from "./components/ShowList";
import BookTicket from "./components/BookTicket";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShowList />} />
      <Route path="/shows/:id" element={<ShowDetails />} />
      <Route path="/book/:id" element={<BookTicket />} />
      <Route path="/shows/:id/book-ticket" element={<BookTicket />} />
      <Route path="/confirmation/:id" element={<Confirmation />} />
    </Routes>
  );
}

export default App;
