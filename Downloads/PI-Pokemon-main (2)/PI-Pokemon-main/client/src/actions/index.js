import axios from 'axios';

export function getPokemons(){
    return async function(dispatch){
        var response = await axios.get('http://localhost:3001/pokemons', {

        });
        return dispatch({
            type: 'GET_POKEMONS',
            payload: response.data
        })
    }
}