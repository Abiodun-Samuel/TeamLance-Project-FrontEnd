import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productListsReducer,
  productUpdateReducer,
} from "./reducers/productReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  productList: productListsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
  productUpdate: productUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
