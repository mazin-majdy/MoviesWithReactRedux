import React from "react";
import { Container } from "react-bootstrap";
import MovieList from "./components/MovieList";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from "./components/MovieDetails";
import Error from "./components/Error/Error";

function App() {

  return (
    <div className="color-body">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

// npm config set legacy-peer-deps true