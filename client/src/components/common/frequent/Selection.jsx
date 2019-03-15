import { MenuItem, Select, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { otherQuestion, selectedLanguage } from "../../../variable/global";
import TextField from "./TextField";

class Selection extends Component {
	handleChange = event => {
		this.props.handleChange(event.target.name, event.target.value);
	};
	getOtherTextField = (name, value) => (
		<TextField
			question={otherQuestion}
			name={this.props.name + "Other"}
			require={this.props.require}
			placeholder="अन्य"
			value={this.props.other}
			isVisible={this.props.value === "other"}
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
			selectList
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
						<Select
							name={name}
							value={value}
							onChange={this.handleChange}
							className={classes.component}
						>
							{selectList.map(each => (
								<MenuItem value={each.value}>{each[selectedLanguage]}</MenuItem>
							))}
						</Select>
						{this.getOtherTextField(name, value)}
					</Fragment>
				)}
			</div>
		);
	}
}

const styles = theme => ({
	component: {
		marginLeft: theme.spacing.unit * 1,
		marginTop: theme.spacing.unit * 1,
		marginBottom: theme.spacing.unit * 3
	}
});

Selection.propTypes = {
	classes: PropTypes.object.isRequired,
	questionVariant: PropTypes.string,
	question: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	isVisible: PropTypes.bool,
	selectList: PropTypes.array.isRequired
};

Selection.defaultProps = {
	questionVariant: "body",
	isVisible: false
};

export default withStyles(styles)(Selection);
