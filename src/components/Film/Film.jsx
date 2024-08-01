import React from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getApiResource } from '@utils/network';
import { setSingleFilm } from '@redux/slices/filmsSlice';
import { setApiStatus } from '@redux/slices/apiSlice';
import { GET_FILMS } from '@utils/constants';

const Film = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const filmId = params.id

  const getFilm = async (url) => {
    try {
      const data = await getApiResource(url)
      dispatch(setSingleFilm(data))

      dispatch(setApiStatus(false))
    } catch (error) {
      console.log(error.message)
      dispatch(setApiStatus(true))
    }
  }

  React.useEffect(() => {
    getFilm(`${GET_FILMS}/${filmId}`)
  }, [])

  React.useEffect(() => {
    return () => {
      dispatch(setSingleFilm(null))
      dispatch(setApiStatus(false))
    }
  }, [])

  return (
    <div>

    </div>
  );
};

export default Film;