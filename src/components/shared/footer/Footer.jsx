import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'gatsby';

const cx = classNames.bind(styles);

import twitter from './images/twitter.svg';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import linkedIn from './images/linkedIn.svg';
import youTube from './images/youTube.svg';
import tikTok from './images/tikTok.svg';
import telegram from './images/telegram.svg';
import vk from './images/vk.svg';
import svgHover from './images/svg-hover.svg';
import svgBackground from './images/svg-background.svg';

const Footer = () => {
  return (
    <section className={cx('footer')}>
      <div className={cx('container', 'footer-container')}>
        <ul className={cx('list-links')}>
          <li>
            <Link to="" className={cx('link')}>
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="" className={cx('link')}>
              Cookies
            </Link>
          </li>
          <li>
            <Link to="" className={cx('link')}>
              Contacts
            </Link>
          </li>
          <li>
            <Link to="" className={cx('link')}>
              Careers
            </Link>
          </li>
          <li>
            <Link to="" className={cx('link')}>
              Brand Guide
            </Link>
          </li>
        </ul>
        <div className={cx('wrapper-social')}>
          <p className={cx('text')}>Our social media:</p>
          <ul className={cx('social-list')}>
            <li>
              <Link to="" className={cx('social-link')}>
                <img src={twitter} alt="twitter" />{' '}
                <img src={svgHover} alt="" aria-hidden="true" className={cx('social-link-hover')} />
                <img
                  src={svgBackground}
                  alt=""
                  aria-hidden="true"
                  className={cx('social-link-background')}
                />
              </Link>
            </li>
            <li>
              <Link to="" className={cx('social-link')}>
                <img src={facebook} alt="Facebook" />
                <img src={svgHover} alt="" aria-hidden="true" className={cx('social-link-hover')} />
                <img
                  src={svgBackground}
                  alt=""
                  aria-hidden="true"
                  className={cx('social-link-background')}
                />
              </Link>
            </li>
            <li>
              <Link to="" className={cx('social-link')}>
                <img src={instagram} alt="Instagram" />{' '}
                <img src={svgHover} alt="" aria-hidden="true" className={cx('social-link-hover')} />
                <img
                  src={svgBackground}
                  alt=""
                  aria-hidden="true"
                  className={cx('social-link-background')}
                />
              </Link>
            </li>
            <li>
              <Link to="" className={cx('social-link')}>
                <img src={linkedIn} alt="LinkedIn" />{' '}
                <img src={svgHover} alt="" aria-hidden="true" className={cx('social-link-hover')} />
                <img
                  src={svgBackground}
                  alt=""
                  aria-hidden="true"
                  className={cx('social-link-background')}
                />
              </Link>
            </li>
            <li>
              <Link to="" className={cx('social-link')}>
                <img src={youTube} alt="YouTube" />{' '}
                <img src={svgHover} alt="" aria-hidden="true" className={cx('social-link-hover')} />
                <img
                  src={svgBackground}
                  alt=""
                  aria-hidden="true"
                  className={cx('social-link-background')}
                />
              </Link>
            </li>
            <li>
              <Link to="" className={cx('social-link')}>
                <img src={tikTok} alt="TikTok" />{' '}
                <img src={svgHover} alt="" aria-hidden="true" className={cx('social-link-hover')} />
                <img
                  src={svgBackground}
                  alt=""
                  aria-hidden="true"
                  className={cx('social-link-background')}
                />
              </Link>
            </li>
            <li>
              <Link to="" className={cx('social-link')}>
                <img src={telegram} alt="Telegram" />{' '}
                <img src={svgHover} alt="" aria-hidden="true" className={cx('social-link-hover')} />
                <img
                  src={svgBackground}
                  alt=""
                  aria-hidden="true"
                  className={cx('social-link-background')}
                />
              </Link>
            </li>
            <li>
              <Link to="" className={cx('social-link')}>
                <img src={vk} alt="vk" className={cx('image-icon')} />
                <img src={svgHover} alt="" aria-hidden="true" className={cx('social-link-hover')} />
                <img
                  src={svgBackground}
                  alt=""
                  aria-hidden="true"
                  className={cx('social-link-background')}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
