import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import style from "./Form.module.css"





class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(

            
            
            <div className= {style.nav}>
                
                <SearchBar onSearch={this.props.onSearch} />
                <Link to = "/Home" className={style.navegador}  ><h3>HOME</h3> </Link>
                <Link to = "/About"  ><h3>ABOUT ME</h3></Link> 
                <Link to = "/Favorites"  ><h3>FAVORITES</h3></Link> 
                <Link to ="/Detail/:detailId" ></Link>

              
                
                
                
            </div>
            
           
        );
    }

}

export default Nav;