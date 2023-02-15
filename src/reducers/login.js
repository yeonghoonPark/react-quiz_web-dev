const currentState = {
  user_id: null,
  user_password: null,
};

const ON_LOGIN = "LOGIN/ON_LOGIN";
const ON_LOGOUT = "LOGIN/ON_LOGOUT";
const ON_LOGIN_WITH_KAKAO = "LOGIN/ON_LOGIN_WITH_KAKAO";

export const onLogin = () => ({
  type: ON_LOGIN,
});

export const onLogout = () => ({
  type: ON_LOGOUT,
});

export const onLoginWithKakao = () => ({
  type: ON_LOGIN_WITH_KAKAO,
});

const login = (state = currentState, action) => {
  switch (action.type) {
    case ON_LOGIN:
      return { ...state, user_id: state.user_id };
    case ON_LOGOUT:
      return {
        ...state,
        user_id: (state.user_id = null),
        user_password: (state.user_password = null),
      };
    case ON_LOGIN_WITH_KAKAO:
      return { ...state, user_id: state.user_id };
    default:
      return state;
  }
};

export default login;
