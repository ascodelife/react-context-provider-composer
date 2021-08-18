import { useContext } from "react";
import { LoadingContext, UserDataContext, ThemeContext } from "./Context";

const Child = () => {
  const { loading } = useContext(LoadingContext);
  const { name } = useContext(UserDataContext);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h2>You get the values from all context!</h2>
      <p>loading : {String(loading)}</p>
      <p>name : {name}</p>
      <p>theme : {theme}</p>
    </div>
  );
};

export default Child;
