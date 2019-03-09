import {
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { otherQuestion, selectedLanguage } from "../../../variable/global";
import TextField from "./TextField";

class RadioButton extends Component {
	handleChange = event => {
		this.props.handleChange(event.target.name, event.target.value);
	};

	getOtherTextField = (name, value) => (
		<TextField
			question={otherQuestion}
			name={name + "Other"}
			require
			placeholder="अन्य"
			value={this.props.other}
			isVisible={value === "other"}
			handleChange={this.props.handleChange}
		/>
	);

	render() {
		const {
			classes,
			isVisible,
			questionVariant,
			question,
			value,
			name,
			radioLists,
			qn
		} = this.props;

		return (
			<div>
				{isVisible && (
					<Fragment>
						{question && (
							<div>
								<Typography
									variant={questionVariant}
									className={classes.question}
								>
									{question[selectedLanguage]}
								</Typography>
							</div>
						)}
						<RadioGroup
							name={name}
							className={classes.group}
							value={value}
							row
							onChange={this.handleChange}
						>
							{radioLists.map((each, i) => (
								<FormControlLabel
									className={classes.eachRadio}
									value={each.value}
									control={<Radio />}
									label={each[selectedLanguage]}
								/>
							))}
						</RadioGroup>

						{this.getOtherTextField(name, value)}
					</Fragment>
				)}
			</div>
		);
	}
}

const styles = theme => ({
	group: {
		marginTop: theme.spacing.unit * 1,
		marginBottom: theme.spacing.unit * 3
	},
	eachRadio: {
		marginLeft: theme.spacing.unit * 1
	},
	question: {
		fontWeight: "bold"
	}
});

RadioButton.propTypes = {
	classes: PropTypes.object.isRequired,
	questionVariant: PropTypes.string,
	question: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	isVisible: PropTypes.bool
};

RadioButton.defaultProps = {
	questionVariant: "body"
	// isVisible: false
};

export default withStyles(styles)(RadioButton);
