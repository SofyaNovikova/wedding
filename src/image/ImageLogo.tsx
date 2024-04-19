import * as Image from './wedding.jpg'

import './Imagelogo.css';

export const ImageLogo = () => {
    return (
        <div className="image">
            <img src={Image.default} className="wedding-image" alt='wedding' />
        </div>
    )
}