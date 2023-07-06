import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`
  );

  const poke = await res.json();
  console.log('Printing Poke', poke);

  const data = poke.results.map(async (pokemon: any) => {
    const pokeUrl = await fetch(`${pokemon.url}`);
    //const pokeUrl= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokejson = await pokeUrl.json();

    return {
      //...pokemon,
      name: pokejson.name,
      //url: pokejson.url,
      height: pokejson.height,
      image: pokejson.sprites.other.dream_world.front_default,
      weight: pokejson.weight,
      id: pokejson.id,
      pokeType: pokejson.types[0].type.name,
    };
  });
  const finalData = await Promise.all(data);
  console.log('Data: \n\n\n\n', finalData);
  return NextResponse.json(finalData);
  // return
}
