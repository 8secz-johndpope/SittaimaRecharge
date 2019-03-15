import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Login from "../auth/Login";
import Home from "../dashboard/Dashboard";

class index extends Component {
	render() {
		const { auth } = this.props;
		return (
			<Fragment>
				{auth.isAuthenticated === true ? <Home {...this.props} /> : <Login />}
			</Fragment>
		);
	}
}

index.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(index);
