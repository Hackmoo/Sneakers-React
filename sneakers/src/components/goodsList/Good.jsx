import React from "react";
import './good.scss'
import Button from '@mui/material/Button'

function Good({imgPath = './img/nike-red.png', man = true, name = 'Nike Air Max 180', price = '500'}){
    return (
        <div className="card">
            <img src={imgPath} alt="alt" width={'230px'} height={'220px'}/>
            {man ? (<span>Men's sneakers: <br/>{name}</span>) : (<p>Women's sneakers: <br/>{name}</p>)}
            <div className="text">
              <span className="underGood">Price:  <strong>{price}$</strong></span>
              <Button variant="contained" size="small">Add</Button>
            </div>
        </div>
    )
}

export default Good