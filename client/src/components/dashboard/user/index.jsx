import { Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import withStyles from "@material-ui/core/styles/withStyles";
import AddIcon from "@material-ui/icons/Add";
import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../../common/Card/Card.jsx";
import CardBody from "../../common/Card/CardBody.jsx";
import CardHeader from "../../common/Card/CardHeader";
import GridContainer from "../../common/Grid/GridContainer.jsx";
// core components
import GridItem from "../../common/Grid/GridItem.jsx";
import ListUser from "./ListUser";
class Home extends Component {
	state = {
		users: []
	};
	componentDidMount() {
		this.fetchUser();
	}

	fetchUser = () => {
		Axios.get("/api/users/list")
			.then(res => {
				this.setState({
					users: res.data
				});
			})
			.catch(err => {});
	};

	render() {
		const { classes } = this.props;
		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<Card>
						<CardHeader color="primary">
							<Typography variant="h6" className={classes.cardTitleWhite}>
								प्रयोगकर्ताको सुची
								<Link to="/users/add">
									<Fab color="primary" aria-label="Add" className={classes.fab}>
										<AddIcon />
									</Fab>
								</Link>
							</Typography>
						</CardHeader>
						<CardBody>
							<ListUser users={this.state.users} fetchUser={this.fetchUser} />
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

export default withStyles(styles)(Home);
