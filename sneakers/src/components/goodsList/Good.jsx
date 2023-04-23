import React from "react";
import './good.scss'
import Button from '@mui/material/Button'
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { SvgIcon } from "@mui/material";

function Good({imgPath = './img/nike-red.png', man = true, name = 'Nike Air Max 180', price = '500'}){
    return (
        <div className="card">
            <SvgIcon style={{padding: '5px 0 0 10px'}}><FavoriteBorderIcon/></SvgIcon>
            <img src={imgPath} alt="alt" width={'230px'} height={'220px'}/>
            {man ? (<span>Men's sneakers: <br/>{name}</span>) : (<p>Women's sneakers: <br/>{name}</p>)}
            <div className="text">
              <span className="underGood">Price:  <strong>{price}$</strong></span>
              <Button variant="contained" size="small"><AddIcon/></Button>
            </div>
        </div>
    )
}

export default Good