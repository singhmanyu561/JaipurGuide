import { packageBookingDetailsDataFailure, packageBookingDetailsDataLoading, packageBookingDetailsDataSucess } from './ActionCreator'


export const packageBookingDetailsDatafromplaceholder = (data) => {
    
    return (dispatch) => {
        dispatch(packageBookingDetailsDataLoading());

      
            fetch('http://localhost:7000/booked_package_details')
                .then(response => response.json())
                .then(json => dispatch(packageBookingDetailsDataSucess(json)))
                .catch((err) => {
                    console.log(err)
                    dispatch(packageBookingDetailsDataFailure(err));
                })

        
      
    }

}