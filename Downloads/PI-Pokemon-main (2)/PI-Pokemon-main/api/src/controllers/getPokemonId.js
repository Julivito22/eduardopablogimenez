const axios = require ('axios');
const {Pokemon, Type} = require ("../db");

const getPokemonId = async (req, res) => {
    const idPokemon = req.params;
    try {
       const pokemon = await Pokemon.findAll(idPokemon, {include: Type});

        if(!pokemon) {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
            const apiPoke = response.data;
            pokemon = {
                id: apiPoke.id,
                name: apiPoke.name,
                image: apiPoke.sprites.other.dream_world.front_default,
                types: apiPoke.types.map((type) => type.type.name),
                life: apiPoke.stats[0].base_stat,
                attack: apiPoke.stats[1].base_stat,
                defense: apiPoke.stats[2].base_stat,
                speed: apiPoke.stats[5].base_stat,
                height: apiPoke.height || null,
                weight: apiPoke.weight || null,
            };
        }
        res.status(200).json(pokemon);

       
 } catch (error) {
    res.status(500).json(error.message);
 };
  };
   




module.exports = getPokemonId;