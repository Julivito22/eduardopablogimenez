import React from "react";
import style from "./About.module.css";


class About extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <>
               <h1 className={style.about}>Este es el componente About</h1>
            
            </>
        );
    }
}

export default About;
