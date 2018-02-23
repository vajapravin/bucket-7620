import * as layout from './layout.action';

export interface State {
  layout: string;
  login: boolean;
  right_sidebar: boolean;
}

const initialState: State = {
  layout: 'auth-wrapper',
  login: false,
  right_sidebar: true
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {

    case layout.LOGIN_LAYOUT: {
      return Object.assign({}, state, {
        layout: 'auth-wrapper'
      });
    }

    default:
      return state;
  }
}

export const getLayout = (state: State) => state.layout;
export const getAlreadyLogin = (state: State) => state.login;
export const getRightSidebarStatus = (state: State) => state.right_sidebar;