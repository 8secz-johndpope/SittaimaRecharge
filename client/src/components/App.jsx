import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { logoutUser, setCurrentUser } from "../actions/authAction";
import "../App.css";
import store from "../store";
import setAuthToken from "../utils/setAuthToken";
import Login from "./auth/Login";
import PrivateRoute from "./common/PrivateRoute";
import Dashboard from "./dashboard/Dashboard";
//check for token
if (localStorage.jwtToken) {
	//set authToken header auth
	setAuthToken(localStorage.jwtToken);
	// decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtToken);
	//set user and is Authenticated
	store.dispatch(setCurrentUser(localStorage.jwtToken));
	//check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser());
		//clear current profile
		// store.dispatch(clearCurrentProfile);
		//redirect to login
		window.location.href = "/";
	}
}

class App extends Component {
	componentDidMount() {
		var loading = document.getElementById("loading");
		loading.style.display = "none";
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<CssBaseline />
						<div>
							<Switch>
								<Route exact path="/login" component={Login} />
								<PrivateRoute path="/" component={Dashboard} />
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

const styles = theme => ({
	mainContainer: {
		backgroundColor: "#fff"
	}
});

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
