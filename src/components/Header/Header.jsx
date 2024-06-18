import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSetIndex } from '../../redux/slices/pagesSlice';

import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const { activePage } = useSelector(state => state.pages)
  const dispatch = useDispatch()

  const headerItems = [
    {
      children: 'Home',
      to: '/',
      active: false
    },
    {
      children: 'Characters',
      to: 'characters',
      active: false
    },
    {
      children: 'Species',
      to: 'species',
      active: false
    },
    {
      children: 'Starships',
      to: 'starships',
      active: false
    },
    {
      children: 'Search',
      to: 'search',
      active: false
    }
  ]

  return (
    <header>
      <nav className={styles.wrapper}>
        <a
          className={styles.link}
          href="#">
          <img
            className={styles.logo}
            src="https://cdn-icons-png.flaticon.com/512/15475/15475029.png" alt="header-logo" />
        </a>
        <ul className={styles.items}>
          {headerItems.map((item, i) =>
            <li className={`${styles.item} ${activePage === i ? styles.itemActive : ""}`} key={i}>
              <Link
                to={item.to}
                onClick={() => dispatch(onSetIndex(i))}
                className={styles.itemLink}>
                {item.children}
              </Link>
            </li>
          )}
        </ul>
        <a
          className={styles.link}
          href="#">
          <span className={styles.countOfFavorites}>3</span>
          <img
            className={styles.favorites}
            src="https://cdn-icons-png.flaticon.com/512/9513/9513598.png " alt="favorites-logo" />
        </a>
      </nav>
    </header>
  );
};

export default Header;