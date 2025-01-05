import React, { useCallback, useEffect } from "react";

const App = () => {
  const [count, setCount] = React.useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  useEffect(() => {
    increment();
  }, [increment]);

  return (
    <div style={{ padding: 12 }}>
      <br />
      <br />
      <h3> This app uses the "eslint-plugin-react-hooks" package as a dev dependencies.</h3>
      <br />
      In the vite.config.ts file, the eslint plugin is added to the plugins array. <br /> On doing
      so the dev server would show the errors and warnings in the run time. <br /> Thats why the
      errors like unused vars would be treated as error so to fix it use this :- <br />
      "@typescript-eslint/no-unused-vars": ["warn"],
    </div>
  );
};

export default App;
