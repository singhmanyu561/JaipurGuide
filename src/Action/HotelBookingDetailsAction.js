import { hotelBookingDetailsDataFailure, hotelBookingDetailsDataLoading, hotelBookingDetailsDataSucess } from './ActionCreator'


export const hotelBookingDetailsDatafromplaceholder = (data) => {
    
    return (dispatch) => {
        dispatch(hotelBookingDetailsDataLoading());

      
            fetch('http://localhost:7000/booked_hotel_details')
                .then(response => response.json())
                .then(json => dispatch(hotelBookingDetailsDataSucess(json)))
                .catch((err) => {
                    console.log(err)
                    dispatch(hotelBookingDetailsDataFailure(err));
                })

        
      
    }

}