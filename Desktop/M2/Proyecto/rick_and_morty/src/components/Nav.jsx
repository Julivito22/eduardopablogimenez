import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";





class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(

            
            
            <div>
                
                <SearchBar onSearch={this.props.onSearch} />
                <Link to = "/Home"  ><h3>HOME</h3> </Link>
                <Link to = "/About"  ><h3>ABOUT ME</h3></Link> 
               <Link to ="/Detail/:detailId" ></Link>

              
                
                
                
            </div>
            
           
        );
    }

}

export default Nav;