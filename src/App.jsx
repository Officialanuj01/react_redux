// App.js
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterSlice';
import './App.css';

const App = () => {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div className='app-container'>
      <div id='counter'>
        <h1 className='counter-text'>{count}</h1>
        <button className='like-btn' onClick={() => dispatch(increment())}>
          Like
        </button>
        <button className='unlike-btn' onClick={() => dispatch(decrement())}>
          Unlike
        </button>
        <button className='reset-btn' onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
