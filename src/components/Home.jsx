import React, { useState, useEffect, useReducer } from 'react';
import style from './Home.module.scss';
import Navbar from './Navbar/Navbar';
import Pomodoro from './Pomodoro/Pomodoro';
import Settings from './Settings/Settings';
import { Context } from '../context/index';
import { reducer } from '../reducer/reducer';

function Home() {
  let InitialState = {
    settings: false,
    pomodoro: true,
    workset: 25,
    breakset: 1,
    work: 25,
    break: 10,
    breaktime: 'init',
    cycle: 4,
    cycleset: 4,
    isactive: false,
    end: false,
  };

  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className={style.container}>
        <Settings />
        <Navbar />
        <div className={style.container_page}>
          <div className={style.container_cycle}>
            <div className={style.cycle}>
              <div className={style.cycle__title}>CYCLE</div>
              <div className={style.cycle__time}>{state.cycle}</div>
            </div>
          </div>
          <Pomodoro />
        </div>
      </div>
    </Context.Provider>
  );
}

export default Home;
