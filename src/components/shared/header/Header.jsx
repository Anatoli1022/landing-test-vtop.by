import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'gatsby';
const cx = classNames.bind(styles);

import planet from './images/planet.svg';
import Menu from 'hooks/menu';

const Header = () => (
  <section className={cx('header')}>
    <div className={cx('container', 'header-container')}>
      <nav className={cx('navigation')}>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Link to="" className={cx('link')}>
              About us
            </Link>
          </li>
          <li className={cx('item')}>
            <Link to="" className={cx('link')}>
              Brands
            </Link>
          </li>
          <li className={cx('item')}>
            <Link to="" className={cx('link')}>
              Commissions
            </Link>
          </li>
          <li className={cx('item')}>
            <Link to="" className={cx('link')}>
              News
            </Link>
          </li>
          <li className={cx('item')}>
            <Link to="" className={cx('link')}>
              Contact us
            </Link>
          </li>
          <li className={cx('item')}>
            <Link to="" className={cx('link')}>
              Careers
            </Link>
          </li>
        </ul>
        <div className={cx('wrapper-buttons')}>
          <button className={cx('button-lang', 'button')}>
            {' '}
            <img src={planet} alt="" className={cx('image-planet')} />
            <span className={cx('button-lang-text')}>en</span>
          </button>
          <button className={cx('button-login', 'button')}>log in</button>
          <button className={cx('button-sing', 'button')}>sing up</button>
          <Menu />
        </div>
      </nav>
    </div>
  </section>
);

export default Header;
