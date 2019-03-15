import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { selectedLanguage } from "../../../variable/global";

class NumberPicker extends Component {
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
			max,
			min,
			defaultValue
		} = this.props;

		return (
			<div>
				{isVisible && (
					<Fragment>
						{question && (
							<Typography variant={questionVariant}>
								{question[selectedLanguage]}
							</Typography>
						)}
						{/* Number picker here */}
					</Fragment>
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
		marginLeft: theme.spacing.unit * 1,
		marginTop: theme.spacing.unit * 3,
		marginBottom: theme.spacing.unit * 3
	}
});

NumberPicker.propTypes = {
	classes: PropTypes.object.isRequired,
	questionVariant: PropTypes.string,
	question: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	isVisible: PropTypes.bool,
	require: PropTypes.bool,
	type: PropTypes.string,
	inputProps: PropTypes.object
};

NumberPicker.defaultProps = {
	questionVariant: "body",
	isVisible: false,
	require: false,
	placeholder: "",
	type: "text"
};

export default withStyles(styles)(NumberPicker);
