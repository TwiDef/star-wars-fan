import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiResource } from '@utils/network';
import { GET_CHARACTERS, BASE_IMG_URL, PARAM_PAGE } from '@utils/constants';
import { setChars } from '../../redux/slices/charactersSlice';
import { useQueryParams } from '../../hooks/useQueryParams';

import Loader from '../Loader/Loader';
import Error from '../Error/Error';

import styles from './Characters.module.css';
import { useLocation } from 'react-router';

const Characters = () => {
  const dispatch = useDispatch()
  const { charactersList } = useSelector(state => state.characters)
  const [apiError, setApiError] = React.useState(false)
  const [prevPage, setPrevPage] = React.useState(null)
  const [nextPage, setNextPage] = React.useState(null)
  /* const queryPage = useQueryParams().get('page') */
  const [queryPage, setQueryPage] = React.useState(useQueryParams().get('page'))

  console.log(queryPage)

  const getCharacters = async () => {
    try {
      const data = await getApiResource(GET_CHARACTERS + PARAM_PAGE + queryPage)
      dispatch(setChars(data.results))

      setPrevPage(data.previous)
      setNextPage(data.next)
      setApiError(false)
    } catch (error) {
      console.log(error.message)
      setApiError(true)
    }
  }

  React.useEffect(() => {
    getCharacters()
  }, [queryPage])

  /*   const onChangePage = async (url) => {
      if (url) {
        const data = await getApiResource(url)
        dispatch(setChars(data.results))
  
        setPrevPage(data.previous)
        setNextPage(data.next)
        setApiError(false)
      }
    } */


  return (
    <>
      <div>
        <button
          disabled={!prevPage ? true : false}
          onClick={() => setQueryPage(prev => (+prev) - 1)}>prev</button>
        <button
          disabled={!nextPage ? true : false}
          onClick={() => setQueryPage(prev => (+prev) + 1)}>next</button>
      </div>

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