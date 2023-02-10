const currentState = {
  user_id: null,
  user_password: null,
};

const ON_LOGIN = "LOGIN/ON_LOGIN";
const ON_LOGOUT = "LOGIN/ON_LOGOUT";

export const onLogin = () => ({
  type: ON_LOGIN,
});

export const onLogout = () => ({
  type: ON_LOGOUT,
});

const login = (state = currentState, action) => {
  switch (action.type) {
    case ON_LOGIN:
      return { ...state, user_id: state.user_id };
    case ON_LOGOUT:
      return { ...state, user_id: (state.user_id = null) };
    default:
      return state;
  }
};

export default login;
