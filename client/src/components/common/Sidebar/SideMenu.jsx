import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import HeaderLinks from "../../common/Header/HeaderLinks.jsx";
import ExpansionList from "./ExpansionList";

import sidebarStyle from "../../assets/jss/material-dashboard-react/components/sidebarStyle.jsx";

class SideMenu extends React.Component {
	state = {
		expanded: null
	};
	// verifies if routeName is the one active (in browser input)
	activeRoute(routeName) {
		return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
	}

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		});
	};

	handleClose = () => {
		this.setState({ expanded: null });
	};

	getLink(prop, key) {
		const { classes, color } = this.props;
		var activePro = " ";
		var listItemClasses;

		listItemClasses = classNames({
			[" " + classes[color]]: this.activeRoute(prop.path)
		});

		const whiteFontClasses = classNames({
			[" " + classes.whiteFont]: this.activeRoute(prop.path)
		});
		return (
			<NavLink
				key={key}
				to={prop.path}
				className={activePro + classes.item}
				activeClassName="active"
			>
				<ListItem button className={classes.itemLink + listItemClasses}>
					<ListItemIcon className={classes.itemIcon + whiteFontClasses}>
						{typeof prop.icon === "string" ? (
							<Icon>{prop.icon}</Icon>
						) : (
							<prop.icon />
						)}
					</ListItemIcon>
					<ListItemText
						primary={prop.sidebarName}
						className={classes.itemText + whiteFontClasses}
						disableTypography={true}
					/>
				</ListItem>
			</NavLink>
		);
	}

	componentDidMount() {
		this.props.routes.map(each => {
			if (each.hasChild) {
				each.child.map(route => {
					if (route.path == this.props.location.pathname) {
						this.setState({ expanded: each.sidebarName });
					}
				});
			}
		});
	}

	render() {
		const { classes, logo, image, logoText, routes } = this.props;

		var links = (
			<List className={classes.list}>
				{routes.map((prop, key) => {
					// if (prop.redirect) return null;

					if (prop.hasChild) {
						return (
							<ExpansionList
								key={key}
								sideLink={prop}
								handleClose={this.handleClose}
								expanded={this.state.expanded === prop.sidebarName}
								handleChange={this.handleChange}
								{...this.props}
							/>
						);
					} else return this.getLink(prop, key);
				})}
			</List>
		);
		var brand = (
			<div className={classes.logo}>
				<a href="/" className={classes.logoLink}>
					<div className={classes.logoImage}>
						<img src={logo} alt="logo" className={classes.img} />
					</div>
					{logoText}
				</a>
			</div>
		);

		return (
			<div>
				<Hidden mdUp implementation="css">
					<Drawer
						variant="temporary"
						anchor="right"
						open={this.props.open}
						classes={{
							paper: classes.drawerPaper
						}}
						onClose={this.props.handleDrawerToggle}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						{brand}
						<div className={classes.sidebarWrapper}>
							<HeaderLinks />
							{links}
						</div>
						{image !== undefined ? (
							<div
								className={classes.background}
								style={{ backgroundImage: "url(" + image + ")" }}
							/>
						) : null}
					</Drawer>
				</Hidden>
				<Hidden smDown implementation="css">
					<Drawer
						anchor="left"
						variant="permanent"
						open
						classes={{
							paper: classes.drawerPaper
						}}
					>
						{brand}
						<div className={classes.sidebarWrapper}>{links}</div>
						{image !== undefined ? (
							<div
								className={classes.background}
								style={{ backgroundImage: "url(" + image + ")" }}
							/>
						) : null}
					</Drawer>
				</Hidden>
			</div>
		);
	}
}

SideMenu.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(SideMenu);
