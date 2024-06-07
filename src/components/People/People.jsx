import React from 'react';
import { getApiResource } from '../../utils/network';
import { GET_CHARACTERS } from './../../constants';

import styles from './People.module.css';

const People = () => {
  const [characterList, setCharacterList] = React.useState([])

  React.useEffect(() => {
    getApiResource(GET_CHARACTERS)
      .then(data => setCharacterList(data.results))
  }, [])

  console.log(characterList)

  return (
    <div>
      <ul>
        {characterList && characterList.map((character, i) =>
          <li key={character + i}>
            {character.name}
          </li>
        )}
      </ul>
    </div>
  );
};

export default People;