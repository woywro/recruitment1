## Features
<b>Fight Api route:</b>
<p>Takes in two pokemon species and returns winner based on its attack stat</p>
<p>route: /api/fight/<b>[pokemon1species]_[pokemon2species]</b></p>
<p>For e.g. /api/fight/dragonite_syclar</p>
<p>If the attack stat is the same api route returns random one e.g.(/api/fight/syclar_fidgit)</p>
<b>Compare Page:</b>
<p>Comparing up to n Pokemons + highlighting highest base stats in a row</p>

## Problems
- Since getAllPokemonSpecies returns duplicated values of some pokemon species, all pokemons are filtered to be unique. 

# Live version
https://blazity-recruitment-l5c3j9nko-woywro.vercel.app/
