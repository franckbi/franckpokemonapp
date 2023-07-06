import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  context: { params: { pokemon: string } }
) {
  const pokemonName = context.params.pokemon;

  // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`
  );

  const data = await res.json();
  console.log('pokemon CHeck:', data);

  const pokeData = {
    name: data.name,
    url: data.url,
    height: data.height,
    image: data.sprites.back_default,
    weight: data.weight,
    id: data.id,
    type: data.types[0].type.name,
  };

  return NextResponse.json({ pokeData });
}
