import React from "react";
import './CartItem.scss'
import CloseIcon from '@mui/icons-material/Close';


function CartItem({imgPath = './img/nike-red.png', man = true, name = 'Nike Air Max 180', price = '500'}){
    return(
        <div className="cartItem">
            <div className="text">
            <div style={{ backgroundImage: 'url(/img/nike-red.png)'}} className="cartItemImage"></div>
            <div className="name">
                {man ? <p>Men's sneaker: <br /> {name}</p>
                : <p>Women's sneaker: <br /> {name}  </p>
                }
                <strong>{price}$</strong>
            </div>
            </div>
            <div>
            <button><CloseIcon fontSize="small"/></button>
            </div>
        </div>
    )
}

export default CartItem