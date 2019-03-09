import Collapse from "@material-ui/core/Collapse";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Component } from "react";

class Text extends Component {
	handleChange = event => {
		this.props.handleChange(event.target.name, event.target.value);
	};

	render() {
		const { classes, isVisible } = this.props;

		return (
			<div>
				{isVisible && (
					<Collapse in={isVisible} className={classes.component}>
						{this.props.children}
					</Collapse>
				)}
			</div>
		);
	}
}

const styles = theme => ({
	component: {
		border: "1px solid  rgba(0, 0, 0, 0.19)",
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 1}px ${theme
			.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
		borderRadius: 5,
		marginBottom: 20
	}
});

Text.propTypes = {
	classes: PropTypes.object.isRequired,
	isVisible: PropTypes.boolean
};

Text.defaultProps = {
	isVisible: false
};

export default withStyles(styles)(Text);
