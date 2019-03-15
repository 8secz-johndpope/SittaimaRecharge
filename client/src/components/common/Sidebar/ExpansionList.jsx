import { Grid, withStyles } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Icon from "@material-ui/core/Icon";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandIcon from "@material-ui/icons/ExpandMore";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class ExapnsionLink extends Component {
	// verifies if routeName is the one active (in browser input)
	activeRoute(routeName) {
		return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
	}
	render() {
		const {
			classes,
			color,
			sideLink,
			expanded,
			handleChange,
			handleClose,
			icon
		} = this.props;

		return (
			<div>
				<ExpansionPanel
					elevation={0}
					expanded={expanded}
					onChange={handleChange(sideLink.sidebarName)}
					className={classes.container}
				>
					<ExpansionPanelSummary
						className={classes.summary}
						expandIcon={<ExpandIcon className={classes.white} />}
					>
						<div className={classes.category}>
							{sideLink.icon} {sideLink.sidebarName}
						</div>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails className={classes.details}>
						<Grid
							container
							direction="column"
							className={classes.noteContainer}
						>
							{sideLink.child.map((each, key) => {
								var activePro = " ";
								var listItemClasses;

								listItemClasses = classNames({
									[" " + classes[color]]: this.activeRoute(each.path)
								});

								const whiteFontClasses = classNames({
									[" " + classes.whiteFont]: this.activeRoute(each.path)
								});
								return (
									<div className={classes.eachLink} key={key}>
										<NavLink
											to={each.path}
											className={activePro + classes.item}
											activeClassName="active"
										>
											<ListItem
												button
												className={classes.itemLink + listItemClasses}
											>
												<ListItemIcon
													className={classes.itemIcon + whiteFontClasses}
												>
													{typeof each.icon === "string" ? (
														<Icon>{each.icon}</Icon>
													) : (
														<each.icon />
													)}
												</ListItemIcon>
												<ListItemText
													primary={each.sidebarName}
													className={classes.itemText + whiteFontClasses}
													disableTypography={true}
												/>
											</ListItem>
										</NavLink>
									</div>
								);
							})}
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		);
	}
}

const styles = theme => ({
	container: {
		backgroundColor: "transparent",
		// padding: 0,
		// margin: 0,
		border: "none"
	},
	summary: {
		paddingLeft: 15,
		paddingRight: 15
	},
	category: {
		// minHeight: 30,
		color: "#FFF"
	},
	details: {
		padding: 0,
		margin: 0,
		flexWrap: "nowrap"
		// border: "none",
		// marginTop: theme.spacing.unit * 1
	},
	noteContainer: {
		// margin: theme.spacing.unit
		flexWrap: "nowrap"
	},
	white: {
		color: "#FFF"
	},
	eachLink: {
		marginTop: 1
	}
});

ExapnsionLink.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ExapnsionLink);
