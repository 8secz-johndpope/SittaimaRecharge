import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import User from "@material-ui/icons/Person";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Card from "../../common/Card/Card.jsx";
import CardAvatar from "../../common/Card/CardAvatar.jsx";
import CardBody from "../../common/Card/CardBody.jsx";

class View extends Component {
	static propTypes = {
		prop: PropTypes
	};
	getGender = () => {
		const gender = this.props.gender;
		if (gender === "female") return "महिला";
		else if (gender === "male") return "पुरुष";
		else if (gender === "third_gender") return "तेस्रो लिङ्गी";
		else return "";
	};
	render() {
		const { classes } = this.props;
		return (
			<Card profile>
				<CardAvatar profile>
					<User className={classes.userProfile} />
					{/* <Upload /> */}
				</CardAvatar>
				<CardBody profile>
					<Typography className={classes.cardCategory} variant="h4">
						{this.props.getPrivilege()}
					</Typography>

					<Typography className={classes.cardCategory} variant="h5">
						{`${this.props.lastname} ${this.props.firstname}`}
					</Typography>

					<Typography className={classes.cardCategory} variant="body5">
						{`${this.props.email}`}
					</Typography>
					<Typography className={classes.cardCategory} variant="h6">
						{`${this.getGender()}`}
					</Typography>
				</CardBody>
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
	userProfile: {
		fontSize: theme.spacing.unit * 12,
		margin: theme.spacing.unit
	},
	textSize: {
		display: "flex"
	}
});

export default withStyles(styles)(View);
