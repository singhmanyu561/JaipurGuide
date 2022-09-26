import { userDataFailure, userDataLoading, userDataSucess } from './ActionCreator'


export const getUserDatafromplaceholder = (data) => {
    // console.log(data)
    return (dispatch) => {
        dispatch(userDataLoading());

        if (data === "" || data === null || data === undefined) {
            fetch('http://localhost:7000/user_details')
                .then(response => response.json())
                .then(json => dispatch(userDataSucess(json)))
                .catch((err) => {
                    console.log(err)
                    dispatch(userDataFailure(err));
                })

        }
        else {
            var temp = []
            fetch('http://localhost:7000/filter_user_details')
                .then(response => response.json())
                .then(json => dispatch(userDataSucess([json])))
                .catch((err) => {
                    console.log(err)
                    dispatch(userDataFailure(err));
                })
        }

    }

}