import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './index.scss'
import { SvgIcon } from "@mui/material";

export function Header() {
    return (
        <header>
        <div className="headerLeft">
        <SvgIcon fontSize="large"><ShoppingCartOutlinedIcon /></SvgIcon>
        <b>Sneakers For <br/> Real Fellows</b>
        </div>
        <div className="headerRight">
        <SvgIcon><ShoppingCartOutlinedIcon /></SvgIcon>
          <span>Cart</span>
          <span>1205 $</span>
        </div>
       </header>
    )
}

