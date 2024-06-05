// Mail.js

import Link from 'next/link';
import './mail.css';
import React, { useState, useEffect } from 'react';

const Mail = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`Mail ${isScrolled ? 'scrolled' : ''}`}>
      <div className='mail'>
        <Link href={'mailto:support@tamwila.site'}>support</Link>
      </div>
      <div className='mail'>
        <Link href={'mailto:info@tamwila.site'}>info</Link>
      </div>
      <div className='mail'>
        <Link href={'mailto:partners@tamwila.site'}>partners</Link>
      </div>
      <div className='mail'>
        <Link href={'mailto:contact@tamwila.site'}>contact</Link>
      </div>
    </div>
  );
};

export default Mail;
