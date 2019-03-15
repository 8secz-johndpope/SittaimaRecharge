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
import {
	janasankhyaBibaranName,
	selectedLanguage
} from "../../../variable/global";
import Card from "../../common/Card/Card.jsx";
import CardBody from "../../common/Card/CardBody";
import CardHeader from "../../common/Card/CardHeader.jsx";
import CardIcon from "../../common/Card/CardIcon";
import "./fa.css";
import FamilyProgress from "./FamilyProgress";
var FontAwesome = require("react-fontawesome");

class PopulationInfo extends React.Component {
	componentDidMount() {
		loadCSS(
			"https://use.fontawesome.com/releases/v5.1.0/css/all.css",
			document.querySelector("#insertion-point-jss")
		);
	}
	getTitle = (ward, object) => {
		if (isEmpty(ward)) return object[0][selectedLanguage];
		else return object[ward.wardNumber][selectedLanguage];
	};

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
								{each[selectedLanguage]}
							</Typography>
						</CardIcon>
						<CardBody style={{ paddingTop: 10 }}>
							<h1 className={classes.cardCategory}>{each.count}</h1>
							<h3 className={classes.cardTitle}>
								{each.unit[selectedLanguage]}
							</h3>
						</CardBody>
					</CardHeader>
				</Card>
			</Grid>
		));
	};

	getCard = () => {
		const { classes } = this.props;
		const population = this.props.population.data;
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
								{this.getTitle(this.props.wardData, janasankhyaBibaranName)}
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
											{eachPop.title[selectedLanguage]}
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
								{this.getTitle(this.props.wardData, janasankhyaBibaranName)}
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
		const data = [
			{
				english: "Area",
				icon: "map-marked-alt",
				nepali: "Area",
				count: 121.56,
				unit: { english: "sq. km", nepali: "sq. km" }
			},
			{
				english: "Density",
				icon: "map-marked-alt",
				nepali: "Density",
				count: 80.54,
				unit: { english: "per sq. km", nepali: "per sq. km" }
			},
			{
				english: "Gender Ratio",
				icon: "map-marked-alt",
				nepali: "Gender Ratio",
				count: 89.43,
				unit: { english: "m:f", nepali: "m:f" }
			},
			{
				english: "Gender Ratio",
				icon: "map-marked-alt",
				nepali: "Gender Ratio",
				count: 89.43,
				unit: { english: "m:f", nepali: "m:f" }
			},
			{
				english: "Gender Ratio",
				icon: "map-marked-alt",
				nepali: "Gender Ratio",
				count: 89.43,
				unit: { english: "m:f", nepali: "m:f" }
			}
		];
		return (
			<div>
				<Grid container direction="column">
					{/* {loading ? (
						<Grid
							container
							direction="row"
							justify="center"
							alignItems="center"
						>
							<Grid item>
								<ClipLoader
									sizeUnit={"px"}
									size={84}
									color={"#00ACC1"}
									loading={loading}
								/>
							</Grid>
						</Grid>
					) :  */}

					{/* <Grid
						container
						direction="row"
						spacing={16}
						style={{ display: "flex" }}
					>
						{this.prepareStatistics(data)}
					</Grid> */}

					<FamilyProgress
						wardData={this.props.wardData}
						progress={this.props.progress}
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
