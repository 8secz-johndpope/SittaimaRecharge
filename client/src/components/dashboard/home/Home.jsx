import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
	state = {
		populationCount: [],
		institution: {},
		wardData: {}
	};

	componentDidMount() {
		// this.props.getCount();
	}

	// componentDidUpdate(prevProps) {
	// 	if (this.props.population !== prevProps.population) {
	// 		this.setState({
	// 			populationCount: this.props.population && this.props.population
	// 		});
	// 	}
	// 	if (this.props.institutionCount !== prevProps.institutionCount) {
	// 		this.setState({
	// 			institutionCount:
	// 				this.props.institutionCount && this.props.institutionCount
	// 		});
	// 	}
	// }

	render() {
		return <div>Home Page</div>;
	}
}

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	null
)(Home);
