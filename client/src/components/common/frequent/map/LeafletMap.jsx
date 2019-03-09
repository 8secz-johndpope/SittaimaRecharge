import { withStyles } from "@material-ui/core/styles";
// import { ReactLeafletSearch } from "react-leaflet-search";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

// const SearchComponent = props => (
// 	<ReactLeafletSearch position="topleft" provider="OpenStreetMap" />
// );

class LeafletMap extends Component {
	render() {
		const { classes, zoom, lat, lng } = this.props;
		const position = [lat, lng];
		// const SearchBar = withLeaflet(SearchComponent);
		return (
			<div className={classes.component}>
				<Map center={position} zoom={zoom} onClick={this.props.addMarker}>
					{/* <SearchBar /> */}
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position}>
						<Popup>{this.props.children}</Popup>
					</Marker>
				</Map>
			</div>
		);
	}
}

const styles = theme => ({
	component: {
		height: "100%",
		width: "100%"
	}
});

LeafletMap.propTypes = {
	classes: PropTypes.object.isRequired,
	isVisible: PropTypes.boolean
};

LeafletMap.defaultProps = {
	isVisible: false
};

export default withStyles(styles)(LeafletMap);
