import * as Image from './rings.png'

import './Header.css';

export const Header = () => {
    return (
        <div className="header">
            <img src={Image.default} className="header-image" alt='rings' />
            <p className="header-title">Sonya & Sergey</p>
        </div>
    )
}