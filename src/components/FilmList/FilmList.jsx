import React from 'react';
import { BASE_IMG_URL } from '@utils/constants';
import { getNumFromStr } from '@utils/helpers';

import styles from './FilmList.module.css';

const FilmList = ({ films }) => {

  return (
    <ul className={styles.list}>
      {films && films.length > 0 ? films.map(({ url, episode_id, title }, i) => {
        return (
          <li key={i}>
            <a className={styles.link} href="#" >
              <div className={styles.imgWrapper}>
                <img src={`${BASE_IMG_URL}/films/${getNumFromStr(url)}.jpg`} alt="film-img" />
              </div>
              <div>
                <h5>Episode: {episode_id}</h5>
                <h6 className={styles.title}>{title}</h6>
              </div>
            </a>
          </li>
        )
      }) : <div>Loading...</div>}
    </ul>
  );
};

export default FilmList;