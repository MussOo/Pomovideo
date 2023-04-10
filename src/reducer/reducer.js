import { actions } from '../actions/index';

export function reducer(state, action) {
  switch (action.type) {
    case actions.SETTINGS:
      return {
        ...state,
        settings: action.settings,
      };
    case actions.SET_BREAK:
      return {
        ...state,
        break: action.break,
      };
    case actions.SET_WORK:
      return {
        ...state,
        work: action.work,
      };
    case actions.SET_WORKSET:
      return {
        ...state,
        workset: action.workset,
      };
    case actions.DECREMENT_WORK:
      return {
        ...state,
        work: state.work - 1,
      };
    case actions.RESET_WORK:
      return {
        ...state,
        work: state.workset,
      };
    case actions.SET_BREAK:
      return {
        ...state,
        breakset: action.breakset,
      };
    case actions.SET_BREAKSET:
      return {
        ...state,
        breaktime: action.breaktime,
      };
    case actions.DECREMENT_BREAK:
      return {
        ...state,
        breaktime: state.breaktime - 1,
      };
    case actions.SET_CYCLE:
      return {
        ...state,
        cycle: action.cycle,
      };
    case actions.SET_CYCLESET:
      return {
        ...state,
        cycleset: action.cycleset,
      };
    case actions.DECREMENT_CYCLE:
      return {
        ...state,
        cycle: state.cycle - 1,
      };
    case actions.SET_ISACTIVE:
      return {
        ...state,
        isactive: action.isactive,
      };
    case actions.IS_END:
      return {
        ...state,
        isend: action.isend,
      };
    case actions.RESET_ALL:
      return {
        ...state,
        isactive: false,
        isend: false,
        pomodoro: true,
        breaktime: 'init',
        work: state.workset,
        break: state.breakset,
        cycle: state.cycleset,
      };
    default:
      throw new Error();
  }
}
