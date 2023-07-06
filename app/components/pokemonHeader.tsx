'use client';
import '../page.module.css';

const Header = () => {
  return (
    <div style={{ width: '800px', height: '450px', transform: 'scale(1.3)' }}>
      <header>
        <h1 className='title' style={{ marginLeft: '120px', color: '#BF4640' }}>
          <img
            height={50}
            width={50}
            src='https://cdn.emojidex.com/emoji/seal/pikachu.png'
            alt='pokemon image'
          />
          Welcome To My Pokedex Website
          <img
            height={50}
            width={50}
            src='https://cdn.emojidex.com/emoji/seal/pikachu.png'
            alt='pokemon image'
          />
        </h1>
      </header>
      <img
        style={{
          width: '750px',
          height: '390px',
          display: 'block',
          margin: 'auto',
        }}
        src='https://i.imgur.com/aDz70Ty.png'
        alt='the image'
      />
    </div>
  );
};

export default Header;
