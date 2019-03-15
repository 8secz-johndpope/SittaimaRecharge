import React, { Component } from "react";
import WardInfo from "./WardInfo";
import { withStyles } from "@material-ui/core/styles";
import PopulationInfo from "./PopulationInfo";
import InstitutionalInfo from "./InstitutionalInfo";
import { getCount, getProgressData } from "../../../actions/analysisAction";
import { connect } from "react-redux";
import GridContainer from "../../common/Grid/GridContainer";
import {
	ward,
	wadaBibaranName,
	gaupalikaWard,
	selectedLanguage
} from "../../../variable/global";
import VillageMap from "./VillageMap"
import { Typography, Grid } from "@material-ui/core";
class Home extends Component {
	state = {
		wardData: {}
	};

	componentDidMount() {
		this.props.getCount({});
		this.props.getProgressData({});
	}

	onWardClick = wardData => {
		this.state.wardData.wardNumber != wardData.wardNumber &&
			this.setState({ wardData }, () => {
				this.props.getCount(wardData);
				this.props.getProgressData(wardData);
			});
	};

	render() {
		const {
			loading,
			population,
			institution,
			progress,
			progressLoad
		} = this.props;
		const gaupalika = gaupalikaWard[selectedLanguage].split(" ");
		return (
			<div>
				<Typography variant="h5" gutterBottom>
					{wadaBibaranName}
				</Typography>
				<div style={{ marginBottom: 25, marginTop: 20 }}>
					<Grid container spacing={16}>
						{ward.map((each, key) => (
							<Grid item>
								<WardInfo
									isActive={key + 1 == this.state.wardData.wardNumber}
									backgroundColor={each.backgroundColor}
									onWardClick={this.onWardClick}
									unique={key + 1}
									key={key}
									wardNumber={each[selectedLanguage]}
									wardName={each.ward}
								/>
							</Grid>
						))}
						<Grid item>
							<WardInfo
								isActive={undefined == this.state.wardData.wardNumber}
								backgroundColor={"#00ACC1"}
								unique={0}
								wardNumber={gaupalika[0]}
								wardName={gaupalika[1]}
								onWardClick={this.onWardClick}
							/>
						</Grid>
					</Grid>
				</div>

				<PopulationInfo
					progressLoad={progressLoad}
					progress={progress}
					wardData={this.state.wardData}
					population={population}
					loading={loading}
				/>

				<VillageMap
								zoom={12}
								position={[27.0937722,86.6203392,17]}
								// lat={lat}
								// lng={lng}
								// addMarker={this.props.addMarker}
							>
								<p>
									स्थान प्राप्त गर्न<em>मार्कर</em> पिन गर्नुहोस
								</p>
							</VillageMap>
				{/* <InstitutionalInfo loading={loading} /> */}
			</div>
		);
	}
}

const mapStateToProps = ({ analysis }) => ({
	population: analysis.populationCount,
	institution: analysis.institutionCount,
	loading: analysis.loading,
	progressLoad: analysis.progressLoad,
	progress: analysis.progress
});

export default connect(
	mapStateToProps,
	{ getCount, getProgressData }
)(Home);
