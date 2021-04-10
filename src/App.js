import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getText } from './redux/actions';

function App() {
  const { text } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(getText());
  };

  return (
    <div className="App">
      <p>{text}</p>
      <p>
        <button onClick={handleClick}>GET TEXT</button>
      </p>
    </div>
  );
}

export default App;
