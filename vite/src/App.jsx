import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    increment();
  }, []);

  return <div>App</div>;
};

export default App;
