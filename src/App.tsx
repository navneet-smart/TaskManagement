import React from "react";
import "./App.css";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
};

export default App;
