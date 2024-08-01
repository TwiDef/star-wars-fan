import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_IMG_URL } from '@utils/constants';
import { getNumFromStr } from '@utils/helpers';
import { onSetIndex } from '@redux/slices/pagesSlice';

import Loader from '../Loader/Loader';

import styles from './Favorites.module.css';

const Favorites = () => {
  const { favorites } = useSelector(state => state.characters)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(onSetIndex("fav"))
  }, [])

  return (
    <>
      {favorites.length ?
        (favorites && !favorites.length ?
          <Loader /> :
          <>
            <h3 className={styles.title}>your favorite characters</h3>
            <ul className={styles.list}>
              {favorites && favorites.map((character, i) =>
                <li className={styles.card} key={character + i}>
                  <Link
                    to={`/characters/${getNumFromStr(character.url)}`}
                    className={styles.cardLink}>
                    <div className={styles.nameBlock}>
                      <h4 className={styles.name}>{character.name}</h4>
                    </div>
                    <img
                      className={styles.img}
                      src={`${BASE_IMG_URL}/characters/${getNumFromStr(character.url)}.jpg`}
                      alt="char-img" />
                  </Link>
                </li>
              )}
            </ul>
          </>
        ) :
        <div className={styles.empty}>
          <div >
            <img
              src="https://cdn-icons-png.flaticon.com/512/16177/16177406.png" alt="no-char-img" />
            <h6>you haven't favorites characters</h6>
          </div>
        </div>
      }
    </>
  );
};

export default Favorites;