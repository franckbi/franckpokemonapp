type pokemonType = {
  name: string;
  url: string;
  id: number;
  image: string;
  types: {
    type: {
      name: string;
    };
  }[];

  weight: number;
  height: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
};

type Pokemonpage = {
  results: { name: string }[];
  next: string | null;
  previosu: string | null;
};
