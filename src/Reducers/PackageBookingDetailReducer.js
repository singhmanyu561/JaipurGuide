import { PACKAGE_BOOKING_DETAILS_DATA_FAILURE, PACKAGE_BOOKING_DETAILS_DATA_SUCCESS, PACKAGE_BOOKING_DETAILS_DATA_LOADING } from "../Action/Type";



const PackageBookingDetailReducer = (state, action) => {
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

        case PACKAGE_BOOKING_DETAILS_DATA_LOADING:
            return {
                ...state,
                loading: true,
                error: {},
            };
        case PACKAGE_BOOKING_DETAILS_DATA_SUCCESS:
            // alert("yes")
            return {
                ...state,
                loading: false,
                error: {},
                data: action.getdata,
            };
        case PACKAGE_BOOKING_DETAILS_DATA_FAILURE:
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


export default PackageBookingDetailReducer;