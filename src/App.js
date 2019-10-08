import React from "react";
import { Provider } from "react-redux";
import { store } from "./reducers";
import Counter from "./components/Counter";
import Name from "./components/Name";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Name />
    </Provider>
  );
}
export default App;
