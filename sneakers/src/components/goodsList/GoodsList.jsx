import React from "react";
import Good from './Good'
import './goodList.scss'


export function GoodsList(){
    return(
        <div className="wrapperGoods">
            <h2>All Sneakers</h2>
            <div className="goods">
             <Good/>
            </div>
        </div>
    )
}