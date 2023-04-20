const { Router } = require('express');
const getPokemons = require("../controllers/getPokemons");
const getPokemonId = require("../controllers/getPokemonId");
const getPokemonName = require("../controllers/getPokemonName");
const getPostPokemon = require("../controllers/getPostPokemon");
const getPokemonTypes = require ("../controllers/getPokemonTypes");


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', getPokemons);
router.get('/pokemons/name?=...', getPokemonName);
router.get('/pokemons/:idPokemon', getPokemonId);
router.post('/pokemons', getPostPokemon);
router.get('types', getPokemonTypes);



module.exports = router;
