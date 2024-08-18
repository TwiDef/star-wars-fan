import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiResource } from '@utils/network';
import { GET_SEARCH } from '@utils/constants';
import { setSearchValue, setSearchList } from '@redux/slices/searchSlice';
import { setApiStatus } from '@redux/slices/apiSlice';

import styles from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch()
  const { searchValue } = useSelector(state => state.search)

  const getResponse = async (param) => {
    try {
      const data = await getApiResource(GET_SEARCH + param)
      dispatch(setSearchList(data.results))

      dispatch(setApiStatus(false))
    } catch (error) {
      console.log(error.message)
      dispatch(setApiStatus(true))
    }
  }

  const onChangeInputValue = (e) => {
    dispatch(setSearchValue(e.target.value))
    getResponse(searchValue)
  }

  React.useEffect(() => {
    return () => {
      dispatch(setApiStatus(false))
    }
  }, [])

  return (
    <>
      <input
        className={styles.input}
        value={searchValue}
        onChange={(e) => onChangeInputValue(e)}
        type="text" />
    </>
  );
};

export default Search;