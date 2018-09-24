import axios from '../../axios-api';
import {
	LOGIN_USER_FAILURE,
	LOGIN_USER_SUCCESS,
} from "./actionTypes";


const loginUserSuccess = (user, token) => {
	return {type: LOGIN_USER_SUCCESS, user, token};
};

const loginUserFailure = error => {
	return {type: LOGIN_USER_FAILURE, error};
};

export const loginUser = userData => {
	return dispatch => {
		return axios.post('/users/sessions', userData).then(
			response => {
				dispatch(loginUserSuccess(response.data.user, response.data.token));
			},
			error => {
				const errorObj = error.response ? error.response.data : {error: 'No internet'};
				dispatch(loginUserFailure(errorObj));
			}
		)
	}
};