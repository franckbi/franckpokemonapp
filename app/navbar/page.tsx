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

export default function NavBar() {
  return (
    <ThemeProvider>
      <nav>
        <div style={{ textAlign: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box p='0.5rem' sx={{ gridColumn: '1' }}>
                <img
                  height={30}
                  width={30}
                  src='https://cdn.emojidex.com/emoji/seal/pokeball.png'
                  alt='pokeball'
                />
                <Button
                  style={{ backgroundColor: '#552F2A' }}
                  href='./pokemonList'
                >
                  <Typography
                    size='lg'
                    fontWeight='bold'
                    color='error'
                    component='p'
                    gutterBottom
                  >
                    Pokémons
                  </Typography>
                </Button>
                <img
                  height={30}
                  width={30}
                  src='https://cdn.emojidex.com/emoji/seal/pokeball.png'
                  alt='pokeball'
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box p='0.5rem' sx={{ gridColumn: '1' }}>
                <img
                  height={30}
                  width={30}
                  src='https://cdn.emojidex.com/emoji/seal/bensive.png'
                  alt='homepage'
                />
                <Button style={{ backgroundColor: '#552F2A' }} href='/'>
                  <Typography
                    size='lg'
                    fontWeight='bold'
                    color='error'
                    component='p'
                    gutterBottom
                  >
                    Home
                  </Typography>
                </Button>
                <img
                  height={30}
                  width={30}
                  src='https://cdn.emojidex.com/emoji/seal/bensive.png'
                  alt='homepage'
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box p='0.5rem' sx={{ gridColumn: '1' }}>
                <img
                  height={40}
                  width={40}
                  src='https://cdn.emojidex.com/emoji/seal/black_person.png'
                  alt='Me'
                />
                <Button style={{ backgroundColor: '#552F2A' }} href='/about'>
                  <Typography
                    size='lg'
                    fontWeight='bold'
                    color='error'
                    component='p'
                    gutterBottom
                  >
                    About
                  </Typography>
                </Button>
                <img
                  height={40}
                  width={40}
                  src='https://cdn.emojidex.com/emoji/seal/black_person.png'
                  alt='Me'
                />
              </Box>
            </Grid>
          </Grid>
        </div>
      </nav>
    </ThemeProvider>
  );
}
