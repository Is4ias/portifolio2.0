import React, { useRef, useEffect } from 'react';
import propTypes from 'prop-types';


const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.offsetHeight + 'px';
    }

    useEffect(() => {
        setTimeout(initActiveBox, 0);
    }, []);
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';

    }

    const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];


  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
        {navItems.map(({ label, link, className, ref: itemRef }, key) => (
            <a
                href={link}
                key={key}
                ref={itemRef ?? null}
                className={className}
                onClick={activeCurrentLink}
            >
                {label}
            </a>
        ))}
    
        <div 
            className='active-box'
            ref={activeBox}
        ></div>
    </nav>
  )
}

Navbar.propTypes = {
    navOpen: propTypes.bool.isRequired
}

export default Navbar