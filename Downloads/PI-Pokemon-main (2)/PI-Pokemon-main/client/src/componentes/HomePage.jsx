import React, { Fragment } from "react";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Home (){

    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons)

    useEffect (()=>{
        dispatch(getPokemons());
    },[])

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
                {allPokemons?.map((el) =>{
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