import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from "./store";
import './styles.css';

import MiddlePanel from "./components/TopPanel";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MiddlePanel />
        </PersistGate> 
      </Provider> 
     
    </div>
  );
}

export default App;
