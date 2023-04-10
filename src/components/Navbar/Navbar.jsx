import React, { useContext } from 'react';
import style from './navbar.module.scss';
import { Context } from '../../context';
export default function Navbar() {
  const { state, dispatch } = useContext(Context);
  const { settings } = state;
  return (
    <div className={style.navbar_container}>
      <div className={style.navbar_logo}>Pomodoro</div>
      <div className={style.navbar_container_links}>
        <a href='#' className={style.navbar_container_links__link}>
          <img
            className={style.settings}
            src='https://img.icons8.com/color/96/null/gear.png'
            width={40}
            onClick={() => dispatch({ type: 'SETTINGS', settings: !settings })}
          />
        </a>
        <a href='#' className={style.navbar_container_links__link}>
          <img
            className={style.youtube}
            src='https://img.icons8.com/fluency/96/null/youtube-play.png'
            width={40}
          />
        </a>
        <a href='#' className={style.navbar_container_links__link}>
          <img
            className={style.twitter}
            src='https://img.icons8.com/color/96/null/twitter--v1.png'
            width={40}
          />
        </a>
        <a href='#' className={style.navbar_container_links__link}>
          <div className={style.btn_signin}>Sign In</div>
        </a>
      </div>
    </div>
  );
}
