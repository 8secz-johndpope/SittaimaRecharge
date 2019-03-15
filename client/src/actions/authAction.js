import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

export const registerUser = (userData, history) => dispatch => {
	axios
		.post("/api/admin/users/register", userData)
		.then(res => {
			res.data.success && history.push("/users");
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			});
		});
};

export const deleteUser = userId => {
	return axios
		.post("/api/admin/users/remove", { userId })
		.then(res => {
			console.log("res", res.data);
			return Promise.resolve(true);
		})
		.catch(err => {
			return Promise.reject(false);
		});
};

export const loginUser = userData => dispatch => {
	axios
		.post("/api/admin/users/login", userData)
		.then(res => {
			// Save to localStorage
			const { token } = res.data;

			// Set token to ls
			if (token) {
				localStorage.setItem("jwtToken", token);
				// Set token to Auth header
				setAuthToken(token);
				// Decode token to get user data
				const decoded = jwt_decode(token);
				// Set current user
				dispatch(setCurrentUser(decoded));
			}
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			});
		});
};

//set logged in user
export const setCurrentUser = decoded => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};

export const logoutUser = () => dispatch => {
	//remove token from localstorage
	localStorage.removeItem("jwtToken");
	//remove authHead for future request by sending empty parameter
	setAuthToken();
	//set current User to {}
	dispatch(setCurrentUser());
};

export const updateUser = (userId, history) => dispatch => {
	axios
		.post("/api/admin/users/editUser", userId)
		.then(res => {
			res.data.success && history.push("/users");
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			});
		});
};
