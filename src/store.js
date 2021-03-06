import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer, productDetailReducer} from './reducers/productReducers';
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
} from "./reducers/userReducers";
import {cartReducer} from "./reducers/cartReducers"
import {orderCreateReducer, orderDetailsReducer} from "./reducers/orderReducers";

const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailReducer,
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    cart : cartReducer,
    orderCreate : orderCreateReducer,
    orderDetails : orderDetailsReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;