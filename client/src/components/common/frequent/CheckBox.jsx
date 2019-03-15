import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { selectedLanguage } from "../../../variable/global";

class CheckOneField extends Component {
	handleChange = event => {
		var data = this.props.value;
		if (data && data.length > 0 && !event.target.checked) {
			data.splice(data.indexOf(event.target.value), 1);
		} else if (data === undefined || data.length === 0) {
			data = [];
			data.push(event.target.value);
		} else data.push(event.target.value);
		this.props.handleCompChange(event.target.name, data);
	};

	render() {
		const {
			classes,
			isVisible,
			questionVariant,
			question,
			checkList,
			value,
			name
		} = this.props;

		return (
			<div>
				{isVisible && (
					<Fragment>
						<FormGroup className={classes.group}>
							{checkList.map(each => (
								<FormControlLabel
									key={each.value}
									control={
										<Checkbox
											name={name}
											checked={value.indexOf(each.value) > -1 || false}
											onChange={this.handleChange}
											value={each.value}
										/>
									}
									label={each[selectedLanguage]}
								/>
							))}
						</FormGroup>
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
	formControl: {
		margin: theme.spacing.unit * 3
	},
	group: {
		margin: `${theme.spacing.unit}px 0`,
		display: "flex"
	},
	chips: {
		display: "flex",
		flexWrap: "wrap"
	},
	chip: {
		margin: theme.spacing.unit / 4
	},
	noLabel: {
		marginTop: theme.spacing.unit * 3
	},
	flexColumn: {
		flexDirection: "column"
	},
	select: {
		marginBottom: theme.spacing.unit * 4,
		marginLeft: theme.spacing.unit * 1
	}
});

CheckOneField.propTypes = {
	classes: PropTypes.object.isRequired,
	questionVariant: PropTypes.string,
	question: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.array.isRequired,
	require: PropTypes.bool.isRequired
};

CheckOneField.defaultProps = {
	questionVariant: "body1",
	isVisible: false,
	value: [],
	require: false
};

export default withStyles(styles)(CheckOneField);
