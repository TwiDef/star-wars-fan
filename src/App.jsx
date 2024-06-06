import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import { getApiResource } from './utils/network';

function App() {
  const { value } = useSelector(state => state.counter)
  const dispatch = useDispatch()


  return (
    <div className={styles.container}>
      <h1 className={styles.header}>text</h1>
    </div>
  );
}

export default App;
