import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import { selectedLanguage } from "../../../variable/global";
const style1 = theme => ({
	question: {
		fontWeight: 550
	},
	answer: {
		fontWeight: 400
		// marginLeft: 10
	},
	flex: {
		display: "flex"
	},
	typographyParent: {
		padding: `${theme.spacing.unit * 2}px 0px `
	}
});

function QnAns({ question, answer, classes, xs }) {
	return (
		<Grid item xs className={classes.typographyParent}>
			<Typography variant="body1" className={classes.question}>
				{question}
			</Typography>

			<Typography variant="body1" className={classes.answer}>
				{answer}
			</Typography>
		</Grid>
	);
}

export const QuestionAnswer = withStyles(style1)(QnAns);

// Component Title
const style2 = theme => ({
	title: {
		fontWeight: 600
	}
});

function Header({ classes, title }) {
	return (
		<Grid item>
			<Typography className={classes.title} variant="h6">
				{title[selectedLanguage]}
			</Typography>
		</Grid>
	);
}

export const Title = withStyles(style2)(Header);
