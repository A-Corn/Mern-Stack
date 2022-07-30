import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then((response) => {
        console.log(response.data.results);
        setPokemonData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div class="col-5 container text-center">
      <h1 class="d-flex justify-content-center">Axios Pokemon API Assignment</h1>
      <div>
        <table class="table align-middle">
          <thead class="table-dark"> 
            <tr>
              <th scope="col"> # </th>
              <th scope="col"> Name </th>
            </tr>
          </thead>
          <tbody class="table-info table-hover">
            {pokemonData.map((pokemon, index) => (
            <tr>
              {/*  Added index+1 to show proper pokemon number */}
              <th> {index+1}</th>
              <th> {pokemon.name}</th>
            </tr>
        ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
