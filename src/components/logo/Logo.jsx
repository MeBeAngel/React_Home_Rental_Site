import React from 'react';
import Classes from './Logo.module.scss';
import LogoImage from '../../assets/images/logo/logo.png';


export default function Logo() {
return ( <div className={Classes.logo_image}> <img src={LogoImage} alt="logo" /> </div> );
}