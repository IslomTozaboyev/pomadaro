import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ClockWidthHook from './components/ClockWidthHook';
import Loading from './components/Loading';

function App() {
  return (
    <div className='text-center'>
      {/* <ClockWidthHook/> */}
      <Loading/>
    </div>
  );
}

export default App;
