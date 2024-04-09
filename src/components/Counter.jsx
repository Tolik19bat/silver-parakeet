import React, {useState} from 'react';

const Counter = function () {
  const [count, setlikes] = useState(5)
  console.log(count);

  const [value, setValue] = useState("Текст в инпуте")

  function increment(params) {
    setlikes(count + 1)
  }

  function decrement(params) {
    setlikes(count - 1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{value}</h1>
        <input 
          type='text' 
          value={value}
          onChange={Event => setValue(Event.target.value)}
        />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default Counter;
