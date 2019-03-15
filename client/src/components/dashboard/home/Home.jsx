import React, { Component } from "react";
import WardInfo from "./WardInfo";
import { withStyles } from "@material-ui/core/styles";
// import { getCount, getProgressData } from "../../../actions/analysisAction";
import { connect } from "react-redux";

import { Typography, Grid } from "@material-ui/core";
import UserEngagement from "./UserEngagement";
class Home extends Component {
	state = {
		wardData: 0
	};

	// componentDidMount() {
	// 	this.props.getCount({});
	// 	this.props.getProgressData({});
	// }

	onWardClick = wardData => {
		this.state.wardData != wardData &&
			this.setState({ wardData }, () => {
				// this.props.getCount(wardData);
				// this.props.getProgressData(wardData);
			});
	};

	render() {
		const ward = [
			{
				backgroundColor: "#f44336",
				key: 1,
				value: 1,
				time: "Today",
				english: "Basabote",
				nepali: "बाँस्बोटे"
			},
			{
				key: 2,
				value: 2,
				backgroundColor: "#ff5722",
				time: "Yesterday ",
				english: "Tamlichha",
				nepali: "ताम्लिछा"
			},
			{
				key: 3,
				value: 3,
				backgroundColor: "#673ab7",
				time: "This Week",
				english: "Baraha",
				nepali: "बराहा"
			},
			{
				key: 4,
				value: 4,
				backgroundColor: "#e91e63",
				time: "This Month",
				english: "Balamta",
				nepali: "बलम्ता"
			},
			{
				key: 5,
				value: 5,
				backgroundColor: "#9c27b0",
				time: "All time",
				english: "Jante",
				nepali: "जाते"
			},
			{
				key: 5,
				value: 5,
				backgroundColor: "#9c27b0",
				time: "Custom",
				english: "Jante",
				nepali: "जाते"
			}
		];

		return (
			<div>
				<Typography variant="h5" gutterBottom>
					Title
				</Typography>
				<div style={{ marginBottom: 25, marginTop: 20 }}>
					<Grid container spacing={16}>
						{ward.map((each, key) => (
							<Grid item>
								<WardInfo
									isActive={key === this.state.wardData}
									backgroundColor={each.backgroundColor}
									onWardClick={this.onWardClick}
									unique={key}
									key={key}
									wardNumber={each["english"]}
									time={each.time}
								/>
							</Grid>
						))}
					</Grid>
				</div>

				<UserEngagement
					progressLoad={false}
					// progress={progress}
					wardData={this.state.wardData}
					// population={data}
					loading={false}
				/>
			</div>
		);
	}
}

export default Home;
// const mapStateToProps = ({ analysis }) => ({
// 	population: analysis.populationCount,
// 	institution: analysis.institutionCount,
// 	loading: analysis.loading,
// 	progressLoad: analysis.progressLoad,
// 	progress: analysis.progress
// });

// export default connect(
// 	mapStateToProps,
// 	{ getCount, getProgressData }
// )(Home);
