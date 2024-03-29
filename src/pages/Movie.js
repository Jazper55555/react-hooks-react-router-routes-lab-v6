import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from '../components/NavBar'

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams()
  const id = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error))
  }, [movie])

  const genres = movie.genres?.join(', ') || ''

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.time}</p>
        <span>Genre: {genres}</span>
      </main>
    </>
  );
};

export default Movie;
