import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ClockWidthHook from './components/ClockWidthHook';
import Loading from './components/Loading';
import Pomodaro from './Pomodaro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='App'>
      <div className="container d-flex justify-content-between align-items-center text-white my-4">
        <h2 className="fw-bold">Pomadaro Clock</h2>
        <FontAwesomeIcon className="fw-bold fs-4" icon={faBars}/>
      </div>
      {/* <ClockWidthHook/> */}
      {/* <Loading/> */}
      {/* <Pomodaro workTime={30} restTime={10}/> */}
    <div className='text-center d-flex justify-content-center align-items-center'>
        <Pomodaro workTime={25} restTime={5}/>
    </div>
    </div>
  );
}

export default App;
