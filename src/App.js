import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/actions';

function App() {
  const { number } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  return (
    <div className="App">
      <p>{number}</p>
      <p>
        <button onClick={handleIncrement}>INCREMENT</button>
      </p>
      <p>
        <button onClick={handleDecrement}>DECREMENT</button>
      </p>
    </div>
  );
}

export default App;
