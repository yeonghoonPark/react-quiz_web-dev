const currentState = {
  user_id: null,
  user_password: null,
  access_token: null,
};

const ON_LOGIN = "LOGIN/ON_LOGIN";
const ON_LOGOUT = "LOGIN/ON_LOGOUT";
const GET_ACCESS_TOEKN = "LOGIN/GET_ACCESS_TOEKN";

export const onLogin = () => ({
  type: ON_LOGIN,
});

export const onLogout = () => ({
  type: ON_LOGOUT,
});

export const getAccessToken = () => ({
  type: GET_ACCESS_TOEKN,
});

const login = (state = currentState, action) => {
  switch (action.type) {
    case ON_LOGIN:
      return { ...state };
    case ON_LOGOUT:
      return {
        ...state,
        user_id: (state.user_id = null),
        user_password: (state.user_password = null),
        access_token: (state.access_token = null),
      };
    case GET_ACCESS_TOEKN:
      return { ...state };
    default:
      return state;
  }
};

export default login;
