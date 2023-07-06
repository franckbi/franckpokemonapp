'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Search,
} from '@deere/fuel-react';
import { useEffect, useState } from 'react';
import { GET } from '../api/pokemonData/route';
import { ThemeProvider } from '@deere/fuel-react';
import styles from '../page.module.css';
export default function pokemonPage() {
  const [value, setValue] = useState<pokemonType[]>([]);
  const [favorites, setFavorites] = useState([]);

  const [search, setSearch] = useState('');
  const [setTheValue, setTheSetValue] = useState<pokemonType[]>([]);
  const [loadedPokemons, setLoadedPokemons] = useState(15);

  const getPokemon = async () => {
    const apiFetch = await fetch(`../api/pokemonData`);

    const apiJson = await apiFetch.json();
    console.log('Fetching', apiJson);
    const slicedPokemon = apiJson.slice(0, loadedPokemons);
    setValue(apiJson);

    //setType(apiJson.types[0].type.name);
    console.log('Franck', apiJson);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };

  const filteredPokemon = value.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ThemeProvider>
      <Card>
        <CardContent style={{ background: '#000000' }}>
          <div className='text-center mb-4'>
            <div style={{ textAlign: 'center' }}>
              <h1 className='center mb-4 ' style={{ color: 'white' }}>
                All the Pokémon
              </h1>
            </div>
            <Search
              type='text'
              value={search}
              onChange={handleSearchChange}
              placeholder='Search Pokémon'
              style={{
                color: 'white',
                backgroundColor: 'black',
              }}
            />
            <Grid container spacing={3}>
              {filteredPokemon.map((pokemon: any) => (
                <Grid item xs={12} sm={4} key={pokemon.id}>
                  <div>
                    <Card
                      style={{ objectFit: 'scale-down', background: '#401202' }}
                    >
                      <CardContent style={{ color: '' }}>
                        {/* <Button
                          style={{
                            marginLeft: '75%',
                            borderRadius: '20px',
                          }}
                        >
                          <h5>Add to Favorite</h5>
                        </Button> */}
                        <h2 style={{ color: 'white' }}>
                          Pokémon Name: {pokemon.name}
                        </h2>
                        <h5 style={{ color: 'white' }}>
                          Height: {pokemon.height}
                        </h5>
                        <h5 style={{ color: 'white' }}>
                          Weight: {pokemon.weight}
                        </h5>
                        <h5 style={{ color: 'white' }}>id: {pokemon.id}</h5>
                        <center>
                          <img
                            src={pokemon.image}
                            alt={pokemon.name}
                            width={350}
                            height={350}
                            style={{
                              objectFit: 'contain',
                            }}
                          />
                        </center>

                        <h5
                          style={{
                            color: 'white',
                            padding: '1.5rem 2rem',
                            border: 0,
                            marginLeft: '10px',
                            fontWeight: 'bold',
                            background: '#823034',
                            borderRadius: '3px',
                            transition: 'all .2s',
                            cursor: 'pointer',
                            boxShadow:
                              '0 1.75rem 2rem -.4rem rgba(20, 0, 80, .15)',
                          }}
                        >
                          Pokémon type: {pokemon.pokeType}
                        </h5>
                      </CardContent>
                    </Card>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
