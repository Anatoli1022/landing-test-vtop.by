import React from 'react';
import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import { Link } from 'gatsby';

const cx = classNames.bind(styles);

import timer from './images/timer.svg';
import crown from './images/crown.svg';
import world from './images/world.svg';
import worldMobile from './images/world-mobile.svg';
import m from './images/m.svg';
import mGreen from './images/m-green.svg';
import shield from './images/shield.svg';
import soccer from './images/soccer.svg';
import dollar from './images/dollar.svg';
import dollarMobile from './images/dollar-mobile.svg';
import mBlue from './images/m-blue.svg';
import soccerOrange from './images/soccer-orange.svg';
import { StaticImage } from 'gatsby-plugin-image';
const Hero = () => (
  <section className={cx('hero')}>
    <div className={cx('container', 'hero-container')}>
      <div className={cx('content-left')}>
        <h1 className={cx('title')}>
          house of <span className={cx('title-span')}>gambling</span>
        </h1>
        <p className={cx('text')}>Raise your ROI with direct advertiser</p>
        <Link to="" className={cx('link')}>
          Become a Partner
        </Link>
      </div>
      <div className={cx('wrapper')}>
        <div className={cx('wrapper-images')}>
          <img src={shield} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={dollar} alt="" aria-hidden="true" className={cx('image-desktop')} />
          <img src={dollarMobile} alt="" aria-hidden="true" className={cx('image-mobile')} />
          <img src={soccer} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={mGreen} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={shield} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={dollar} alt="" aria-hidden="true" className={cx('image-desktop')} />
          <img src={dollarMobile} alt="" aria-hidden="true" className={cx('image-mobile')} />
          <img src={soccer} alt="" aria-hidden="true" className={cx('standart-image')} />
        </div>
        <div className={cx('wrapper-images')}>
          <img src={m} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={timer} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={crown} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={world} alt="" aria-hidden="true" className={cx('image-desktop')} />
          <img src={worldMobile} alt="" aria-hidden="true" className={cx('image-mobile')} />
          <img src={m} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={timer} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={crown} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={world} alt="" aria-hidden="true" className={cx('image-desktop')} />
          <img src={worldMobile} alt="" aria-hidden="true" className={cx('image-mobile')} />
        </div>
        <div className={cx('wrapper-images')}>
          <img src={crown} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={mBlue} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={shield} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={soccerOrange} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={shield} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={crown} alt="" aria-hidden="true" className={cx('standart-image')} />
          <img src={mBlue} alt="" aria-hidden="true" className={cx('standart-image')} />{' '}
          <img src={soccerOrange} alt="" aria-hidden="true" className={cx('standart-image')} />{' '}
          <img src={crown} alt="" aria-hidden="true" className={cx('standart-image')} />
        </div>
      </div>

      <div className={cx('wrapper-blog')}>
        <h2 className={cx('title-blog')}>Blog</h2>
        <div className={cx('blog-content')}>
          <ul className={cx('list')}>
            <li className={cx('item')}>
              <Link to="">
                <p className={cx('blog-text')}>
                  Payment methods: Skrill, Neteller, webmoney, Bank transfer
                </p>
                <span className={cx('date')}>10.02.202</span>
              </Link>
            </li>
            <li className={cx('item')}>
              <Link to="">
                <p className={cx('blog-text')}>
                  Payment methods: Skrill, Neteller, webmoney, Bank transfer
                </p>
                <span className={cx('date')}>10.02.202</span>
              </Link>
            </li>
            <li className={cx('item')}>
              <Link to="">
                <p className={cx('blog-text')}>
                  Payment methods: Skrill, Neteller, webmoney, Bank transfer
                </p>
                <span className={cx('date')}>10.02.202</span>
              </Link>
            </li>
            <li className={cx('item')}>
              <Link to="">
                <p className={cx('blog-text')}>
                  Payment methods: Skrill, Neteller, webmoney, Bank transfer
                </p>
                <span className={cx('date')}>10.02.202</span>
              </Link>
            </li>

            <li className={cx('item')}>
              <Link to="">
                <p className={cx('blog-text')}>
                  Payment methods: Skrill, Neteller, webmoney, Bank transfer
                </p>
                <span className={cx('date')}>10.02.202</span>
              </Link>
            </li>
            <li className={cx('item')}>
              <Link to="">
                <p className={cx('blog-text')}>
                  Payment methods: Skrill, Neteller, webmoney, Bank transfer
                </p>
                <span className={cx('date')}>10.02.202</span>
              </Link>
            </li>
            <li className={cx('item')}>
              <Link to="">
                <p className={cx('blog-text')}>
                  Payment methods: Skrill, Neteller, webmoney, Bank transfer
                </p>
                <span className={cx('date')}>10.02.202</span>
              </Link>
            </li>
            <li className={cx('item')}>
              <Link to="">
                <p className={cx('blog-text')}>
                  Payment methods: Skrill, Neteller, webmoney, Bank transfer
                </p>
                <span className={cx('date')}>10.02.202</span>
              </Link>
            </li>
            <li className={cx('item')}>
              <Link to="">
                <p className={cx('blog-text')}>
                  Payment methods: Skrill, Neteller, webmoney, Bank transfer
                </p>
                <span className={cx('date')}>10.02.202</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('line')}>
        <StaticImage src="./images/mask-line.jpg" aria-hidden="true" />
      </div>
    </div>
  </section>
);

export default Hero;
