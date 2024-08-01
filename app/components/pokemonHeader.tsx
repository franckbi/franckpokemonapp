'use client';
import '../page.module.css';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
// import Image from '@/images/image.png';
const Header = () => {
  return (
    <div style={{ width: '800px', height: '450px', transform: 'scale(1.3)' }}>
      <header>
        <h1 className='title' style={{ marginLeft: '120px', color: '#BF4640' }}>
          <CatchingPokemonIcon />
          Welcome To My Pokedex Website
          <CatchingPokemonIcon />
        </h1>
      </header>
      <img
        style={{
          width: '750px',
          height: '390px',
          display: 'block',
          margin: 'auto',
        }}
        src='https://wallpapercave.com/wp/wp4356176.png'
        alt='the image'
      />
    </div>
  );
};

export default Header;
