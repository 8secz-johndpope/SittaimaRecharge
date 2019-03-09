import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authAction";
import { privilege, selectedLanguage } from "../../../variable/global";
import GridContainer from "../../common/Grid/GridContainer.jsx";
import GridItem from "../../common/Grid/GridItem.jsx";
import EditProfile from "./EditProfile";
import View from "./View";

class AddUser extends Component {
	state = {
		email: "",
		username: "",
		password: "",
		showPassword: false,
		firstname: "",
		lastname: "",
		gender: "",
		privilege: "wardSubHead",
		roleWard: 6,
		wardHead: "",
		wardSubHead: ""
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

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors !== this.props.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

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
			privilege: this.state.privilege
		};
		this.props.registerUser(newUser, this.props.history);
	};
	render() {
		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={8}>
					<EditProfile
						handleClickShowPassword={this.handleClickShowPassword}
						showPassword={this.state.showPassword}
						email={this.state.email}
						username={this.state.username}
						password={this.state.password}
						firstname={this.state.firstname}
						lastname={this.state.lastname}
						gender={this.state.gender}
						privilege={this.state.privilege}
						wardHead={this.state.wardHead}
						wardSubHead={this.state.wardSubHead}
						handleChange={this.handleChange}
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

const mapStateToProps = state => ({
	errors: state.errors
});

export default withStyles(styles)(
	connect(
		mapStateToProps,
		{ registerUser }
	)(AddUser)
);
