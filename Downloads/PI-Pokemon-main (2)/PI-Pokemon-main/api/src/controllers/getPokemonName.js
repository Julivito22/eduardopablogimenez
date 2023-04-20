const {Pokemon} = require ('../db');
const axios = require ('axios');

const pokemonByName = async (req, res) => {
    const {name} = req.query;
    try {
        const pokemonBD = await Pokemon.findOne({
            where: {name},
            attributes: ['name', 'image'],
            through: {
                attributes: {}
            }
        })
        if (!pokemonBD) {
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
            .then(response => {
                const {name, sprites, types} = response.data;
                const typesPokemon = types.map(type => type.type.name)
                return {name, image: sprites.front_default, types: typesPokemon}
            })
            return res.status(200).json(pokemon);
           
            
        }
        return res.status(200).json(pokemonBD)
    } catch (error) {
        return res.status(400).json({error: `Pokemon ${error.response.data.tolowerCase()}`})
    }
}

module.exports = pokemonByName;