import {
	Grid,
	IconButton,
	InputAdornment,
	Typography
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import TextInput from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { Component } from "react";
import {
	email,
	firstname,
	genderText,
	isPasswordVisible,
	lastname,
	password,
	privilege,
	selectedLanguage,
	username,
	whichWard
} from "../../../variable/global";

import Card from "../../common/Card/Card.jsx";
import CardBody from "../../common/Card/CardBody.jsx";
import CardFooter from "../../common/Card/CardFooter.jsx";
import CardHeader from "../../common/Card/CardHeader.jsx";
import Button from "../../common/CustomButtons/Button.jsx";
import RadioButton from "../../common/frequent/RadioButton";
import Selection from "../../common/frequent/Selection";
import TextField from "../../common/frequent/TextField";

class EditProfile extends Component {
	handleChange = event => {
		this.props.handleChange(event.target.name, event.target.value);
	};

	render() {
		const { classes } = this.props;
		const gender = [
			{ nepali: "महिला", english: "Male", value: "male" },
			{ nepali: "पुरुष", english: "Female", value: "female" },
			{ nepali: "तेस्रो लिंगी", english: "Third Gender", value: "third_gender" }
		];
		return (
			<Card>
				<CardHeader color="primary">
					<Typography variant="h5" className={classes.cardTitleWhite}>
						Edit Profile
					</Typography>
					<Typography variant="h6" className={classes.cardCategoryWhite}>
						Complete your profile
					</Typography>
				</CardHeader>
				<CardBody>
					<form className={classes.form}>
						<Grid container spacing={24}>
							<Grid item xs={6}>
								<TextField
									name="email"
									type="email"
									placeholder={email[selectedLanguage]}
									value={this.props.email}
									isVisible
									handleChange={this.props.handleChange}
								/>
							</Grid>

							<Grid item xs={6}>
								<TextField
									name="username"
									placeholder={username[selectedLanguage]}
									value={this.props.username}
									isVisible
									handleChange={this.props.handleChange}
								/>
							</Grid>
						</Grid>

						{isPasswordVisible && (
							<TextInput
								id="password"
								label={password[selectedLanguage]}
								onFocusCapture={this.setErrorNull}
								type={this.props.showPassword ? "text" : "password"}
								name="password"
								autoComplete="current-password"
								margin="normal"
								variant="outlined"
								disabled={false}
								className={classes.textField}
								// error={this.props.errors.password}
								// helperText={this.props.errors.password}
								value={this.props.password}
								onChange={this.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="Toggle password visibility"
												onClick={this.props.handleClickShowPassword}
											>
												{this.props.showPassword ? (
													<VisibilityOff />
												) : (
													<Visibility />
												)}
											</IconButton>
										</InputAdornment>
									)
								}}
							/>
						)}

						<Grid container spacing={24}>
							<Grid item xs={6}>
								<TextField
									name="firstname"
									type="text"
									placeholder={firstname[selectedLanguage]}
									value={this.props.firstname}
									isVisible
									handleChange={this.props.handleChange}
								/>
							</Grid>

							<Grid item xs={6}>
								<TextField
									name="lastname"
									type="text"
									placeholder={lastname[selectedLanguage]}
									value={this.props.lastname}
									isVisible
									handleChange={this.props.handleChange}
								/>
							</Grid>
						</Grid>

						<Grid item xs={8} className={classes.textSize}>
							<Typography variant="h5">
								{genderText[selectedLanguage]}
							</Typography>
							<RadioButton
								handleChange={this.props.handleChange}
								isVisible
								name="gender"
								radioLists={gender}
								value={this.props.gender}
							/>
						</Grid>

						<Grid container>
							<Selection
								name="privilege"
								selectList={privilege}
								value={this.props.privilege}
								isVisible
								handleChange={this.props.handleChange}
							/>
						</Grid>
						<Grid container>
							<TextField
								name="wardHead"
								type="number"
								placeholder={whichWard[selectedLanguage]}
								value={this.props.wardHead}
								isVisible={
									this.props.privilege == "wardHead" ||
									this.props.privilege == "wardSubHead"
								}
								handleChange={this.props.handleChange}
							/>
						</Grid>
					</form>
				</CardBody>
				<CardFooter>
					<Button color="primary" onClick={this.onSubmit}>
						Submit Profile
					</Button>
				</CardFooter>
			</Card>
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
	textSize: {
		display: "flex"
	}
});

EditProfile.defaultProps = {
	isPasswordVisible: true
};

export default withStyles(styles)(EditProfile);
