import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './SearchCharList.module.css';

const SearchCharList = () => {
  const { searchList } = useSelector(state => state.search)

  return (
    <ul className={styles.charList}>
      {searchList.length ?
        searchList.map(({ id, name, img }, i) => {
          return (
            <Link
              className={styles.charLink}
              to={`/characters/${id}`}
              key={i}>
              <li className={styles.char} >
                <img className={styles.charImg} src={img} alt="char-img" />
                <h5 className={styles.charName}>{name}</h5>
              </li>
            </Link>
          )
        }) :
        <p>No results</p>}
    </ul>
  );
};

export default SearchCharList;