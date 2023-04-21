import React from "react";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";

export default function Home (){

    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
    const indexOfLastPokemon = currentPage * pokemonsPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon,indexOfLastPokemon)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect (()=>{
        dispatch(getPokemons());
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getPokemons());

    }

    return (
        <div>
            <Link to= '/pokemons'>Crear personaje</Link>
            <h1>POKEMON</h1>
            <button onClick={e=>{handleClick(e)}}>
                volver a cargar todos los pokemons
            </button>
            <div>
                <select>
                    <option value="asc" >Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <select>
                    <option value='All'>Tipo</option>
                    <option value='created'>Creados</option>
                    <option value='api'>De la api</option>
                </select>
                <Paginado pokemonsPerPage={pokemonsPerPage}
                allPokemons={allPokemons.length}
                paginado = {paginado}
                />
                {currentPokemons?.map((el) =>{
                    return (
                        <fragment>
                        <Link to={"/home/" + el.id}>
                    <Card name={el.name} image={el.img} type={el.type} />
                    </Link>
                    </fragment>
                    )
                   })}
                
            </div>
            </div>
    )
}