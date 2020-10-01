import React from 'react';
import './nav.css';

const Nav = (props) => {
    return (
        <div className='top'>
            <img className='back' onClick={() => props.goBack()} src='https://user-images.githubusercontent.com/65630204/94823895-60fad980-03d2-11eb-9a09-6352d70d18b2.png' />
            <img className='home' onClick={() => props.goToDash()} src='https://user-images.githubusercontent.com/65630204/94823954-73751300-03d2-11eb-947d-4ede058d4160.png' />
        </div>
    )
}

export default Nav;