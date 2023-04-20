const {Pokemon, Type} = require ('../db');



const pokemonPost = async (req, res) => {
    try {
        const {name, image, hp, attack, defense, speed, height, weight, types} = req.body;

        const newPokemon = await Pokemon.create({
            name,
            image,
            hp,
            attack,
            defense, 
            speed,
            height,
            weight,
            types,
        });

        const createType = await Type.findAll({
            where: {
                name: types.map(type => type.type.name)
            }
        });

        await newPokemon.addTypes(createType);

        const createdPokemon = await Pokemon.findByPk(newPokemon.id, {include: {model: Type}});
        res.status(200).json(createdPokemon);
    } catch (error) {
        res.status(500).json(error.message);
    }
   
    
   
}






module.exports = pokemonPost;