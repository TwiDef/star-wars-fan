import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleChar } from '@redux/slices/charactersSlice';
import { setApiStatus } from '@redux/slices/apiSlice';
import { getApiResource, getApiResources } from '@utils/network';
import { BASE_URL, BASE_IMG_URL } from '@utils/constants';
import { getNumFromStr } from '@utils/network';

import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import FilmList from '../FilmList/FilmList';

import styles from './Character.module.css';

const Character = () => {
  const dispatch = useDispatch()
  const { singleCharacter } = useSelector(state => state.characters)
  const { apiError } = useSelector(state => state.api)
  const [charInfo, setCharInfo] = React.useState(null)
  const [films, setFilms] = React.useState([])
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id

  const getCharacter = async (url) => {
    try {
      const data = await getApiResource(url)

      if (!data) {
        dispatch(setApiStatus(true))
      } else {
        dispatch(setSingleChar(data))
        setCharInfo([
          { property: 'height', evidence: data.height },
          { property: 'mass', evidence: data.mass },
          { property: 'hair color', evidence: data.hair_color },
          { property: 'skin color', evidence: data.skin_color },
          { property: 'eye color', evidence: data.eye_color },
          { property: 'birth year', evidence: data.birth_year },
          { property: 'gender', evidence: data.gender }
        ])
        dispatch(setApiStatus(false))
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  React.useEffect(() => {
    getCharacter(BASE_URL + 'people/' + id)
    return () => {
      dispatch(setSingleChar(null))
    }
  }, [id])

  React.useEffect(() => {
    if (singleCharacter) {
      getApiResources(singleCharacter.films)
        .then(films => setFilms(films))
    }
  }, [singleCharacter])

  return (
    <>
      {apiError ? <Error /> :
        singleCharacter ?
          <>
            <div className={styles.wrapper}>
              <div className={styles.image}>
                <h2 className={styles.title}>{singleCharacter.name}</h2>
                <button>
                  <img className={styles.like}
                    src="https://cdn-icons-png.flaticon.com/512/833/833472.png " alt="like" />
                </button>
                <img
                  src={`${BASE_IMG_URL}/characters/${getNumFromStr(singleCharacter.url)}.jpg`}
                  alt="char-img" />
              </div>
              <div className={styles.info}>
                <h2 className={styles.infoTitle}>Info</h2>
                <ul className={styles.infoList}>
                  {charInfo && (
                    charInfo.map(({ property, evidence }, i) => {
                      return (
                        <li key={i}>
                          <h4>{property}: </h4>{evidence}
                          {property === 'height' ? ' cm' : ''}
                          {property === 'mass' ? ' kg' : ''}
                        </li>)
                    })
                  )}
                </ul>
              </div>
              <div className={styles.filmInfo}>
                <h2 className={styles.filmTitle}>Episodes</h2>
                <FilmList films={films} />
              </div>
            </div>

            <button className={styles.goBackBtn} onClick={() => navigate(-1)}>
              <span>&#8592; </span>go back
            </button>
          </>
          : <Loader />}
    </>
  );
};

export default Character;