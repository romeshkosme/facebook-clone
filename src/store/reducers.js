import { combineReducers } from "redux";
import Account from './auth/register/reducer'
import Login from './auth/login/reducer'
import Post from './post/reducer'

const rootReducer = combineReducers({
    // public
    Login,
    Account,
    Post,
  });
  
  export default rootReducer;