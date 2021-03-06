import React,{ useContext } from 'react';
import UserContext from '../context/UserContext';
import styled from '../css/ComponentsCSS/Footer.module.css';

const Footer = (props) => {
    
    const { userIDs } = useContext(UserContext)

    return(
        <>
            {
                userIDs ? <footer className={styled.footer}>
                    ™2022 by <a href="https://github.com/lisabroadhead" target="_blank" rel="noindex,nofollow">Lisa Broadhead</a> - Coding Dojo MERN project - <span>Sibs</span>: Family Address Book
                </footer> : ""
            }
        </>
    )
}

export default Footer;