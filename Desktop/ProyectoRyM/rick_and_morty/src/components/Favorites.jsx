import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import style from "./Favorites.module.css";
import * as actions from "../Redux/actions";


const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites);

const Cards = (e) => {
    const dispatch = useDispatch();
    dispatch (actions.orderCards(e.target.value))


}    

const Filter = (e) => {
    const dispatch = useDispatch();
    dispatch (actions.filterCard(e.target.value))
     }

    return (
        <div className={style.favorito}>
        {favorites.map(({id, name, species, gender, image}) => {
            return (
            
                
                <Card 
                key={id}
                id={id}
                name ={name}
                species={species}
                gender={gender}
                image={image}
                 />
                 
            );
        })}
        <div>

            <select name= "order" onChange={Cards} />
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
            <select name= "filter" onChange={Filter} />
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
            </div>
        </div>
    );
};

   

export default Favorites;