import React from 'react';
import Cart from '../Cart/Cart';
import fakeData from '../../FakeData/FakeData.json';
import { useEffect, useState } from 'react';
import './User.css';
import UserData from '../UserData/UserData';

const User = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
      setUser(fakeData);
    },[])

    const[cart, setCart] = useState([]);
    const handleAddToCart = (userData) => {
        const newCart =[...cart, userData];
        setCart(newCart);
    }
   
    return (
        <div className="userContainer">
            <div className="userInfo">
                <div>
                    {
                        user.map(userData => <UserData userData={userData} key={userData.id} handleAddToCart={handleAddToCart}></UserData>)
                    }
                </div>
            </div>
            <div className="cartContainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        
    );
};

export default User;