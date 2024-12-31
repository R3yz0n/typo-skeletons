import React, { useEffect, useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  const fetchSomething = async () => {
    console.log("fetching something");
  };
  useEffect(() => {
    if (true) {
      fetchSomething();
      setCount(count + 1);
    }
  }, []);
  return <div>ss</div>;
};

export default App;
