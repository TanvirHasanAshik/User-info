import React from 'react';
import './UserData.css';
const UserData = (props) => {
    const {name, email, phone, image} = props.userData;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className="userData">
            <div className="">
                <h2>Name: {name}</h2>
                <p><small>Email: {email}</small></p>
                <p><small>Phone: {phone}</small></p>
            </div>
            <div className="addToCart">
                <button onClick={() =>handleAddToCart(props.userData)}>Add user</button>
            </div>
        </div>
    );
};

export default UserData;