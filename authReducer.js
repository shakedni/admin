


const initState = {
    authError: "",
    uid: "",
    requested: false,
    registered: false,
    user: null,
    loading: false
  };
  
  const authReducer = (state = initState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          uid: action.user.id,
          user: { ...action.user },
          authError: "",
        };
      case "LOGIN_FAIL":
  
        return {
          ...state,
          uid: "",
          authError: action.error.message,
        };
      case "REGISTER_SUCCESS":
  
        return {
          ...state,
          authError: "",
          registered: true,
        };
  
      case "REGISTER_FAIL":
  
        return {
          ...state,
        };
      case "REGISTER_COMPLETE":
        return {
          ...state,
          registered: false,
        };
  
      case "LOGOUT_SUCCESS":
        return {
          ...state,
          authError: "",
          uid: "",
        };
      case "AUTH_RESET":
        return {
          ...state,
          authError: "",
        };
      case "GET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "ACTION_REQUEST":
        return {
          ...state,
          requested: true,
        };
      case "ACTION_REQUEST_END":
        return {
          ...state,
          requested: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;