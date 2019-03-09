import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "..//CustomInput/CustomInput.jsx";
import Button from "..//CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authAction";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class HeaderLinks extends React.Component {
	state = {
		open: false,
		profileOpen: false
	};
	static getDerivedStateFromProps(nextProps) {
		if (!nextProps.isAuthenticated) {
			nextProps.history.push("/");
		}
	}
	handleToggle = () => {
		this.setState(state => ({ open: !state.open }));
	};
	handleProfileToogle = () => {
		this.setState(state => ({ profileOpen: !state.profileOpen }));
	};

	handleProfileClose = event => {
		if (this.anchorEl.contains(event.target)) {
			return;
		}

		this.setState({ profileOpen: false });
	};

	handleViewProfile = event => {
		this.handleProfileClose(event);
	};
	handleEditProfile = event => {
		this.handleProfileClose(event);
	};
	handleLogoutProfile = event => {
		this.props.logoutUser();
	};
	render() {
		const { classes } = this.props;
		const { open, profileOpen } = this.state;
		return (
			<div>
				<div className={classes.manager}>
					<Button
						buttonRef={node => {
							this.anchorEl = node;
						}}
						color={window.innerWidth > 959 ? "transparent" : "white"}
						justIcon={window.innerWidth > 959}
						simple={!(window.innerWidth > 959)}
						aria-owns={open ? "menu-list-grow" : null}
						aria-haspopup="true"
						onClick={this.handleProfileToogle}
						className={classes.buttonLink}
					>
						<Person className={classes.icons} />
						<Hidden mdUp implementation="css">
							<p className={classes.linkText}>Profile</p>
						</Hidden>
					</Button>
					<Poppers
						open={profileOpen}
						anchorEl={this.anchorEl}
						transition
						disablePortal
						className={
							classNames({ [classes.popperClose]: !profileOpen }) +
							" " +
							classes.pooperNav
						}
					>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								id="menu-list-grow"
								style={{
									transformOrigin:
										placement === "bottom" ? "center top" : "center bottom"
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={this.handleProfileClose}>
										<MenuList role="menu">
											<Link
												to="/myprofile"
												className={classNames(classes.link)}
											>
												<MenuItem
													onClick={this.handleViewProfile}
													className={classes.dropdownItem}
												>
													View Profile
												</MenuItem>
											</Link>

											<Link to="/edit-profile" className={classes.link}>
												<MenuItem
													onClick={this.handleEditProfile}
													className={classes.dropdownItem}
												>
													Edit Profile
												</MenuItem>
											</Link>

											<MenuItem
												onClick={this.handleLogoutProfile}
												className={classes.dropdownItem}
											>
												Logout
											</MenuItem>
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Poppers>
				</div>
			</div>
		);
	}
}
HeaderLinks.propTypes = {
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	loginUser: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated
});

export default withStyles(headerLinksStyle)(
	connect(
		mapStateToProps,
		{ logoutUser }
	)(withRouter(HeaderLinks))
);
