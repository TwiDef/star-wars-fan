import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { onSetIndex } from '../../redux/slices/pagesSlice';

import styles from './Header.module.css';

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
        <Link
          onClick={() => dispatch(onSetIndex(0))}
          className={styles.link}
          to="/">
          <img
            className={styles.logo}
            src="https://cdn-icons-png.flaticon.com/512/15475/15475029.png" alt="header-logo" />
        </Link>
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
        <Link
          className={styles.link}
          to="favorites">
          <span className={styles.countOfFavorites}>3</span>
          <img
            className={styles.favorites}
            src="https://cdn-icons-png.flaticon.com/512/9513/9513598.png " alt="favorites-logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;