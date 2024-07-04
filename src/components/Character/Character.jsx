import React from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleChar } from '@redux/slices/charactersSlice';
import { setApiStatus } from '../../redux/slices/apiSlice';
import { getApiResource } from '@utils/network';
import { BASE_URL, BASE_IMG_URL } from '@utils/constants';
import { getNumFromStr } from '@utils/network';

import Error from '../Error/Error';

import styles from './Character.module.css';

const Character = () => {
  const dispatch = useDispatch()
  const { singleCharacter } = useSelector(state => state.characters)
  const { apiError } = useSelector(state => state.api)
  const params = useParams()
  const id = params.id

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
          <div>
            <p>{singleCharacter.name}</p>
            <img
              src={`${BASE_IMG_URL}/characters/${getNumFromStr(singleCharacter.url)}.jpg`}
              alt="char-img" />
          </div>
          : <p>Loading...</p>}
    </>
  );
};

export default Character;