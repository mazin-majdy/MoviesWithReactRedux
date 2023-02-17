import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from "./components/MovieDetails";

function App() {

  return (
    <div className="color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

// npm config set legacy-peer-deps true