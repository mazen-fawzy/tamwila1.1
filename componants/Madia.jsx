// Madia.js

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import "./mail.css"

const Madia = () => {
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
        <Link href={'https://www.facebook.com/profile.php?id=61558957575651'}>facebook</Link>
      </div>
      <div className='mail'>
        <Link href={'https://www.instagram.com/tamwila.official/'}>instagram</Link>
      </div>
      <div className='mail'>
        <Link href={'https://www.instagram.com/tamwila.official/'}>tiktok</Link>
      </div>
      <div className='mail'>
        <Link href={'https://www.linkedin.com/company/tamwila/about/?viewAsMember=true'}>linkedin</Link>
      </div>
    </div>
  );
};

export default Madia;
