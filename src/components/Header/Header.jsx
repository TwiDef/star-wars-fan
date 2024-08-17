import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  const { favorites } = useSelector(state => state.characters)

  const headerItems = [
    {
      children: 'Home',
      to: '/'
    },
    {
      children: 'Characters',
      to: 'characters/?page=1'
    },
    {
      children: 'Films',
      to: 'films'
    },
    {
      children: 'Species',
      to: 'species'
    },
    {
      children: 'Search',
      to: 'search'
    }
  ]

  return (
    <header>
      <nav className={styles.wrapper}>
        <Link
          className={styles.link}
          to="/">
          <img
            className={styles.logo}
            src="https://cdn-icons-png.flaticon.com/512/15475/15475029.png" alt="header-logo" />
        </Link>
        <ul className={styles.items}>
          {headerItems.map((item, i) =>
            <li className={styles.item} key={i}>
              <NavLink
                to={item.to}
                className={({ isActive }) => isActive ? `${styles.itemActive}` : ""}>
                {item.children}
              </NavLink>
            </li>
          )}
        </ul>
        <Link
          className={styles.link}
          to="favorites">
          <span className={styles.countOfFavorites}>{favorites.length}</span>
          <img
            className={styles.favorites}
            src="https://cdn-icons-png.flaticon.com/512/9513/9513598.png " alt="favorites-logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;