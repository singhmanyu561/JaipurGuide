import { combineReducers } from "redux";


import PackageReducer from './PackageReducer';
import UserReducer from './UserReducer'
import HotelReducer from './QueryReducer'
import HotelDetailReducer from './HotelDetailReducer'
import HotelBookingDetailReducer from './HotelBookingDetailReducer'
import PackageBookingDetailReducer from './PackageBookingDetailReducer'
import QueryReducer from './QueryReducer'











export default combineReducers({

    PackageReducer,
    UserReducer,
    HotelReducer,
    HotelDetailReducer,
    HotelBookingDetailReducer,
    PackageBookingDetailReducer,
    QueryReducer



});