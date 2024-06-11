import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiResource } from '../../utils/network';
import { GET_CHARACTERS, BASE_IMG_URL } from '../../constants';
import { setChars } from '../../redux/slices/charactersSlice';

import styles from './Characters.module.css';
import Loader from '../Loader/Loader';

const Characters = () => {
  const dispatch = useDispatch()
  const { charactersList } = useSelector(state => state.characters)

  React.useEffect(() => {
    getApiResource(GET_CHARACTERS)
      .then(data => dispatch(setChars(data.results)))
  }, [dispatch])

  return (
    <>
      {!charactersList.length ?
        <Loader /> :
        <ul className={styles.list}>
          {charactersList.map((character, i) =>
            <li className={styles.card} key={character + i}>
              <a onClick={() => console.log(character)} className={styles.cardLink} href="#">
                <div className={styles.nameBlock}>
                  <h4 className={styles.name}>{character.name}</h4>
                </div>
                <img
                  className={styles.img}
                  src={`${BASE_IMG_URL}/characters/${(character.url)
                    .replace(/[^0-9]/g, '')}.jpg`}
                  alt="char-img" />
              </a>
            </li>
          )}
        </ul>
      }
    </>
  )
};

export default Characters;