import { Fab, Grid } from "@material-ui/core/es";
import Previous from "@material-ui/icons/KeyboardArrowLeft";
import React, { Component } from "react";
export default class ActionButton extends Component {
	render() {
		return (
			<Grid container direction="row">
				<Grid item>
					<Fab color="secondary" aria-label="Add">
						<Previous />
					</Fab>
					<Fab color="secondary" aria-label="Add">
						<Previous />
					</Fab>
				</Grid>
			</Grid>
		);
	}
}
