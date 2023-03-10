import React from 'react';
import { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBBtn,
} from 'mdb-react-ui-kit';
import {FaWpexplorer, FaInfoCircle} from 'react-icons/fa';
import {VscSyncIgnored} from 'react-icons/vsc';
import {MdMenuBook, MdOutlineBedroomParent, MdOutlineContactPhone} from 'react-icons/md';
import {AiFillHome, AiOutlineFileImage, AiOutlineContacts} from 'react-icons/ai';
import {SiAboutdotme, SiBloglovin} from 'react-icons/si';
import {GiNotebook} from 'react-icons/gi';


import './navbar.css';
const Nav = () => {
    
  const [showAnimated3, setShowAnimated3] = useState(false);
   
  return (
    <div>
      <header>
        <nav className='mb-3'>
            <MDBNavbar dark >
              <MDBContainer fluid>
                <MDBNavbarToggler
                  type='button'
                  className='third-button'
                  data-target='#navbarToggleExternalContent'
                  aria-controls='navbarToggleExternalContent'
                  aria-label='Toggle navigation'
                  onClick={() => setShowAnimated3(!showAnimated3)}
                >
                  <div className={`animated-icon3 ${showAnimated3 && 'open'}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </MDBNavbarToggler>
              <div className='d-flex  flex-row justify-content-between'>
                <a className='nav-link text-dark p-1' href='/register'>S'inscrire</a>
                <a className='nav-link text-dark p-1'href='/login'>Login</a>
               
              </div>
              </MDBContainer>
            </MDBNavbar>
            <MDBCollapse show={showAnimated3} id ="class-show">
              <div className='bg-dark d-flex flex-column align-items-start p-5 '>
              
                <a className='text-light' color='link'>
                <AiFillHome/> Acceuil
                </a>
                <a block className='text-light ' color='link'>
                  <FaInfoCircle/> A propos
                </a>
                <a block className='text-light' color='link'>
                  <SiBloglovin/> Blog
                </a>
                <a block className='text-light' color='link'>
                <FaWpexplorer/> Explorez
                </a>
                <a block className='text-light' color='link'>
                  <AiOutlineFileImage/> Galerie
                </a>
                <a block className='text-light' color='link'>
                <AiOutlineContacts/> Nous contacter
                </a> 
                <a block className='text-light' color='link'>
                  < VscSyncIgnored/> Offre et Forfait
                </a>
                <a block className='text-light' color='link'>
                  <MdMenuBook/> Nos Menus
                </a>
                <a block className='text-light' color='link'>
                  <MdOutlineBedroomParent/> Nos chambres
                </a>
                <a block className='text-light' color='link'>
                  <GiNotebook/> T??moignages
                </a>
              </div>
            </MDBCollapse>
        </nav>
      </header>
    </div>
  );
};

export default Nav;