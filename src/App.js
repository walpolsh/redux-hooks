import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import Name from "./components/Name";
import { store } from "./store/index";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <Provider store={store}>
      <Gallery />
      <Counter />
      <Name />
    </Provider>
  );
}
export default App;
