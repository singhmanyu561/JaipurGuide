import { queryDataFailure, queryDataLoading, queryDataSucess } from './ActionCreator'


export const queryDatafromplaceholder = (data) => {
    // console.log(data)
    return (dispatch) => {
        dispatch(queryDataLoading());

      
            fetch('http://localhost:7000/message_details')
                .then(response => response.json())
                .then(json => dispatch(queryDataSucess(json)))
                .catch((err) => {
                    console.log(err)
                    dispatch(queryDataFailure(err));
                })

        
      
    }

}