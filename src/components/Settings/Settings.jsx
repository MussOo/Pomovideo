import React, { useState, useContext } from 'react';
import style from './Settings.module.scss';
import { Context } from '../../context/index';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';

export default function Settings() {
  const { state, dispatch } = useContext(Context);

  const { settings } = state;

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div className={settings ? style.container : style.close}>
      <div className={style.container_settings}>
        <div className={style.container_header}>
          <h1 className={style.container_title}>Settings</h1>
          <div>
            <img
              src='https://img.icons8.com/emoji/96/null/cross-mark-button-emoji.png'
              onClick={() => dispatch({ type: 'SETTINGS', settings: !settings })}
              width={45}
            />
          </div>
        </div>
        <div className={style.container_cycle}>
          <label className={style.label_btn_cycle}>
            Nombres de cycle (de 1 a 5): Vous avez choisi {state.cycleset}
          </label>
          <div className={style.container_btn_cycle}>
            <button
              className={style.btn_cycle_item}
              onClick={() => {
                dispatch({ type: 'SET_CYCLE', cycle: 1 });
                dispatch({ type: 'SET_CYCLESET', cycleset: 1 });
              }}
            >
              1
            </button>
            <button
              className={style.btn_cycle_item}
              onClick={() => {
                dispatch({ type: 'SET_CYCLE', cycle: 2 });
                dispatch({ type: 'SET_CYCLESET', cycleset: 2 });
              }}
            >
              2
            </button>
            <button
              className={style.btn_cycle_item}
              onClick={() => {
                dispatch({ type: 'SET_CYCLE', cycle: 3 });
                dispatch({ type: 'SET_CYCLESET', cycleset: 3 });
              }}
            >
              3
            </button>
            <button
              className={style.btn_cycle_item}
              onClick={() => {
                dispatch({ type: 'SET_CYCLE', cycle: 4 });
                dispatch({ type: 'SET_CYCLESET', cycleset: 4 });
              }}
            >
              4
            </button>
            <button
              className={style.btn_cycle_item}
              onClick={() => {
                dispatch({ type: 'SET_CYCLE', cycle: 5 });
                dispatch({ type: 'SET_CYCLESET', cycleset: 5 });
              }}
            >
              5
            </button>
          </div>
        </div>
        <div className={style.container_worktime}>
          WORK TIME
          <Slider
            aria-label='WORK'
            defaultValue={25}
            getAriaValueText={valuetext}
            valueLabelDisplay='auto'
            onChange={(e, value) => {
              console.log(value);
              dispatch({ type: 'SET_WORK', work: value });
              dispatch({ type: 'SET_WORKSET', workset: value });
            }}
            step={5}
            marks
            min={20}
            max={60}
          />
        </div>
        <div className={style.container_break}>
          BREAK TIME
          <Slider
            aria-label='BREAK'
            defaultValue={state.breakset}
            getAriaValueText={valuetext}
            valueLabelDisplay='auto'
            onChange={(e, value) => {
              dispatch({ type: 'SET_BREAK', break: value });
              dispatch({ type: 'SET_BREAK', breakset: value });
            }}
            step={5}
            marks
            min={5}
            max={30}
          />
        </div>
        <div className={style.container_timer}>
          <h3>Type of Timer :</h3>
          <div className={style.container_items_timer}>
            <div className={style.item_timer}>
              <span className={style.item_timer_title}>TIMER</span>
              <div>dpziajdz</div>
            </div>
            <div className={style.item_timer}>
              <span className={style.item_timer_title}>TIMER</span>
              <div>dpziajdz</div>
            </div>
            <div className={style.item_timer}>
              <span className={style.item_timer_title}>TIMER</span>
              <div>dpziajdz</div>
            </div>
          </div>
        </div>
        <div className={style.container_objectif}>OBJECTIFS (Recompences)</div>
        <div className={style.container_sound}>Choix du son Work Time (Pluie, cheminé,)</div>
        <div className={style.container_noise}>Choix de L'alarme (Recompences)</div>
      </div>
    </div>
  );
}
