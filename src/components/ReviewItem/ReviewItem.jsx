import React from 'react';
import iconDelete from '../../images/trash-alt.svg'

const ReviewItem = ({product , handleRemoveFromCart}) => {
   const {name , price , shipping ,quantity ,img  ,id } = product ;

    return (
        <div className='single-product-review-item'>
            <div className="spr-img">
                <img src={img} alt="" />
            </div>
            <div className="spr-content">
                <h4>{name}</h4>
                <p>Price: <span className='orange'>${ price}</span> </p>
                <p>Shipping Charge : <span className="orange">${shipping}</span>  </p>
                <p>Quantyty : <span className="orange">{quantity}</span> </p>
            </div>
            <div className="spr-btn">
                <button onClick={ () => handleRemoveFromCart(id)}><img src={iconDelete} /></button>
            </div>
        </div>
    );
};

export default ReviewItem;