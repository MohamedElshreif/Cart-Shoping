import React from 'react'
import '../../css/Components/Header/Header.css';
import {words} from '../../words';

const Header = () => {
  return (
        <header>
            <h2>{words.headerTitle}</h2>
        </header>  
    )
}

export default Header