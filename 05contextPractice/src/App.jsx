import { useContext } from 'react';
import './App.css';
import CounterContext from './context/CounterContext';
import CounterButton from './components/CounterButton';

function App() {
  const counterState = useContext(CounterContext);

  console.log("Context", counterState)

  return (
    <>
      <h1> Count is {counterState.count} </h1>
      <div>
          <CounterButton />
          <CounterButton />
          <CounterButton />
          <CounterButton />
      </div>
    </>
  )
}

export default App
