import { withStyles } from "@material-ui/core/styles";
// import { ReactLeafletSearch } from "react-leaflet-search";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer,GeoJSON } from "react-leaflet";
import {gaupalikaByward} from "../../../variable/villageGeoJson";


class LeafletMap extends Component {
   
	render() {
		const { classes, zoom,position} = this.props;
        // this.getGeoJSONData()
       const GeoJSONData =gaupalikaByward
		// const position = [27.143225718533714,86.576736350367739 ];
		// const SearchBar = withLeaflet(SearchComponent);
		return (
			<div className={classes.component}>
				<Map center={position} zoom={zoom} >
					{/* <SearchBar /> */}
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					
					 {
                         <GeoJSON key='my-geojson' data={GeoJSONData} />
            }
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
	isVisible: PropTypes.bool
};

LeafletMap.defaultProps = {
	isVisible: false
};

export default withStyles(styles)(LeafletMap);
