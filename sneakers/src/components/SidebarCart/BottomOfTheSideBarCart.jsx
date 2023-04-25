import React from "react";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './BottomOfTheSideBarCart.scss'
import { SvgIcon } from "@mui/material";

function BottomOfTheSideBarCart(){
    return(
        <div className="BottomOfTheSideBarCart">
         <ul>
            <li>
                <span>Total:</span>
                <div></div>
                <strong>1499$</strong>
            </li>
            <li>
                <span>Fee 5%:</span>
                <div></div>
                <strong>1499$</strong>
            </li>
         </ul>
         <button>
            Make An Order
            <SvgIcon className="icon"><ArrowForwardIcon /></SvgIcon>
            </button>
        </div>
    )
}

export default BottomOfTheSideBarCart