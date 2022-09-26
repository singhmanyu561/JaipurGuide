import { hotelDetailsDataFailure, hotelDetailsDataLoading, hotelDetailsDataSucess } from './ActionCreator'


export const hotelDetailsDatafromplaceholder = (data) => {
    
    return (dispatch) => {
        dispatch(hotelDetailsDataLoading());

      
            fetch('http://localhost:7000/hotel_details')
                .then(response => response.json())
                .then(json => dispatch(hotelDetailsDataSucess(json)))
                .catch((err) => {
                    console.log(err)
                    dispatch(hotelDetailsDataFailure(err));
                })

        
      
    }

}