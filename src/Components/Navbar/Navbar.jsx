import React, { useState } from 'react'; // Import useState from React
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = () => {

  const [menu, setMenu] = useState("Home");

  return (
    <div className='Navbar'>
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li onClick={() => setMenu("Home")}>
          <AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>
          {menu === "Home" ? <img src={underline} alt='Underline' /> : null}
        </li>
        <li onClick={() => setMenu("About")}>
          <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>
          {menu === "About" ? <img src={underline} alt='Underline' /> : null}
        </li>
        <li onClick={() => setMenu("Services")}>
          <AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>
          {menu === "Services" ? <img src={underline} alt='Underline' /> : null}
        </li>
        <li onClick={() => setMenu("Portfolio")}>
          <AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>
          {menu === "Portfolio" ? <img src={underline} alt='Underline' /> : null}
        </li>
        <li onClick={() => setMenu("Contact")}>
          <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>
          {menu === "Contact" ? <img src={underline} alt='Underline' /> : null}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default NavBar;
