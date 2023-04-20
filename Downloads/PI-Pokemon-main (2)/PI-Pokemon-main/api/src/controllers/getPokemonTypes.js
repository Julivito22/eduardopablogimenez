const {Pokemon} = require ('../db');
const axios = require('axios');

const getPokemonTypes = async (req, res) => {
    
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        const typePokemonApi = response.data;

        await Promise.all(
            typePokemonApi.map(async(type) => {
                const typePokemon = await Pokemon.findOnde({name: type.name});
                if (!typePokemon) {
                    const newTypePokemon = new typePokemon({name: type.name});
                    await newTypePokemon.save();
                }
            })
        );

        const typePokemonBD = await typePokemon.find();

        res.status(200).json(typePokemonBD);
    } catch (error) {
        res.status(500).json(error.message);
    }
};



module.exports= getPokemonTypes;