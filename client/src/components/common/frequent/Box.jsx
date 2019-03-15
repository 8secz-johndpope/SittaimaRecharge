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
				{isVisible && <Collapse in={isVisible}>{this.props.children}</Collapse>}
			</div>
		);
	}
}

const styles = theme => ({});

Text.propTypes = {
	classes: PropTypes.object.isRequired,
	isVisible: PropTypes.bool
};

Text.defaultProps = {
	isVisible: false
};

export default withStyles(styles)(Text);
