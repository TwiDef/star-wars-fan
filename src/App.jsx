import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import CharactersPage from './pages/characters-page';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import HomePage from './pages/home-page';

import styles from './App.module.css';
import Footer from './components/Footer/Footer';


function App() {
  /* const { charactersList } = useSelector(state => state.characters) */
  const navigate = useNavigate();

  React.useEffect(() => {
    /* navigate('/') */
  }, [])

  return (
    <main className={styles.container}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>

      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='/species' element={<div>Species</div>} />
          <Route path='/starships' element={<div>Starships</div>} />
          <Route path='/search' element={<div>Search</div>} />
          <Route path='/favorites' element={<div>Favorites</div>} />

          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
