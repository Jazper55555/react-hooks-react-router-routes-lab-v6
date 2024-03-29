import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(r => r.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }, [])

  const actorDisplay = actors.map(actor => {
    const movieList = actor.movies.map(movie => (
      <li key={movie}>{movie}</li>
    ))

    return (
      <article key={actor.id}>
      <h2>{actor.name}</h2>
      <h4>Movies:</h4>
      <ul>{movieList}</ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorDisplay}
      </main>
    </>
  );
};

export default Actors;
