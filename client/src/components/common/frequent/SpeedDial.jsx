import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import PrintIcon from "@material-ui/icons/Print";
import SaveIcon from "@material-ui/icons/Save";
import ShareIcon from "@material-ui/icons/Share";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
	speedDial: {
		padding: 10
	},
	directionUp: {},
	directionRight: {},
	directionDown: {},
	directionLeft: {}
});

const actions = [
	{ icon: <FileCopyIcon />, name: "Copy" },
	{ icon: <SaveIcon />, name: "Save" },
	{ icon: <PrintIcon />, name: "Print" },
	{ icon: <ShareIcon />, name: "Share" },
	{ icon: <DeleteIcon />, name: "Delete" }
];

class SpeedDials extends React.Component {
	state = {
		open: false,
		hidden: false
	};

	handleClick = () => {
		this.setState(state => ({
			open: !state.open
		}));
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	render() {
		const { hidden, open } = this.state;

		return (
			<SpeedDial
				ariaLabel="SpeedDial example"
				hidden={hidden}
				icon={<SpeedDialIcon />}
				onBlur={this.handleClose}
				onClick={this.handleClick}
				onClose={this.handleClose}
				onFocus={this.handleOpen}
				onMouseEnter={this.handleOpen}
				onMouseLeave={this.handleClose}
				open={open}
				direction="left"
			>
				{actions.map(action => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						onClick={this.handleClick}
					/>
				))}
			</SpeedDial>
		);
	}
}

SpeedDials.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpeedDials);
