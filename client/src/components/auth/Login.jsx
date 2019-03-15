import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import classnames from "classnames";
import {
	Typography,
	FormControlLabel,
	Checkbox,
	Input,
	InputLabel,
	FormControl,
	Paper,
	Avatar
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import villageImage from "../../image/villageBlur.png";
import { loginUser } from "../../actions/authAction";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "admin@gmail.com",
			password: "adminn",
			showPassword: true,
			errors: {}
		};
	}
	componentDidMount() {
		
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/home");
		}
	}
	setErrorNull = () => {
		this.setState({
			errors: {}
		});
	};

	static getDerivedStateFromProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			nextProps.history.push("/home");
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors !== this.props.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};

	handleClickShowPassword = () => {
		this.setState(state => ({ showPassword: !state.showPassword }));
	};

	onSubmit = event => {
		event.preventDefault();
		const newUser = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(newUser, this.props.history);
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.parent}>
				<div className={classes.backgroundImage} />
				<main className={classes.main}>
					<Paper className={classes.paper} elevation={15}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<form className={classes.form}>
							<FormControl fullWidth>
								<TextField
									onFocusCapture={this.setErrorNull}
									className={classes.textField}
									id="outlined-email-input-1"
									error={this.state.errors.email}
									helperText={this.state.errors.email}
									label="Email or Username"
									value={this.state.email}
									type="email"
									name="email"
									autoComplete="email"
									margin="normal"
									variant="outlined"
									onChange={this.handleChange("email")}
								/>
							</FormControl>
							<FormControl fullWidth>
								<TextField
									id="password"
									label="Password"
									onFocusCapture={this.setErrorNull}
									type={this.state.showPassword ? "text" : "password"}
									name="password"
									autoComplete="current-password"
									margin="normal"
									variant="outlined"
									disabled={false}
									className={classes.textField}
									error={this.state.errors.password}
									helperText={this.state.errors.password}
									value={this.state.password}
									onChange={this.handleChange("password")}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="Toggle password visibility"
													onClick={this.handleClickShowPassword}
												>
													{this.state.showPassword ? (
														<VisibilityOff />
													) : (
														<Visibility />
													)}
												</IconButton>
											</InputAdornment>
										)
									}}
								/>
							</FormControl>

							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								fullWidth
								variant="contained"
								color="primary"
								onClick={this.onSubmit}
								className={classes.submit}
							>
								Sign in
							</Button>
						</form>
					</Paper>
				</main>
			</div>
		);
	}
}
const styles = theme => ({
	parent: {},
	backgroundImage: {
		backgroundImage: `url(${villageImage})`,
		backgroundRepeat: "no-repeat",
		height: "100vh",
		backgroundSize: "cover",
		backgroundPosition: "center center",
		position: "absolute",
		width: "100%",
		filter: "blur(7px)"
	},
	main: {
		width: "auto",
		display: "block", // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: "auto",
			marginRight: "auto"
		},
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	},
	paper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
			.spacing.unit * 3}px`
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing.unit
	},
	submit: {
		marginTop: theme.spacing.unit * 3
	}
});

Login.propTypes = {
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	loginUser: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});
export default withStyles(styles)(
	connect(
		mapStateToProps,
		{ loginUser }
	)(withRouter(Login))
);
