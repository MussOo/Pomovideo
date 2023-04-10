import React, { useState, useEffect, useContext } from 'react';
import style from './Pomodoro.module.scss';
import { Context } from '../../context/index';
import Break from './Break/Break';
export default function Pomodoro() {
  const { state, dispatch } = useContext(Context);

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (state.cycle == 0) {
      dispatch({ type: 'RESET_WORK' });
      setSeconds(0);
      console.log("c'est fini frero");
      dispatch({ type: 'SET_ISACTIVE', isactive: false });
    }
    if (state.cycle > 0 && state.breaktime == false) {
      dispatch({ type: 'RESET_WORK' });
      setSeconds(0);
      dispatch({ type: 'SET_ISACTIVE', isactive: true });
    }
  }, [state.breaktime]);

  useEffect(() => {
    let interval = null;

    if (state.isactive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          dispatch({ type: 'DECREMENT_WORK' });
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }

        if (state.work === 0 && seconds === 0) {
          dispatch({ type: 'SET_BREAKSET', breaktime: true });
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [seconds, state.work, state.isactive, dispatch]);

  function resetInterval() {
    dispatch({ type: 'RESET_WORK' });
    setSeconds(0);
    dispatch({ type: 'SET_BREAK', break: state.breakset });
    dispatch({ type: 'SET_CYCLE', cycle: state.cycleset });
    dispatch({ type: 'SET_ISACTIVE', isactive: false });
  }
  return state.breaktime == true ? (
    <Break />
  ) : (
    <div className={style.pomodoro_container}>
      <div className={style.pomodoro_timer}>
        <div className={style.pomodoro_timer__title}>WORK TIME</div>
        <div className={style.pomodoro_timer__time}>
          {state.work}:{seconds}
        </div>
      </div>
      <div className={style.buttons}>
        <button
          className={style.start}
          disabled={state.isactive || state.cycle <= 0}
          onClick={() => {
            console.log('Starting');
            dispatch({ type: 'SET_ISACTIVE', isactive: true });
          }}
        >
          Start
        </button>
        <button
          className={style.stop}
          disabled={!state.isactive}
          onClick={() => {
            dispatch({ type: 'SET_ISACTIVE', isactive: false });
          }}
        >
          Stop
        </button>
        <button
          className={style.reset}
          disabled={state.isactive}
          onClick={() => {
            console.log(state);
            dispatch({ type: 'RESET_ALL' });
            setSeconds(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
