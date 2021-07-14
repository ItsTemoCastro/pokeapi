import { useState, useEffect } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./services/pokemon";
import Card from "./components/card/card";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecords = await getPokemon(pokemon.url);

        return pokemonRecords;
      })
    );
    setPokemonData(_pokemonData);
  };

  const next = async() =>{
    setLoading(true)
    let data = await getAllPokemon(nextUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
    setLoading(false)
    
}
const prev = async() =>{
    if (!prevUrl) return;
    setLoading(true)
    let data = await getAllPokemon(prevUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
    setLoading(false)
}
 
  return (
    <div className="App">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
            <Navbar />
            <Banner
             /*  para que pasar todo este desmadre si solo debo pasar la funcion xD
              pokemonData={pokemonData}
              setPokemonData={setPokemonData}
              prevUrl={prevUrl}
              setPrevUrl={setPrevUrl}
              nextUrl={nextUrl}
              setNextUrl={setNextUrl}
              loading={loading}
              setLoading={setLoading}
              loadingPokemon = {loadingPokemon}
              */
              next={next}
              prev = {prev}
            />
          <div className="container-grid">
            <div className="card-container">
              
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
