
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useEffect, useState } from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import  Form  from "./components/Form";
import Favorites from './components/Favorites.jsx';





function App () {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation
   const [access, setAccess] = useState(false);
   const navigate = useNavigate ();

   useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const username = "juligimenez@mail.com";
   const password = "juli123";


  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "6b95e821bd4a.17b97838834dc2b6f57c";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response=>response.json())
    .then(data=>{
      if(data.name){
        setCharacters((oldChars) => [...oldChars, data])
      }else {
        alert("Algo salió mal")
      }
    })
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

 
   

   

   const login = (userData) => {
    if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    };
   };
  
  return (
    
      
      <div>
      { pathname !== "/" && <Nav onSearch = {onSearch} />}
       <Routes>
        <Route path="/" element={<Form login={login} />} />
          <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}
          />
          <Route path="/about" element={<About />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Detail/:detailId" element={<Detail />} />

        </Routes>
        
        
      </div>
      
      
      
    
  );
}

export default App