import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

import {FaUserAlt,FaShoppingCart,FaSearch} from 'react-icons/fa'


const options={
    burgerColor:'#800080',
    burgerColorHover:'green',
    navColor1:"#AFEEEE",
    logo:logo,
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1Text:"Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url:"/",
    link2Url:"/products",
    link3Url:"/contact",
    link4Url:"/about",

    link1Size:"25px",
    link2Size:"25px",
    link3Size:"25px",
    link4Size:"25px",
    link1Margin:'15px',
    link2Margin:'15px',
    link3Margin:'15px',
    link4Margin:'15px',
    link1Padding:'15px',
    link2Padding:'15px',
    link3Padding:'15px',
    link4Padding:'15px',
    cartIcon:true,
    CartIconElement: FaShoppingCart,
    profileIcon:true,
    ProfileIconElement: FaUserAlt,
    profileIconUrl:"/login",
    searchIcon:true,
    SearchIconElement: FaSearch,
    searchIconMargin:"10px",
    cartIconMargin:"10px",
    profileIconMargin:"10px",
    searchIconColor:'red',
    profileIconColor:'red',
    cartIconColor:'red',
    
}

const Header = () => {
  return (
        
          <ReactNavbar {...options}/>
  )
}

export default Header