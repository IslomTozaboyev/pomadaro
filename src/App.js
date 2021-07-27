import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ClockWidthHook from './components/ClockWidthHook';
import Loading from './components/Loading';
import Pomodaro from './Pomodaro';

function App() {
  return (
    <div className='text-center d-flex justify-content-center align-items-center'>
      {/* <ClockWidthHook/> */}
      {/* <Loading/> */}
      <Pomodaro workTime={25} restTime={5}/>
      {/* <Pomodaro workTime={30} restTime={10}/> */}
    </div>
  );
}

export default App;
