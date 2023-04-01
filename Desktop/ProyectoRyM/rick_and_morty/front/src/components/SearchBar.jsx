import style from "./SearchBar.module.css"
import {useState} from "react";

export default function SearchBar({onSearch}) {

   const [id,setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className = {style.bar}>
          <input type='search' className= {style.search} onChange = {handleChange} />
      <button onClick={ () => onSearch(id) } className = {style.click}
      >BUSCAR</button> 
      </div>
   );
}
