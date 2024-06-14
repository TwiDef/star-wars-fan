import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiResource } from '@utils/network';
import { GET_CHARACTERS, BASE_IMG_URL } from '@utils/constants';
import { setChars } from '../../redux/slices/charactersSlice';

import Loader from '../Loader/Loader';
import Error from '../Error/Error';

import styles from './Characters.module.css';

const Characters = () => {
  const dispatch = useDispatch()
  const { charactersList } = useSelector(state => state.characters)
  const [apiError, setApiError] = React.useState(false)

  React.useEffect(() => {
    (async () => {
      try {
        const data = await getApiResource(GET_CHARACTERS)
        dispatch(setChars(data.results))
        setApiError(false)
      } catch (error) {
        console.log(error.message)
        setApiError(true)
      }
    })()

  }, [dispatch])

  return (
    <>
      {apiError ?
        <Error /> :
        charactersList && !charactersList.length ?
          <Loader /> :
          <ul className={styles.list}>
            {charactersList && charactersList.map((character, i) =>
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
          </ul>}
    </>
  )
};

export default Characters;