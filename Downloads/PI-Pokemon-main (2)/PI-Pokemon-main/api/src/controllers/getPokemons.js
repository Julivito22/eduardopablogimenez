const axios = require("axios");
const {Pokemon} = require ("../db");

const getPokemons = async (req, res) => {
    try{
        const dbPokemons = await Pokemon.findAll();
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=60')
        const pokemons = response.data.results;

        const listPoke = [...dbPokemons, ...pokemons];

        res.status(200).json(listPoke);
    } catch(error) {
        res.status(500).json({error: 'No se encuentra el personaje'});
    }
};




module.exports = getPokemons;