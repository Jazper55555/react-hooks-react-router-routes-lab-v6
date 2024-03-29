import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(r => r.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  }, [])

  const directorDisplay = directors.map(director => {
    const moviesList = director.movies.map(movie => (
      <li key={movie}>{movie}</li>
    ))

    return (
    <article key={director.id}>
      <h2>{director.name}</h2>
      <h4>Movies:</h4>
      <ul>{moviesList}</ul>
    </article>
  )})
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorDisplay}
      </main>
    </>
  );
};

export default Directors;
