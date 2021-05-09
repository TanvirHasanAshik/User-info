import React from 'react';

const Cart = (props) => {
    console.log(props.cart)
    const totalUser = props.cart
    return (
        <div>
           <div className="userCount">
                <h3>Total User Adedd: {totalUser.length}</h3> <hr />
           </div>
           <div className="totalUser">
                {
                    totalUser.map(total => <div>
                        <h3>Name: {total.name}</h3>
                        <p>phone: {total.phone}</p>
                    </div>)
                }
           </div>
        </div>
    );
};

export default Cart;