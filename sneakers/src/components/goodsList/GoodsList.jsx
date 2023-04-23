import React from "react";
import Good from './Good'
import './goodList.scss'
import SearchIcon from '@mui/icons-material/Search';
import { SvgIcon } from "@mui/material";


export function GoodsList(){
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
             <Good />
             <Good />
             <Good />
             <Good />
            </div>
        </div>
    )
}