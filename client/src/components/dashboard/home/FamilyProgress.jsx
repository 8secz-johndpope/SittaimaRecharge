import { Grid, Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Progress, Skeleton } from "antd";
import "antd/dist/antd.css";
import classNames from "classnames";
import PropTypes from "prop-types";
import getRandomColor from "random-material-color";
import React from "react";
import CardHeader from "../../common/Card/CardHeader.jsx";
import CardIcon from "../../common/Card/CardIcon";
import isEmpty from "../../../utils/validation/is-empty";
import {
	statisticsAnalysisName,
	selectedLanguage
} from "../../../variable/global";
import "./fa.css";
var FontAwesome = require("react-fontawesome");

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
class FamilyProgress extends React.Component {
	state = {
		expanded: false,
		topSlicedColor: [],
		collapseSlicedColor: []
	};

	getTitle = (ward, object) => {
		if (isEmpty(ward)) return object[0][selectedLanguage];
		else return object[ward.wardNumber][selectedLanguage];
	};

	componentDidUpdate(prevProps) {
		if (this.props.progress !== prevProps.progress) {
			const progress = shuffle(this.props.progress);

			const topSliced = progress && progress.slice(0, this.dataShown);
			const collapseSliced = progress && progress.slice(this.dataShown);
			const topSlicedColor =
				topSliced && topSliced.map(() => getRandomColor.getColor());
			const collapseSlicedColor =
				collapseSliced && collapseSliced.map(() => getRandomColor.getColor());

			this.setState({
				topSliced,
				collapseSliced,
				topSlicedColor,
				collapseSlicedColor
			});
		}
	}

	slideTo = i => this.setState({ currentIndex: i });

	onSlideChanged = e => this.setState({ currentIndex: e.item });

	slideNext = () =>
		this.setState({ currentIndex: this.state.currentIndex + 1 });

	slidePrev = () =>
		this.setState({ currentIndex: this.state.currentIndex - 1 });

	getProgressStateChanged() {
		for (var i = 0; i < 1000; i++) {
			setTimeout(
				this.setState(state => ({ percent: state.percent + 10 })),
				1000
			);
		}
	}

	getLoading = (count, isLastElement) => {
		return (
			<Grid
				item
				md={12 / this.dataShown}
				sm={6}
				xs={12}
				container
				direction="column"
				className={classNames(
					isLastElement
						? this.props.classes.eachProgress
						: this.props.classes.borderRight
				)}
				style={{
					marginTop: 20,

					paddingLeft: 20,
					paddingRight: 20
				}}
			>
				{[...Array(count).keys()].map(() => (
					<Skeleton avatar paragraph={{ rows: 0 }} />
				))}
			</Grid>
		);
	};

	// console = (log, msg) => console.log(log, msg);
	dataShown = 3;
	getEachProgressDiv = (each, isLastElement, color) => (
		<Grid
			item
			md={12 / this.dataShown}
			sm={6}
			xs={12}
			container
			direction="column"
			className={classNames(
				isLastElement
					? this.props.classes.eachProgress
					: this.props.classes.borderRight
			)}
			style={{
				marginTop: 20,

				paddingLeft: 20,
				paddingRight: 20
			}}
		>
			<Grid item container>
				<Typography
					style={{
						marginTop: 20,
						display: "inline-block",
						fontSize: "1.1rem",
						fontWeight: "600"
					}}
				>
					{each.title[selectedLanguage]}
				</Typography>
			</Grid>
			<Grid
				item
				container
				direction="row"
				justify="flex-end"
				alignItems="flex-start"
			>
				<Grid item style={{ display: "flex" }}>
					<Typography
						style={{
							fontWeight: 500,
							textAlign: "right !important",
							color: color
						}}
						variant="h5"
					>
						{each.data}
					</Typography>
					<Typography
						style={{
							textAlign: "right !important"
						}}
						variant="h5"
					>
						/
					</Typography>
					<Typography
						style={{
							textAlign: "right !important",
							color: { color }
						}}
						variant="h5"
					>
						{each.total}
					</Typography>
				</Grid>
			</Grid>
			<Grid item container style={{ marginTop: 5 }}>
				<Progress
					showInfo={false}
					strokeColor={color}
					percent={parseFloat(((each.data / each.total) * 100).toFixed(2))}
				/>
			</Grid>
			<Grid
				container
				direction="row"
				justify="space-between"
				alignItems="flex-start"
				style={{ marginTop: 5 }}
			>
				<Grid item>{each.subtitle[selectedLanguage]}</Grid>
				<Grid item>
					<Typography variant="caption">
						{parseFloat(((each.data / each.total) * 100).toFixed(2))} %
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);

	handleChange = (event, expanded) => {
		this.setState({
			expanded
		});
	};

	state = {};

	render() {
		const { classes, loading, progress } = this.props;
		const {
			expanded,
			collapseSlicedColor,
			topSlicedColor,
			topSliced,
			collapseSliced
		} = this.state;

		return (
			<Grid
				container
				direction="row"
				justify="space-between"
				alignItems="center"
			>
				<div className={classes.root}>
					<ExpansionPanel
						style={{ padding: 0 }}
						expanded={expanded}
						onChange={this.handleChange}
					>
						<ExpansionPanelSummary style={{ padding: 0 }}>
							<Grid container style={{ padding: 0 }} direction="column">
								<Grid
									item
									container
									direction="row"
									justify="space-between"
									alignItems="center"
									style={{ padding: 0 }}
								>
									<Grid item>
										<CardHeader color="info" stats icon>
											<CardIcon color="info">
												<Typography
													className={this.props.classes.populationHeadline}
												>
													{this.getTitle(
														this.props.wardData,
														statisticsAnalysisName
													)}
												</Typography>
											</CardIcon>
										</CardHeader>
									</Grid>
									<Grid item style={{ marginRight: 10, float: "right" }}>
										{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
									</Grid>
								</Grid>
								<Grid container direction="row" style={{ padding: 0 }}>
									{loading
										? [...Array(this.dataShown)].map(each => this.getLoading(3))
										: topSliced &&
										  topSliced.map((each, i) => {
												const isLastElement = i === topSliced.length - 1;
												return this.getEachProgressDiv(
													each,
													isLastElement,
													topSlicedColor[i]
												);
										  })}
								</Grid>
							</Grid>
						</ExpansionPanelSummary>
						{!loading && (
							<ExpansionPanelDetails className={classes.details}>
								<Grid container style={{ marginBottom: 20 }}>
									{collapseSliced &&
										collapseSliced.map((each, i) => {
											const isLastElement = i === topSliced.length - 1;
											return this.getEachProgressDiv(
												each,
												isLastElement,
												collapseSlicedColor[i]
											);
										})}
								</Grid>
							</ExpansionPanelDetails>
						)}
					</ExpansionPanel>
				</div>
			</Grid>
		);
	}
}

FamilyProgress.propTypes = {
	classes: PropTypes.object.isRequired
};

const styles = theme => ({
	card: {
		height: "auto"
	},
	white: {
		color: "#FFF"
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
	},
	fab: {
		flexGrow: 0
	},
	root: {
		width: "100%"
	},
	heading: {
		fontSize: theme.typography.pxToRem(15)
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	},
	icon: {
		verticalAlign: "bottom",
		height: 20,
		width: 20
	},
	details: {
		alignItems: "center",
		padding: 0
	},
	column: {
		flexBasis: "33.33%"
	},
	helper: {
		borderLeft: `2px solid ${theme.palette.divider}`,
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
	},
	link: {
		color: theme.palette.primary.main,
		textDecoration: "none",
		"&:hover": {
			textDecoration: "underline"
		}
	},
	borderRight: {
		borderRight: "1px solid #e0e0e0"
	},
	eachProgress: {}
});
export default withStyles(styles)(FamilyProgress);
