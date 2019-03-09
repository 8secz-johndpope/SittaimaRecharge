import {
	Checkbox,
	Chip,
	Input,
	ListItemText,
	MenuItem,
	Select,
	Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { otherQuestion, selectedLanguage } from "../../../variable/global";
import TextField from "./TextField";

class MultipleSelect extends Component {
	handleChange = event => {
		this.props.handleChange(event.target.name, event.target.value);
	};

	chipMapping = value => {
		const { tagLists } = this.props;
		var data = "";
		tagLists.forEach(taglist => {
			// const data =  && taglist[selectedLanguage];
			if (taglist.value === value) {
				data = taglist[selectedLanguage];
			}
		});

		return data;
	};

	getOtherTextField = (name, value) => (
		<TextField
			question={otherQuestion}
			name={this.props.name + "Other"}
			require={this.props.require}
			placeholder="अन्य"
			value={this.props.other}
			isVisible={this.props.value.indexOf("other") != -1}
			handleChange={this.props.handleChange}
		/>
	);
	render() {
		const {
			classes,
			isVisible,
			questionVariant,
			question,
			tagLists,
			value,
			name
		} = this.props;
		const ITEM_HEIGHT = 48;
		const ITEM_PADDING_TOP = 8;
		const MenuProps = {
			PaperProps: {
				style: {
					maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
					width: 250
				}
			}
		};
		console.log(value);
		return (
			<div>
				{isVisible && (
					<Fragment>
						{question && (
							<Typography variant={questionVariant}>
								{question[selectedLanguage]}
							</Typography>
						)}
						<br />
						<Select
							multiple
							name={name}
							value={value}
							className={classes.select}
							onChange={this.handleChange}
							input={<Input id="select-multiple-checkbox" />}
							renderValue={selected => (
								<div className={classes.chips}>
									{selected.map(value => (
										<Chip
											key={value}
											label={this.chipMapping(value)}
											className={classes.chip}
										/>
									))}
								</div>
							)}
							MenuProps={MenuProps}
						>
							{tagLists.map((taglist, i) => (
								<MenuItem key={i} value={taglist.value}>
									<Checkbox checked={value.indexOf(taglist.value) > -1} />
									<ListItemText primary={taglist[selectedLanguage]} />
								</MenuItem>
							))}
						</Select>
						{this.getOtherTextField()}
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

MultipleSelect.propTypes = {
	classes: PropTypes.object.isRequired,
	questionVariant: PropTypes.string,
	question: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.array.isRequired,
	require: PropTypes.bool.isRequired
};

MultipleSelect.defaultProps = {
	questionVariant: "body",
	isVisible: false,
	value: [],
	require: false
};

export default withStyles(styles)(MultipleSelect);
