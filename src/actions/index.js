export const actions = {
  SETTINGS: 'SETTINGS',
  SET_BREAK: 'SET_BREAK',
  SET_WORK: 'SET_WORK',
  SET_WORKSET: 'SET_WORKSET',
  DECREMENT_WORK: 'DECREMENT_WORK',
  SET_BREAK: 'SET_BREAK',
  SET_BREAKSET: 'SET_BREAKSET',
  DECREMENT_BREAK: 'DECREMENT_BREAK',
  RESET_WORK: 'RESET_WORK',
  SET_CYCLE: 'SET_CYCLE',
  SET_CYCLESET: 'SET_CYCLESET',
  DECREMENT_CYCLE: 'DECREMENT_CYCLE',
  SET_ISACTIVE: 'SET_ISACTIVE',
  IS_END: 'IS_END',
  RESET_ALL: 'RESET_ALL',
};

export function setSettings(settings) {
  return {
    type: actions.SETTINGS,
    payload: settings,
  };
}

export function setBreak(breakLength) {
  return {
    type: actions.SET_BREAK,
    payload: breakLength,
  };
}

export function setWork(workLength) {
  return {
    type: actions.SET_WORK,
    payload: workLength,
  };
}

export function setWorkset(worksetLength) {
  return {
    type: actions.SET_WORKSET,
    payload: worksetLength,
  };
}

export function setcycle(cycleLength) {
  return {
    type: actions.SET_CYCLE,
    payload: cycleLength,
  };
}

export function decrementcycle() {
  return {
    type: actions.DECREMENT_CYCLE,
  };
}

export function setCycleset(cyclesetLength) {
  return {
    type: actions.SET_CYCLESET,
    payload: cyclesetLength,
  };
}

export function isEND() {
  return {
    type: actions.IS_END,
  };
}

export function decrementwork() {
  return {
    type: actions.DECREMENT_WORK,
  };
}

export function decrementbreak() {
  return {
    type: actions.DECREMENT_BREAK,
  };
}

export function resetwork() {
  return {
    type: actions.RESET_WORK,
  };
}

export function resetall() {
  return {
    type: actions.RESET_ALL,
  };
}
