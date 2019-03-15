import { Grid, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import { Skeleton } from "antd";
import classNames from "classnames";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import PropTypes from "prop-types";
import React from "react";
import isEmpty from "../../../utils/validation/is-empty";

import Card from "../../common/Card/Card.jsx";
import CardBody from "../../common/Card/CardBody";
import CardHeader from "../../common/Card/CardHeader.jsx";
import CardIcon from "../../common/Card/CardIcon";
import "./fa.css";
import UserProgress from "./UserProgress";
var FontAwesome = require("react-fontawesome");

class PopulationInfo extends React.Component {
	componentDidMount() {
		loadCSS(
			"https://use.fontawesome.com/releases/v5.1.0/css/all.css",
			document.querySelector("#insertion-point-jss")
		);
	}

	prepareStatistics = data => {
		const { classes } = this.props;
		return data.map((each, key) => (
			<Grid
				item
				xl={2}
				lg={3}
				md={4}
				sm={6}
				xs={12}
				key={key}
				style={{ height: "100%" }}
			>
				<Card className={classes.card}>
					<CardHeader color="warning" stats icon>
						<CardIcon color="success">
							{/* <Icon
								className={classNames(
									classes.white,
									`fas fa-${each.icon}`,
									classes.size
								)}
								color="action"
							/> */}

							<Typography className={this.props.classes.populationHeadline}>
								{each["english"]}
							</Typography>
						</CardIcon>
						<CardBody style={{ paddingTop: 10 }}>
							<h1 className={classes.cardCategory}>{each.count}</h1>
							<h3 className={classes.cardTitle}>{each.unit["english"]}</h3>
						</CardBody>
					</CardHeader>
				</Card>
			</Grid>
		));
	};

	getCard = () => {
		const { classes } = this.props;
		const population = [
			{ title: "Total User", count: "150" },
			{ title: "Total User", count: "150" },
			{ title: "Total User", count: "150" },
			{ title: "Total User", count: "150" }
		];
		const icon = ["home", "users", "male", "female", "user"];
		const bg = [
			"#00ACC1", //lim
			"#f44336", //w1
			"#ff5722",
			"#673ab7",
			"#e91e63",
			"#9c27b0"
		];

		return (
			<Grid item md={4}>
				<Card chart color="info">
					<CardHeader color="success" stats icon>
						<CardIcon color="success">
							<Typography className={this.props.classes.populationHeadline}>
								Title
							</Typography>
						</CardIcon>
					</CardHeader>

					<CardBody>
						{population ? (
							population.map((eachPop, index) => (
								<Grid
									item
									container
									direction="row"
									justify="space-between"
									alignItems="flex-start"
									className={classNames(
										classes.infoRow,
										index !== population.length - 1 && classes.border
									)}
									key={index}
								>
									<Grid item>
										<Icon
											className={classNames(
												classes.icon,
												`fa fa-${icon[index]}`
											)}
											color="action"
										/>
									</Grid>

									<Grid item>
										<Typography className={classes.populationTitle}>
											{eachPop.title}
										</Typography>
									</Grid>
									<Grid item>
										<Typography variant="body1" style={{ marginLeft: "auto" }}>
											{eachPop.count}
										</Typography>
									</Grid>
								</Grid>
							))
						) : (
							<div>
								{[1, 2, 3].map(() => (
									<Skeleton avatar paragraph={{ rows: 0 }} />
								))}
							</div>
						)}
					</CardBody>
				</Card>
			</Grid>
		);
	};
	getLoading = count => {
		return (
			<Grid item md={4}>
				<Card>
					<CardHeader color="success" stats icon>
						<CardIcon color="success">
							<Typography className={this.props.classes.populationHeadline}>
								Title
							</Typography>
						</CardIcon>
					</CardHeader>
					<CardBody>
						{[...Array(count).keys()].map(() => (
							<Skeleton avatar paragraph={{ rows: 0 }} />
						))}
					</CardBody>
				</Card>
			</Grid>
		);
	};

	render() {
		const { classes, loading } = this.props;
		const progress = [
			{ title: "title", subtitle: "subtitle", data: 120, total: 130 },
			{ title: "title", subtitle: "subtitle", data: 120, total: 130 },
			{ title: "title", subtitle: "subtitle", data: 120, total: 130 },
			{ title: "title", subtitle: "subtitle", data: 120, total: 130 },
			{ title: "title", subtitle: "subtitle", data: 120, total: 130 },
			{ title: "title", subtitle: "subtitle", data: 120, total: 130 },
			{ title: "title", subtitle: "subtitle", data: 120, total: 130 },
			{ title: "title", subtitle: "subtitle", data: 120, total: 130 },
			{ title: "title", subtitle: "subtitle", data: 120, total: 130 },
			{ title: "title", subtitle: "subtitle", data: 120, total: 130 }
		];
		return (
			<div>
				<Grid container direction="column">
					<UserProgress
						wardData={this.props.wardData}
						progress={progress}
						loading={this.props.progressLoad}
					/>
					<Grid container spacing={24} style={{ marginTop: 20 }}>
						{loading ? this.getLoading(5) : this.getCard()}
					</Grid>
				</Grid>
			</div>
		);
	}
}

PopulationInfo.propTypes = {
	classes: PropTypes.object.isRequired
};

const styles = theme => ({
	card: {
		paddingBottom: theme.spacing.unit * 2
	},
	white: {
		color: "#FFF"
	},
	size: {
		fontSize: "4px",
		width: 40,
		height: 40
	},
	infoRow: {
		display: "flex",
		alignItems: "center",
		paddingTop: 10,
		paddingBottom: 10
	},
	border: {
		borderBottom: "1px solid #ddd"
	},
	populationTitle: {
		fontSize: "1rem",
		color: "#575962",
		fontWeight: 500,
		marginLeft: 10,
		marginRight: 10
	},
	populationHeadline: {
		fontSize: "1rem",
		color: "#FFFFFF",
		fontWeight: 500
	}
});
export default withStyles(styles)(PopulationInfo);
