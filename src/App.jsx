import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import PeoplePage from './pages/people-page';

function App() {
  const { value } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <main className={styles.container}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>

      <div className={styles.wrapper}>
        <PeoplePage />
      </div>

    </main>
  );
}

export default App;
