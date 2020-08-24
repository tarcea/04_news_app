import React from 'react';
import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../config';
import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <Link to="/" className={style.logo}>
        <img src="/images/sun.png" alt="logo"/>
      </Link>
      <div className={style.right}>
        @GT {CURRENT_YEAR} All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
