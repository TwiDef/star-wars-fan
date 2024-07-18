import React from 'react';
import { BASE_IMG_URL } from '@utils/constants';
import { getNumFromStr } from '@utils/network';

import styles from './FilmList.module.css';

const FilmList = ({ films }) => {

  return (
    <ul className={styles.list}>
      {films && films.length > 0 ? films.map((film, i) => {
        return (
          <li key={i}>
            <a className={styles.link} href="#" >
              <img src={`${BASE_IMG_URL}/films/${getNumFromStr(film.url)}.jpg`} alt="film-img" />
              <div>
                <h5>Episode: {film.episode_id}</h5>
                <h6 className={styles.title}>{film.title}</h6>
              </div>
            </a>
          </li>
        )
      }) : <div>Loading...</div>}
    </ul>
  );
};

export default FilmList;