import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import PropTypes from "prop-types";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import isEmpty from "../../../utils/validation/is-empty";
import {
	janasankhyaBibaranName,
	selectedLanguage
} from "../../../variable/global";
// import Card from "../../common/Card/Card.jsx";
import CardHeader from "../../common/Card/CardHeader.jsx";
import GridContainer from "../../common/Grid/GridContainer.jsx";

var FontAwesome = require("react-fontawesome");

class PopulationInfo extends React.Component {
	componentDidMount() {
		loadCSS(
			"https://use.fontawesome.com/releases/v5.1.0/css/all.css",
			document.querySelector("#insertion-point-jss")
		);
	}
	getTitle = (ward, object) => {
		console.log("ward", ward);
		if (isEmpty(ward)) return object[0][selectedLanguage];
		else return object[ward.wardNumber][selectedLanguage];
	};
	render() {
		const { classes, population, loading, wardData } = this.props;
		const bg = [
			"#00ACC1", //lim
			"#f44336", //w1
			"#ff5722",
			"#673ab7",
			"#e91e63",
			"#9c27b0"
		];
		const icon = ["home", "users", "male", "female", "user"];
		console.log("popn", population);
		return (
			<div style={{ marginTop: 50 }}>
				<Typography variant="h4" gutterBottom>
					{this.getTitle(wardData, janasankhyaBibaranName)}
				</Typography>

				<GridContainer>
					{loading ? (
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
					) : (
						<Grid container spacing={24}>
							{population &&
								population.map((each, key) => (
									<Grid item key={key} md={4}>
										<Card className={classes.card}>
											{/* <CardHeader title={each.title[selectedLanguage]} /> */}
											<CardHeader
												style={{
													backgroundColor: bg[key],
													width: "100%",
													color: "#FFF"
												}}
											>
												<Typography
													gutterBottom
													variant="h5"
													component="h2"
													className={classes.white}
												>
													{each.title[selectedLanguage]}
												</Typography>
											</CardHeader>
											<CardContent>
												{each &&
													each.data.map((eachPop, index) => (
														<div style={{ display: "flex" }}>
															<Icon
																className={classNames(
																	classes.icon,
																	`fa fa-${icon[index]}`
																)}
																color="action"
															/>

															<Typography
																variant="h6"
																style={{
																	marginLeft: 10,
																	marginRight: 10,
																	fontWeight: 500
																}}
															>
																{eachPop.title[selectedLanguage]}
															</Typography>
															<Typography variant="body1">
																{eachPop.count}
															</Typography>
														</div>
													))}
											</CardContent>
										</Card>
									</Grid>
								))}
						</Grid>
					)}
				</GridContainer>
			</div>
		);
	}
}

PopulationInfo.propTypes = {
	classes: PropTypes.object.isRequired
};

const styles = theme => ({
	card: {
		height: "auto"
	},
	white: {
		color: "#FFF"
	}
});
export default withStyles(styles)(PopulationInfo);
