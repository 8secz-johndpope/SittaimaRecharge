import { Grid, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { required, selectedLanguage } from "../../../variable/global";

class Text extends Component {
	handleChange = event => {
		this.props.handleChange(event.target.name, event.target.value);
	};

	render() {
		const {
			classes,
			isVisible,
			questionVariant,
			question,
			value,
			name,
			require,
			type,
			placeholder
		} = this.props;

		return (
			<div>
				{isVisible && (
					<Grid item container>
						{question && (
							<Typography
								variant={questionVariant}
								className={classes.question}
							>
								{question[selectedLanguage]}
							</Typography>
						)}

						<TextField
							id={name}
							name={name}
							type={type}
							label={
								require
									? `${placeholder}  ${required[selectedLanguage]}`
									: placeholder
							}
							className={classes.component}
							value={value}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
						/>
					</Grid>
				)}
			</div>
		);
	}
}

const styles = theme => ({
	root: {
		display: "flex"
	},
	component: {
		width: "100%",
		marginLeft: theme.spacing.unit * 1,
		marginTop: theme.spacing.unit * 3,
		marginBottom: theme.spacing.unit * 3
	},
	question: {
		fontWeight: "bold"
	}
});

Text.propTypes = {
	classes: PropTypes.object.isRequired,
	questionVariant: PropTypes.string,
	question: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	isVisible: PropTypes.boolean,
	require: PropTypes.boolean,
	type: PropTypes.string,
	inputProps: PropTypes.object
};

Text.defaultProps = {
	questionVariant: "body",
	isVisible: false,
	require: false,
	placeholder: "",
	type: "text"
};

export default withStyles(styles)(Text);
