import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './index.scss'
import { SvgIcon } from "@mui/material";

export function Header() {
    return (
        <header>
        <div className="headerLeft">
        <SvgIcon fontSize="large"><ShoppingBasketIcon /></SvgIcon>
        <b>Sneakers For <br/> Real Fellows</b>
        </div>
        <div className="headerRight">
          <p>Cart</p>
          <SvgIcon><ShoppingBasketIcon /></SvgIcon>
        </div>
       </header>
    )
}

