import { successColor } from "../../material-dashboard-react.jsx";

const dashboardStyle = theme => ({
	successText: {
		color: successColor
	},
	upArrowCardCategory: {
		width: "16px",
		height: "16px"
	},
	card: {
		height: 100,
		backgroundColor: "#FFFF"
	},
	stats: {
		color: "#999999",
		display: "inline-flex",
		fontSize: "12px",
		lineHeight: "22px",
		"& svg": {
			top: "4px",
			width: "16px",
			height: "16px",
			position: "relative",
			marginRight: "3px",
			marginLeft: "3px"
		},
		"& .fab,& .fas,& .far,& .fal,& .material-icons": {
			top: "4px",
			fontSize: "16px",
			position: "relative",
			marginRight: "3px",
			marginLeft: "3px"
		}
	},
	cardCategory: {
		color: "black",
		margin: "0",
		fontSize: "15px",
		marginTop: "0",
		paddingTop: "10px",
		marginBottom: "0"
	},
	cardCategoryWhite: {
		color: "rgba(255,255,255,.62)",
		margin: "0",
		fontSize: "14px",
		marginTop: "0",
		marginBottom: "0"
	},
	cardTitle: {
		color: "#3C4858",
		padding: "10px 0 0 0",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "300",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none",
		"& small": {
			color: "#777",
			fontWeight: "400",
			lineHeight: "1"
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
			fontWeight: "400",
			lineHeight: "1"
		}
	},
	mb2: {
		marginBottom: 20
	},
	icon: {
		fontSize: "2rem",
		color: "#ffffff"
	},
	zero: {
		margin: 0,
		padding: 0
	},
	link: {
		textDecoration: "none"
	},
	mt15: {
		marginTop: 15
	},
	fullIcon: {
		color: "#000",
		cursor: "pointer"
	}
});

export default dashboardStyle;
