import React from "react";
import Good from './Good'
import './goodList.scss'
import SearchIcon from '@mui/icons-material/Search';
import { SvgIcon } from "@mui/material";


export function GoodsList(){
    const testArr = [
       {name: 'asdsad', price: '300'},
       {name: 'aboba', price: '400'},
       {name: 'test', price: 'uuuu'},
       {name: 'hahaha woman', man: false, price: '10'}
    ]
    return(
        <div className="wrapperGoods">
            <div className="searcher">
            <h1>All Sneakers</h1>
             <div className="search-block">
              <SvgIcon fontSize="medium" className="search-icon"><SearchIcon/></SvgIcon>
              <input type="text" placeholder="Search..." />
             </div>
            </div>
            <div className="goods">
             {testArr.map((el) => 
                <Good name={el.name} price={el.price} man={el.man}/>
             )}
            </div>
        </div>
    )
}