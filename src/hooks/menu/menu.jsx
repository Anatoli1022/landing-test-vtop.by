import React, { useState, useEffect } from 'react';

import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import Link from 'components/shared/link';

const cx = classNames.bind(styles);

const Menu = () => {
  const [menu, setMenu] = useState('');
  const [navigation, setNavigation] = useState('');

  const updateMenu = () => {
    if (menu === '') {
      setMenu('active');
      setNavigation('active');
    } else {
      setMenu('');
      setNavigation('active');
    }
  };

  useEffect(() => {
    if (menu === 'active') {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menu]);

  return (
    <div>
      <button className={cx('menu', { active: menu === 'active' })} onClick={updateMenu}>
        <div className={cx('menu-button')}></div>
        <div className={cx('menu-button')}></div>
        <div className={cx('menu-button')}></div>
      </button>
      <nav className={cx('navigation', { active: menu === 'active' })}>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Link to="" className={cx('item-link')}>
              About us
            </Link>
          </li>
          <li className={cx('item')}>
            <Link to="" className={cx('item-link')}>
              Brands
            </Link>
          </li>
          <li className={cx('item')}>
            <Link to="" className={cx('item-link')}>
              Commissions
            </Link>
          </li>
          <li className={cx('item')}>
            <Link to="" className={cx('item-link')}>
              News
            </Link>
          </li>
          <li className={cx('item')}>
            <Link to="" className={cx('item-link')}>
              Contact us
            </Link>
          </li>
          <li className={cx('item')}>
            <Link to="" className={cx('item-link')}>
              Careers
            </Link>
          </li>
        </ul>
        <div className={cx('buttons-wrapper')}>
          <button className={cx('button-login')}>log in</button>{' '}
          <button className={cx('button-sign')}>sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
