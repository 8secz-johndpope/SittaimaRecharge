/* eslint-disable */
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import PropTypes from "prop-types";
import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from "../../image/logo.png";
import image from "../../image/sidebarImage.jpg";
import { gaupalika } from "../../variable/global";
import dashboardStyle from "../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";
import dashboardRoutes from "../common/dashboardRoute";
// core components
import Header from "../common/Header/Header.jsx";
// import Footer from "../common/Footer/Footer.jsx";
import Sidebar from "../common/Sidebar/SideMenu";
import Home from "./home/Home";
import Log from "./log/";
import EditProfile from "./profile/EditProfile";
import ViewProfile from "./profile/ViewProfile";
import UserProfile from "./user/";
import AddUser from "./user/AddUser.jsx";
import EditUser from "./user/EditUser";

const switchRoute = (
	<Switch>
		{dashboardRoutes.map((prop, key) => {
			// if (prop.redirect) return <Redirect from={"/"} to={"/home"} key={key} />;\
			if (prop.hasChild) {
				prop.child.map((each, i) => {
					return (
						<Route
							exact
							path={each.path}
							component={each.component}
							key={i + key}
						/>
					);
				});
			} else
				return (
					<Route exact path={prop.path} component={prop.component} key={key} />
				);
		})}
	</Switch>
);

const switchRoutes = (
	<Switch>
		<Route path="/users/add" component={AddUser} />
		<Route path="/users/edit/:id" component={EditUser} />
		<Route path="/users" component={UserProfile} />

		<Route path="/log" component={Log} />
		<Route path="/myprofile" component={ViewProfile} />
		<Route path="/edit-profile" component={EditProfile} />
		<Route path="/" component={Home} />
	</Switch>
);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileOpen: false
		};
		this.resizeFunction = this.resizeFunction.bind(this);
	}
	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	};

	resizeFunction() {
		if (window.innerWidth >= 960) {
			this.setState({ mobileOpen: false });
		}
	}
	componentDidMount() {
		if (navigator.platform.indexOf("Win") > -1) {
			const ps = new PerfectScrollbar(this.refs.mainPanel);
		}
		window.addEventListener("resize", this.resizeFunction);
	}
	componentDidUpdate(e) {
		if (e.history.location.pathname !== e.location.pathname) {
			this.refs.mainPanel.scrollTop = 0;
			if (this.state.mobileOpen) {
				this.setState({ mobileOpen: false });
			}
		}
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.resizeFunction);
	}
	render() {
		const { classes, ...rest } = this.props;
		return (
			<div className={classes.wrapper}>
				<Sidebar
					routes={dashboardRoutes}
					logoText={`${gaupalika} गाउँपालिका`}
					logo={logo}
					image={image}
					handleDrawerToggle={this.handleDrawerToggle}
					open={this.state.mobileOpen}
					color="blue"
					{...rest}
				/>
				<div className={classes.mainPanel} ref="mainPanel">
					<Header
						routes={dashboardRoutes}
						handleDrawerToggle={this.handleDrawerToggle}
						{...rest}
					/>
					{/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
					{
						<div className={classes.content}>
							<div className={classes.container}>{switchRoutes}</div>
						</div>
					}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);
