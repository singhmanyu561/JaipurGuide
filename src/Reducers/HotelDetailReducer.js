import { HOTEL_DETAILS_DATA_FAILURE, HOTEL_DETAILS_DATA_SUCCESS, HOTEL_DETAILS_DATA_LOADING } from "../Action/Type";



const HotelDetailReducer = (state, action) => {
    if (typeof state === "undefined") {
        // console.log("_____________")
        // console.log(action.type)
        // console.log(action.data)
        // console.log("_____________")
        return {
            data: [{}],
            loading: false,
            error: {},

        };
    }

    switch (action.type) {

        case HOTEL_DETAILS_DATA_LOADING:
            return {
                ...state,
                loading: true,
                error: {},
            };
        case HOTEL_DETAILS_DATA_SUCCESS:
            // alert("yes")
            return {
                ...state,
                loading: false,
                error: {},
                data: action.getdata,
            };
        case HOTEL_DETAILS_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.geterror,
                data: {},
            };



        default:
            return state;
    }
};


export default HotelDetailReducer;