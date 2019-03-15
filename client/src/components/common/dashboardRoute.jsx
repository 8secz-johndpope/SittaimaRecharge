// @material-ui/icons
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import LogIcon from "@material-ui/icons/Description";
import SearchIcon from "@material-ui/icons/Search";
import HouseSurveyIcon from "@material-ui/icons/Receipt";
import InstitutionSurveyIcon from "@material-ui/icons/AccountBalance";

const dashboardRoutes = [
	{
		path: "/home",
		exact: true,
		hasChild: false,
		sidebarName: "Home Page",
		navbarName: "Sittaima Recharge",
		icon: HomeIcon
	},

	{
		sidebarName: "User",
		icon: HomeIcon,
		hasChild: true,
		child: [
			{
				path: "/user/contributor",
				sidebarName:  "Contributor",
				navbarName: "Contributor",
				icon: HomeIcon
			},
			{
				path: "/user/list",
				sidebarName:  "User Lists",
				navbarName: "User Lists",
				icon: PersonIcon
			},
			{
				path: "/user/revenue",
				sidebarName:  "Revenue",
				navbarName: "Revenue",
				icon: PersonIcon
			}
		]
	},
	{
		sidebarName:  "Contributor",
		icon: SearchIcon,
		hasChild: true,
		child: [
			{
				path: "/advertisement/daily-reward",
				sidebarName:  "Daily Reward",
				navbarName: "Daily Reward",
				icon: PersonIcon
			},

			{
				path: "/advertisement/local-advertisement",
				sidebarName:  "Local Advertisement",
				navbarName: "Local Advertisement",
				icon: PersonIcon
			},
			{
				path: "/advertisement/daily-challenge",
				sidebarName:  "Daily Challenge",
				navbarName: "Daily Challenge",
				icon: PersonIcon
			}
		]
	},

	{
		path: "/jackpot",
		hasChild: false,
		sidebarName:  "Jackpot",
		navbarName: "Jackpot",
		icon: HouseSurveyIcon
	},
	{
		path: "/vendors",
		hasChild: false,
		sidebarName:  "Vendors",
		navbarName: "Vendors",
		icon: InstitutionSurveyIcon
	},
	{
		path: "/payment",
		hasChild: false,
		sidebarName:  "Payment",
		navbarName: "Payment",
		icon: HomeIcon
	},
	{
		path: "/Analytics",
		hasChild: false,
		sidebarName:  "Analytics",
		navbarName: "Analytics",
		icon: HomeIcon
	},
	{
		path: "/options",
		hasChild: false,
		sidebarName:  "Options",
		navbarName: "Options",
		icon: HomeIcon
	},
	{
		path: "/log-management",
		hasChild: false,
		sidebarName:  "Log Management",
		navbarName: "Log Management",
		icon: HomeIcon
	},
	{
		path: "/notification",
		hasChild: false,
		sidebarName:  "Notification",
		navbarName: "Notification",
		icon: HomeIcon
	},
	{
		path: "/report",
		hasChild: false,
		sidebarName:  "Report",
		navbarName: "Report",
		icon: HomeIcon
	},
	{
		path: "/admin",
		hasChild: false,
		sidebarName:  "Admin",
		navbarName: "Admin",
		icon: HomeIcon
	}

	// { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
