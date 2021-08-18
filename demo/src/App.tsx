import { useState } from "react";
import ContextComposer from "@ascodelife/react-context-provider-composer";
import { LoadingContext, UserDataContext, ThemeContext } from "./Context";
import Child from "./Child";

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <ContextComposer
      contexts={[
        <LoadingContext.Provider value={{ loading, setLoading }} />,
        <UserDataContext.Provider value={{ name: "ascodelife", age: 25 }} />,
        <ThemeContext.Provider value={"light"} />,
      ]}
    >
      <Child />
    </ContextComposer>
  );
};

export default App;
