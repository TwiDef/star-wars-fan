import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiResource } from '@utils/network';
import { BASE_IMG_URL, GET_SEARCH } from '@utils/constants';
import { getNumFromStr } from '@utils/helpers';
import { setSearchValue, setSearchList } from '@redux/slices/searchSlice';
import { setApiStatus } from '@redux/slices/apiSlice';

import SearchCharList from './SearchCharList/SearchCharList';

import styles from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch()
  const { searchValue } = useSelector(state => state.search)

  const getResponse = async (param) => {
    try {
      const data = await getApiResource(GET_SEARCH + param)

      if (data) {
        const list = data.results.map(({ name, url }) => {
          const id = getNumFromStr(url)
          const img = `${BASE_IMG_URL}/characters/${getNumFromStr(url)}.jpg`
          return { id, name, img }
        })
        dispatch(setSearchList(list))
      }

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

  const onClearInput = () => {
    dispatch(setSearchValue(""))
  }

  React.useEffect(() => {
    if (!searchValue) getResponse("")
  }, [searchValue])

  React.useEffect(() => {
    return () => {
      dispatch(setApiStatus(false))
    }
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputBox}>
        <input
          className={styles.input}
          value={searchValue}
          onChange={(e) => onChangeInputValue(e)}
          type="text" />
        <button
          className={styles.inputClearBtn}
          onClick={() => onClearInput()}
        >&#10060;</button>
      </div>
      <SearchCharList />

    </div>
  );
};

export default Search;