'use client';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@deere/fuel-react';
import { ThemeProvider } from '@deere/fuel-react';
import Link from 'next/link';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export default function NavBar() {
  return (
    <ThemeProvider>
      <nav>
        <div style={{ textAlign: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box p='0.5rem' sx={{ gridColumn: '1' }}>
                <Button
                  style={{ backgroundColor: '#552F2A' }}
                  href='./pokemonList'
                >
                  <CatchingPokemonIcon />
                  <Typography
                    sx={{ size: 'lg' }}
                    fontWeight='bold'
                    color='error'
                    component='p'
                    gutterBottom
                  >
                    Pokémons
                  </Typography>
                  <CatchingPokemonIcon />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box p='0.5rem' sx={{ gridColumn: '1' }}>
                <Button style={{ backgroundColor: '#552F2A' }} href='/'>
                  <CatchingPokemonIcon />
                  <Typography
                    sx={{ size: 'lg' }}
                    fontWeight='bold'
                    color='error'
                    component='p'
                    gutterBottom
                  >
                    Home
                  </Typography>
                  <CatchingPokemonIcon />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box p='0.5rem' sx={{ gridColumn: '1' }}>
                <Button style={{ backgroundColor: '#552F2A' }} href='/about'>
                  <CatchingPokemonIcon />
                  <Typography
                    sx={{ size: 'lg' }}
                    fontWeight='bold'
                    color='error'
                    component='p'
                    gutterBottom
                  >
                    About
                  </Typography>
                  <CatchingPokemonIcon />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </div>
      </nav>
    </ThemeProvider>
  );
}
