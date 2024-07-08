import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleChar } from '@redux/slices/charactersSlice';
import { setApiStatus } from '../../redux/slices/apiSlice';
import { getApiResource } from '@utils/network';
import { BASE_URL, BASE_IMG_URL } from '@utils/constants';
import { getNumFromStr } from '@utils/network';

import Error from '../Error/Error';
import Loader from '../Loader/Loader';

import styles from './Character.module.css';

const Character = () => {
  const dispatch = useDispatch()
  const { singleCharacter } = useSelector(state => state.characters)
  const { apiError } = useSelector(state => state.api)
  const params = useParams()
  const id = params.id
  const navigate = useNavigate()

  const getCharacter = async (url) => {
    try {
      const data = await getApiResource(url)

      if (!data) {
        dispatch(setApiStatus(true))
      } else {
        dispatch(setSingleChar(data))
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
                <h2 className={styles.infoTitle}>Character Info</h2>
                <ul className={styles.infoList}>
                  <li><h4> Height :</h4> {singleCharacter.height} cm</li>
                  <li><h4> Mass :</h4> {singleCharacter.mass} kg</li>
                  <li><h4> Hair color :</h4> {singleCharacter.hair_color}</li>
                  <li><h4> Skin color :</h4> {singleCharacter.skin_color}</li>
                  <li><h4> Eye color :</h4> {singleCharacter.eye_color}</li>
                  <li><h4> Birth year :</h4> {singleCharacter.birth_year}</li>
                  <li><h4> Gender :</h4> {singleCharacter.gender}</li>
                </ul>
              </div>
              <div className={styles.filmInfo}>
                <h2 className={styles.filmTitle}>Episodes</h2>
                <ul>
                  <li>Episode: X</li>
                  <li>Episode: X</li>
                  <li>Episode: X</li>
                  <li>Episode: X</li>
                </ul>
              </div>
            </div>

            <button className={styles.goBackBtn} onClick={() => navigate(-1)}>
              go back
            </button>
          </>
          : <Loader />}
    </>
  );
};

export default Character;