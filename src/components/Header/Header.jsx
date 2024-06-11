import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  const headerItems = [
    {
      children: 'Home',
      active: false
    },
    {
      children: 'Characters',
      active: false
    },
    {
      children: 'Species',
      active: false
    },
    {
      children: 'Starships',
      active: false
    },
    {
      children: 'Search',
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
            <li className={styles.item} key={i}>
              <a className={styles.itemLink} href="#">
                {item.children}
              </a>
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