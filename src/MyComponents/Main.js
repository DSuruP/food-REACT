import React from 'react'
import { Link } from "react-router-dom";

export const Main = () => {

    return (
        <div>
            <div className="jumbotron">
                <center>
                    <h1 className="display-4">Welcome to Food's <br /> Kitchen</h1>
                    <br />
                    <Link className="btn btn" style={{backgroundColor: "#3A41CF", color: "white"}} 
                    target="_blank" to="/itemsandquantity">GO TO MENU</Link>
                </center>
            </div>
        </div>
    )
}