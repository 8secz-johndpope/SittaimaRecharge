import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../../actions/authAction";
import { privilege, selectedLanguage } from "../../../variable/global";
import GridContainer from "../../common/Grid/GridContainer.jsx";
import GridItem from "../../common/Grid/GridItem.jsx";
import EditProfile from "./EditProfile";
import View from "./View";
import Axios from "axios";

class AddUser extends Component {
	state = {
		email: "",
		username: "",
		password: "",
		showPassword: true,
		firstname: "",
		lastname: "",
		gender: "",
		privilege: 5,
		wardRole: 1,
		errors: {}
	};

	handleChange = (name, value) => {
		this.setState({
			[name]: value
		});
	};

	setErrorNull = () => {
		this.setState({
			errors: {}
		});
	};

	handleClickShowPassword = () => {
		this.setState(state => ({ showPassword: !state.showPassword }));
	};

	getPrivilege = () => {
		return privilege.filter(each => each.value === this.state.privilege)[0][
			selectedLanguage
		];
	};

	onSubmit = event => {
		event.preventDefault();
		const newUser = {
			email: this.state.email,
			password: this.state.password,
			username: this.state.username,
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			gender: this.state.gender,
			privilege: this.state.privilege,
			wardRole: this.state.privilege <= 4 ? 0 : this.state.wardRole
		};
		this.props.registerUser(newUser, this.props.history);
	};
	render() {
		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={8}>
					<EditProfile
						errors={this.props.errors}
						handleClickShowPassword={this.handleClickShowPassword}
						showPassword={this.state.showPassword}
						email={this.state.email}
						username={this.state.username}
						password={this.state.password}
						firstname={this.state.firstname}
						lastname={this.state.lastname}
						gender={this.state.gender}
						privilege={this.state.privilege}
						wardRole={this.state.wardRole}
						handleChange={this.handleChange}
						title={{
							english: "Add User",
							nepali: "प्रयोगकर्ता थप्नुहोस्"
						}}
						onSubmit={this.onSubmit}
					/>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<View
						email={this.state.email}
						username={this.state.username}
						firstname={this.state.firstname}
						lastname={this.state.lastname}
						gender={this.state.gender}
						privilege={this.state.privilege}
						getPrivilege={this.getPrivilege}
					/>
				</GridItem>
			</GridContainer>
		);
	}
}

const styles = theme => ({
	cardCategoryWhite: {
		color: "rgba(255,255,255,.62)",
		margin: "0",
		fontSize: "14px",
		marginTop: "0",
		marginBottom: "0"
	},
	cardTitleWhite: {
		color: "#FFFFFF",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "300",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none"
	},
	userProfile: {
		fontSize: theme.spacing.unit * 12,
		margin: theme.spacing.unit
	},
	textSize: {
		display: "flex"
	}
});

AddUser.propTypes = {
	classes: PropTypes.object.isRequired,
	RegisterUser: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth: { errors } }) => ({ errors });

export default withStyles(styles)(
	connect(
		mapStateToProps,
		{ registerUser }
	)(withRouter(AddUser))
);
