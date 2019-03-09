import {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";
import React from "react";

class AlertDialog extends React.Component {
	render() {
		const {
			classes,
			open,
			content,
			title,
			negButton,
			posButton,
			children
		} = this.props;
		return (
			<Dialog
				open={open}
				onClose={this.props.handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{content}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.props.negButtonClick} color="primary">
						{negButton}
					</Button>
					<Button onClick={this.props.posButtonClick} color="primary" autoFocus>
						{posButton}
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

AlertDialog.propTypes = {
	classes: PropTypes.object.isRequired
};

export default AlertDialog;
