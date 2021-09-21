<template>
  <h1>¿Quién es este pokemon?</h1>

  <!-- TODO img -->
  <PokemonPicture :pokemonId="251" :showPokemon="true" />
  <!-- TODO opciones -->
  <PokemonOptions />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

import getPokemonOptions from "@/helpers/getPokemonOptions";

console.log(getPokemonOptions());

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
    getPokemonOptions,
  },
};
</script>
