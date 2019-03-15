import withStyles from "@material-ui/core/styles/withStyles";
import Axios from "axios";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { updateUser } from "../../../actions/authAction";
import { connect } from "react-redux";
import { privilege, selectedLanguage } from "../../../variable/global";
import GridContainer from "../../common/Grid/GridContainer.jsx";
import GridItem from "../../common/Grid/GridItem.jsx";
import EditProfile from "./EditProfile";
import View from "./View";

class EditUser extends Component {
	state = {
		email: "",
		username: "",
		password: "",
		showPassword: false,
		firstname: "",
		lastname: "",
		gender: "",
		privilege: 5,
		wardRole: 1,
		users: {},
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

	componentDidMount() {
		let userId = this.props.match.params.id;
		Axios.get(`/api/users/user/${userId}`)
			.then(res => {
				this.setState({
					email: res.data.pri.user.email,
					username: res.data.pri.user.username,
					tempUsername: res.data.pri.user.username,
					firstname: res.data.pri.user.name.first,
					lastname: res.data.pri.user.name.last,
					gender: res.data.pri.user.gender,
					privilege: res.data.pri.role,
					wardRole: res.data.pri.ward
				});
			})
			.catch(err => {});
	}
	// fetchUser = () => {};

	onSubmit = event => {
		event.preventDefault();
		const editUser = {
			id: this.props.match.params.id,
			email: this.state.email,
			// password: this.state.password,
			firstname: this.state.firstname,
			username: this.state.username,
			lastname: this.state.lastname,
			gender: this.state.gender,
			privilege: this.state.privilege,
			wardRole: this.state.wardRole
		};
		this.props.updateUser(editUser, this.props.history);
	};
	render() {
		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={8}>
					<EditProfile
						handleClickShowPassword={this.handleClickShowPassword}
						showPassword={this.state.showPassword}
						errors={this.props.errors}
						email={this.state.email}
						username={this.state.username}
						password={this.state.isVisiblePassword}
						isPasswordVisible={false}
						firstname={this.state.firstname}
						lastname={this.state.lastname}
						gender={this.state.gender}
						privilege={this.state.privilege}
						wardRole={this.state.wardRole}
						handleChange={this.handleChange}
						title={{
							english: "Edit User",
							nepali: "प्रयोगकर्ता सम्पादन गर्नुहोस्"
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

EditUser.propTypes = {
	classes: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	updateUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	errors: state.errors
});

export default withStyles(styles)(
	connect(
		mapStateToProps,
		{ updateUser }
	)(EditUser)
);
