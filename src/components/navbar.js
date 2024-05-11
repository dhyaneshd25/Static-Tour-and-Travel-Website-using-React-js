import React, { Component } from "react";
import './navbarstyle.css';
import { MenuItems } from "./utils/MenuItems";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { FiX } from "react-icons/fi";

class Navbar extends Component{
    state = {clicked: true};
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }
render(){
    return (
        <nav className="navbaritem">
            <img className="imglogo" src="https://www.logomoose.com/wp-content/uploads/2016/10/HolidaysTours.jpg"/>
            <div className="mobilemenu" onClick={this.handleClick}>
                {this.state.clicked ? <div><BiMenuAltRight size={30}/></div> : <div className="z"><FiX size={30}/></div>}
            </div>
            <ul className={this.state.clicked ? "navmenu":"navmenu active"}>
                {MenuItems.map((item,i)=>{
                    return (
                        <li key={i}>
                        <Link className={item.cName} to={item.url}>{item.title}</Link>
                    </li>
                    );
                })}
                <button>Sign Up</button>
            </ul>
        </nav>
    );
}

}

export default Navbar;