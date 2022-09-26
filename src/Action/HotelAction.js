import { hotelDataFailure, hotelDataLoading, hotelDataSucess } from './ActionCreator'


export const hotelDatafromplaceholder = (data) => {
    // console.log(data)
    return (dispatch) => {
        dispatch(hotelDataLoading());

      
            fetch('http://localhost:7000/upload_hotel')
                .then(response => response.json())
                .then(json => dispatch(hotelDataSucess(json)))
                .catch((err) => {
                    console.log(err)
                    dispatch(hotelDataFailure(err));
                })

        
      
    }

}