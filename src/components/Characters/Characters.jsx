import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiResource, getPageId } from '@utils/network';
import { GET_CHARACTERS, BASE_IMG_URL, PARAM_PAGE } from '@utils/constants';
import { setChars } from '../../redux/slices/charactersSlice';
import { useQueryParams } from '../../hooks/useQueryParams';

import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import PageNavigation from '../PageNavigation/PageNavigation';

import styles from './Characters.module.css';

const Characters = () => {
  const dispatch = useDispatch()
  const { charactersList } = useSelector(state => state.characters)

  const [apiError, setApiError] = React.useState(false)
  const [prevPage, setPrevPage] = React.useState(null)
  const [nextPage, setNextPage] = React.useState(null)
  const [counterPage, setCounterPage] = React.useState(1)
  const queryPage = useQueryParams().get('page')

  const getCharacters = async (url) => {
    try {
      const data = await getApiResource(url)
      dispatch(setChars(data.results))

      setPrevPage(data.previous)
      setNextPage(data.next)
      setCounterPage(getPageId(url))
      setApiError(false)
    } catch (error) {
      console.log(error.message)
      setApiError(true)
    }
  }

  React.useEffect(() => {
    getCharacters(GET_CHARACTERS + PARAM_PAGE + queryPage)
  }, [])

  return (
    <>
      <PageNavigation
        urlAddress='/characters/?page='
        counterPage={counterPage}
        getCharacters={getCharacters}
        prevPage={prevPage}
        nextPage={nextPage}
      />

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