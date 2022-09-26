import { PACKAGE_DATA_LOADING, PACKAGE_DATA_SUCCESS, PACKAGE_DATA_FAILURE } from './Type'

import { USER_DATA_LOADING, USER_DATA_SUCCESS, USER_DATA_FAILURE } from './Type'

import { HOTEL_DATA_LOADING, HOTEL_DATA_SUCCESS, HOTEL_DATA_FAILURE } from './Type'

import { HOTEL_DETAILS_DATA_LOADING, HOTEL_DETAILS_DATA_SUCCESS, HOTEL_DETAILS_DATA_FAILURE } from './Type'

import { HOTEL_BOOKING_DETAILS_DATA_LOADING, HOTEL_BOOKING_DETAILS_DATA_SUCCESS, HOTEL_BOOKING_DETAILS_DATA_FAILURE } from './Type'

import { QUERY_DATA_LOADING, QUERY_DATA_SUCCESS, QUERY_DATA_FAILURE } from './Type'

import { PACKAGE_BOOKING_DETAILS_DATA_LOADING, PACKAGE_BOOKING_DETAILS_DATA_SUCCESS, PACKAGE_BOOKING_DETAILS_DATA_FAILURE } from './Type'

import { WIDTH_DATA_LOADING, WIDTH_DATA_SUCCESS, WIDTH_DATA_FAILURE } from './Type'






export const packageDataLoading = () => ({
    type: PACKAGE_DATA_LOADING,
})

export const packageDataSucess = (getdata) => ({

    type: PACKAGE_DATA_SUCCESS,
    getdata

})

export const packageDataFailure = (geterror) => ({
    type: PACKAGE_DATA_FAILURE,
    geterror
})

//========================================================================================================

export const userDataLoading = () => ({
    type: USER_DATA_LOADING,
})

export const userDataSucess = (getdata) => ({

    type: USER_DATA_SUCCESS,
    getdata

})

export const userDataFailure = (geterror) => ({
    type: USER_DATA_FAILURE,
    geterror
})

//=======================================================================================================

export const hotelDataLoading = () => ({
    type: HOTEL_DATA_LOADING,
})

export const hotelDataSucess = (getdata) => ({

    type: HOTEL_DATA_SUCCESS,
    getdata

})

export const hotelDataFailure = (geterror) => ({
    type: HOTEL_DATA_FAILURE,
    geterror
})

//==========================================================================================================


export const hotelDetailsDataLoading = () => ({
    type: HOTEL_DETAILS_DATA_LOADING,
})

export const hotelDetailsDataSucess = (getdata) => ({

    type: HOTEL_DETAILS_DATA_SUCCESS,
    getdata

})

export const hotelDetailsDataFailure = (geterror) => ({
    type: HOTEL_DETAILS_DATA_FAILURE,
    geterror
})

//===========================================================================================================

export const queryDataLoading = () => ({
    type: QUERY_DATA_LOADING,
})

export const queryDataSucess = (getdata) => ({

    type: QUERY_DATA_SUCCESS,
    getdata

})

export const queryDataFailure = (geterror) => ({
    type: QUERY_DATA_FAILURE,
    geterror
})

//=========================================================================================================================

export const hotelBookingDetailsDataLoading = () => ({
    type: HOTEL_BOOKING_DETAILS_DATA_LOADING,
})

export const hotelBookingDetailsDataSucess = (getdata) => ({

    type: HOTEL_BOOKING_DETAILS_DATA_SUCCESS,
    getdata

})

export const hotelBookingDetailsDataFailure = (geterror) => ({
    type: HOTEL_BOOKING_DETAILS_DATA_FAILURE,
    geterror
})

//=======================================================================================================================

export const packageBookingDetailsDataLoading = () => ({
    type: PACKAGE_BOOKING_DETAILS_DATA_LOADING,
})

export const packageBookingDetailsDataSucess = (getdata) => ({

    type: PACKAGE_BOOKING_DETAILS_DATA_SUCCESS,
    getdata

})

export const packageBookingDetailsDataFailure = (geterror) => ({
    type: PACKAGE_BOOKING_DETAILS_DATA_FAILURE,
    geterror
})

//==========================================================width============================================

export const widthDataLoading = () => ({
    type: WIDTH_DATA_LOADING,
})

export const WIDTHDataSucess = (getdata) => ({

    type: WIDTH_DATA_SUCCESS,
    getdata

})

export const WIDTHDataFailure = (geterror) => ({
    type: WIDTH_DATA_FAILURE,
    geterror
})