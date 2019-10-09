import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import Name from "./components/Name";
import { store } from "./store";

const baseURL = "https://cat-fact.herokuapp.com/facts";
const randomCat = "/random";
const amountOfCats = x => `?animal_type=cat&amount=${x}`;

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Name />
    </Provider>
  );
}
export default App;
