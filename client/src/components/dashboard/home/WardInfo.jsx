import { withTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "antd";
import classNames from "classnames";
import React, { Component } from "react";
import injectSheet from "react-jss";

class WardInfo extends Component {
	onWardClick = unique => evt => {
		this.props.onWardClick(unique);
	};
	render() {
		const {
			classes,
			wardNumber,
			time,
			unique,
			backgroundColor,
			isActive
		} = this.props;

		return (
			<Button
				type={isActive ? "primary" : null}
				shape="round"
				size="large"
				className={classNames(classes.button, isActive && classes.activeButton)}
				onClick={this.onWardClick(unique)}
			>
				<span style={{ display: "flex", verticalAlign: "baseline" }}>
					<Typography
						variant="body2"
						className={classNames(
							classes.wardNumber,
							isActive && classes.white
						)}
					>
						{time}
					</Typography>
				</span>
			</Button>
		);
	}
}

const styles = theme => ({
	wardText: {
		color: "#FF0000"
	},
	white: {
		color: "#FFFFFF"
	},
	card: props => ({
		maxWidth: 345,
		color: "#fff",
		backgroundColor: props.backgroundColor,
		paddingTop: theme.spacing.unit * 1,
		paddingBottom: theme.spacing.unit * 1,
		paddingLeft: theme.spacing.unit * 7,
		paddingRight: theme.spacing.unit * 7,
		marginBottom: theme.spacing.unit * 3,
		cursor: "pointer",
		"&:hover": {
			color: "#51AB55",
			backgroundColor: "#FFFFFF"
		}
	}),
	container: {
		display: "inline-flex"
	},
	button: {
		height: "auto",
		padding: theme.spacing.unit * 3,
		marginBottom: theme.spacing.unit * 3
	},
	activeButton: {
		backgroundColor: "#2196F3",
		color: "#FFF"
	},
	span: { display: "flex", verticalAlign: "baseline" },
	wardNumber: { marginRight: 10 }
});

// export default withStyles(styles)(WardInfo);

export default withTheme()(injectSheet(styles)(WardInfo));
