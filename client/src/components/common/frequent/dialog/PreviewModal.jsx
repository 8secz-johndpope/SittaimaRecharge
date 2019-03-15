import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { privilege, selectedLanguage } from "../../../../variable/global";
import View from "../../../dashboard/user/View";
import Axios from "axios";

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const styles = theme => ({
	paper: {
		position: "absolute",
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: "none"
	}
});

class Preivew extends React.Component {
	state = {
		open: false,
		email: "",
		username: "",
		firstname: "",
		lastname: "",
		gender: "",
		privilege: 5,
		wardRole: 1,
		users: {}
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	componentDidMount() {
		Axios.get(`/api/users/user/${this.props.userId}`)
			.then(res => {
				this.setState({
					email: res.data.pri.user.email,
					username: res.data.pri.user.username,
					tempUsername: res.data.pri.user.username,
					firstname: res.data.pri.user.name.first,
					lastname: res.data.pri.user.name.last,
					gender: res.data.pri.user.gender,
					privilege: res.data.pri.role,
					wardRole: res.data.pri.ward,
					open: true
				});
			})
			.catch(err => {});
	}

	handleClose = () => {
		this.setState({ open: false });
	};

	getPrivilegeView = () => {
		return privilege.filter(each => each.value === this.state.privilege)[0][
			selectedLanguage
		];
	};

	render() {
		const { classes, open } = this.props;

		return (
			<div>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={open}
					onClose={this.props.handleClose}
				>
					<div style={getModalStyle()} className={classes.paper}>
						<View
							email={this.state.email}
							username={this.state.username}
							firstname={this.state.firstname}
							lastname={this.state.lastname}
							gender={this.state.gender}
							privilege={this.state.privilege}
							getPrivilege={this.getPrivilegeView}
						/>
					</div>
				</Modal>
			</div>
		);
	}
}

Preivew.propTypes = {
	classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const PreivewWrapped = withStyles(styles)(Preivew);

export default PreivewWrapped;
