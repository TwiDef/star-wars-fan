import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CharactersPage from './pages/characters-page';

import Header from './components/Header/Header';

import styles from './App.module.css';


function App() {
  const { charactersList } = useSelector(state => state.characters)
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/')
  }, [])

  return (
    <main className={styles.container}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>

      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route path='*' element={<div>Home</div>} />
          <Route path='/characters' element={<CharactersPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
