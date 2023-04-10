import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../../context';
import style from './Break.module.scss';
export default function Break() {
  const { state, dispatch } = useContext(Context);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(state.break);
  const [Start, setStart] = useState(true);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (Start) {
      setMinutes(0);
      setSeconds(2);
    }
    setStart(false);
    let interval = null;

    if (state.isactive) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          if (state.cycle == 1) {
            dispatch({ type: 'IS_END', breaktime: true });
          }

          dispatch({ type: 'SET_BREAKSET', breaktime: false });
          dispatch({ type: 'DECREMENT_CYCLE' });
        }
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [seconds, minutes, dispatch, state.isactive]);

  return (
    <div className={style.pomodoro_container}>
      <div className={style.pomodoro_timer}>
        <div className={style.pomodoro_timer__title}>BREAK TIME</div>
        <div className={style.pomodoro_timer__time}>
          {minutes}:{seconds}
        </div>
      </div>
      <div className={style.buttons}>
        <button
          className={style.start}
          disabled={isActive}
          onClick={() => {
            console.log('Starting');
            setIsActive(true);
          }}
        >
          Start
        </button>
        <button
          className={style.stop}
          disabled={!isActive}
          onClick={() => {
            setIsActive(false);
          }}
        >
          Stop
        </button>
        <button
          className={style.reset}
          disabled={isActive}
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
