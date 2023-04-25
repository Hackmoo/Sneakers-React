import React from "react";

import CloseIcon from '@mui/icons-material/Close';
import CartItem from "./CartItem";
import BottomOfTheSideBarCart from "./BottomOfTheSideBarCart";
import './SidebarCart.scss'

export function SidebarCart(){
    return(
        <div className="overlay">
            <div className="cart">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                 <h2>CART</h2>
                 <CloseIcon fontSize="large"/>
                </div>
                <div className="cartItemBlock">
                 <CartItem />
                 <CartItem />
                 <CartItem />
                </div>
                <div>
                <BottomOfTheSideBarCart />
                </div>
            </div>
        </div>
    )
}

