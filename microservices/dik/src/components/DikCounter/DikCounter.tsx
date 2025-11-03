import {useState} from 'react';

const DikCounter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <button onClick={increment}>
      🍆 count is {count}
    </button>
  );
};

export default DikCounter;
