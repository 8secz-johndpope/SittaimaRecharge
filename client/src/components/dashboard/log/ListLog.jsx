import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import React, { Component } from "react";
import Card from "../../common/Card/Card.jsx";
import CardBody from "../../common/Card/CardBody.jsx";
import CardHeader from "../../common/Card/CardHeader";
import GridContainer from "../../common/Grid/GridContainer.jsx";
// core components
import GridItem from "../../common/Grid/GridItem.jsx";

class ListLog extends Component {
	render() {
		const { classes } = this.props;
		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<Card>
						<CardHeader color="primary">
							<Typography variant="h6" className={classes.cardTitleWhite}>
								Log Management
							</Typography>
						</CardHeader>
						<CardBody>
							<Table className={classes.table}>
								<TableHead>
									<TableRow>
										<TableCell>Id</TableCell>
										<TableCell>Log Message</TableCell>
										<TableCell>Created By</TableCell>
										<TableCell>Created At</TableCell>
										{/* <TableCell>Action</TableCell> */}
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell component="th" scope="row" />
										<TableCell align="left" />
										<TableCell align="left" />
										<TableCell align="left" />
										{/* <TableCell align="left">
											<VisibilityIcon />
											<Icon />
											<DeleteIcon />
										</TableCell> */}
									</TableRow>
								</TableBody>
							</Table>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		);
	}
}
const styles = theme => ({
	cardCategoryWhite: {
		"&,& a,& a:hover,& a:focus": {
			color: "rgba(255,255,255,.62)",
			margin: "0",
			fontSize: "14px",
			marginTop: "0",
			marginBottom: "0"
		},
		"& a,& a:hover,& a:focus": {
			color: "#FFFFFF"
		}
	},
	cardTitleWhite: {
		color: "#FFFFFF",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "300",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none",
		"& small": {
			color: "#777",
			fontSize: "65%",
			fontWeight: "400",
			lineHeight: "1"
		}
	},
	root: {
		width: "100%",
		marginTop: theme.spacing.unit * 3
	},
	table: {
		minWidth: 500
	},
	tableWrapper: {
		overflowX: "auto"
	},
	fab: {
		float: "right"
	}
});

export default withStyles(styles)(ListLog);
