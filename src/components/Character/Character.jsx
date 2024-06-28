import React from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleChar } from '@redux/slices/charactersSlice';
import { getApiResource } from '@utils/network';
import { BASE_URL } from '@utils/constants';

import styles from './Character.module.css';

const Character = () => {
  const dispatch = useDispatch()
  const { singleCharacter } = useSelector(state => state.characters)
  const params = useParams()
  const id = params.id

  const getCharacter = async (url) => {
    try {
      const data = await getApiResource(url)
      dispatch(setSingleChar(data))

    } catch (error) {
      console.log(error.message)
    }
  }

  React.useEffect(() => {
    getCharacter(BASE_URL + 'people/' + id)
  }, [id])

  return (
    <div>
      {singleCharacter.name}
    </div>
  );
};

export default Character;