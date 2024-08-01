import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './slices/counterSlice';

function App() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.counterReducer.counter)

  console.log('count', count)




  return (
    <div className="App">
      <h1> Counter using redux toolKit </h1>
      <button onClick={()=>dispatch(decrement())}> - </button>
      <span> {count} </span>
      <button onClick={()=> dispatch(increment())}> + </button>
    </div>
  );
}

export default App;
