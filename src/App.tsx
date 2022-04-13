import React from 'react';
import { Main } from './view'
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Main />
      <ToastContainer />
    </div>
  );
}

export default React.memo(App);
