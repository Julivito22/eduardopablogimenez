import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css"


const Detail = () => {
    const { detailId } = useParams();

    const [character, setCharacter] = useState({});
    

    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        //const KEY = "6b95e821bd4a.17b97838834dc2b6f57c";

        axios(`${URL_BASE}/character/${detailId}`)
        .then((response) => setCharacter(response.data)
        );

    }, []);

    return(
        <div className= {style.detalle}>
            { character.name ? (
        <>
            <h2 className={style.nombre}>{character.name}</h2>
            <p className={style.p}>{character.status}</p>
            <p className={style.p}>{character.species}</p>
            <p className={style.p}>{character.gender}</p>
            <p className={style.p}>{character.origin?.name}</p>
            <img src = {character.image} alt="img" className={style.imagen}></img>
            
                    
        </>
                ) : (
                    <p className={style.loading}>Cargando...</p>
                )}
                
             </div>
    );
};

export default Detail;