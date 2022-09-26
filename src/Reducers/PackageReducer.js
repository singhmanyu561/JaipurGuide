import { PACKAGE_DATA_FAILURE, PACKAGE_DATA_SUCCESS, PACKAGE_DATA_LOADING } from "../Action/Type";


const PackageReducer = (state, action) => {
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

        case PACKAGE_DATA_LOADING:
            return {
                ...state,
                loading: true,
                error: {},
            };
        case PACKAGE_DATA_SUCCESS:
            // alert("yes")
            return {
                ...state,
                loading: false,
                error: {},
                data: action.getdata,
            };
        case PACKAGE_DATA_FAILURE:
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


//=====================================================================================================================


export default PackageReducer;
