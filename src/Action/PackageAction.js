

import { packageDataFailure, packageDataLoading, packageDataSucess } from './ActionCreator'









export const packageDatafromplaceholder = (data) => {
   
    return (dispatch) => {
        dispatch(packageDataLoading());

        
        fetch('http://localhost:7000/upload_package')
                .then(response => response.json())
                .then(json => dispatch(packageDataSucess(json)))
                .catch((err) => {
                    console.log(err)
                    dispatch(packageDataFailure(err));
                })

        
        
    }

}

//=============================================================================================================

