import './foosterstyle.css'
import {SocialIcon} from 'react-social-icons'
function Footer(){
    return (
     <div className='f-container'>
        <div className='f-left'>
            <h1> Holidays </h1>
            <h2> tours</h2>
            <p>
                Travel Enjoy Relax
            </p>
        </div>
        <div className='f-right'>
        <SocialIcon className='ic' url="www.facebook.com"/>
        <SocialIcon className='ic' url="www.whatsapp.com"/>
        <SocialIcon className='ic' url="www.instagram.com"/>
        <SocialIcon className='ic' url="www.twitter.com"/>
        </div>
     </div>
    );
}

export default Footer;