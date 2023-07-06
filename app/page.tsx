'use client';
import Image from 'next/image';
import Header from './components/pokemonHeader';
import styles from './page.module.css';

import { Button, Container, Typography } from '@deere/fuel-react';
import { useEffect, useState } from 'react';

export default function PageLa() {
  const [value, setValue] = useState('');
  const [getName, setName] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = () => {
    setIsPlaying(true);
  };

  // const getPokemon = async () => {
  //   const testingName = 'ivysaur';
  //   const res = await fetch(`api/pokeName/${testingName}`);

  //   console.log('res', res);
  //   const apiJson = await res.json();
  //   console.log('Api Json', apiJson);
  //   setValue(apiJson.pokeData.image);
  //   setName(apiJson.pokeData.name);

  //   console.log('CHeckingggg: ', value);
  // };

  // useEffect(() => {
  //   getPokemon();
  // }, []);

  //Testing
  return (
    <main className={styles.main}>
      <div>
        <Header />

        <div className='text-center mb-4'>
          {!isPlaying && (
            <button
              style={{ marginLeft: '340px' }}
              onClick={handlePlayAudio}
              className={styles.buttontesting}
              role={styles.button}
            >
              {' '}
              <h1 className='text-center'>Poké</h1>
            </button>
          )}
          {isPlaying && (
            <div>
              <iframe
                width='760'
                height='415'
                src='https://www.youtube.com/embed/rg6CiPI6h2g'
                title='YouTube Video'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              >
                Play
              </iframe>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
