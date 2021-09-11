import {combineReducers} from 'redux'
import authReducer from './authReducer';
import reportReducer from './reportReducer';
import userReducer from './userReducer';



const rootReducer = combineReducers({
    login:authReducer,
    report:reportReducer,
    allUsers:userReducer
    
});

export default rootReducer