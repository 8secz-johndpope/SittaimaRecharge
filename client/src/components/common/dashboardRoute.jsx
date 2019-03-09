// @material-ui/icons
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import HouseSurveyIcon from "@material-ui/icons/Receipt";
import InstitutionSurveyIcon from "@material-ui/icons/AccountBalance";

const dashboardRoutes = [
	{
		path: "/home",
		exact: true,
		hasChild: false,
		sidebarName: { english: "Home Page", nepali: "गृह पृष्ठ" },
		navbarName: { english: "Sittaima Recharge", nepali: "सित्तैमा रिचार्ज" },
		icon: HomeIcon
	},

	{
		sidebarName: { english: "User", nepali: "प्रयोगकर्ता" },
		icon: HomeIcon,
		hasChild: true,
		child: [
			{
				path: "/user/contributor",
				sidebarName: { english: "Contributor", nepali: "गृह" },
				navbarName: {
					english: "Contributor",
					nepali: "सित्तैमा"
				},
				icon: HomeIcon
			},
			{
				path: "/user/list",
				sidebarName: { english: "List", nepali: "गृह" },
				navbarName: {
					english: "List",
					nepali: "सित्तैमा"
				},
				icon: PersonIcon
			},
			{
				path: "/user/revenue",
				sidebarName: { english: "Revenue", nepali: "गृह" },
				navbarName: {
					english: "Revenue",
					nepali: "सित्तैमा"
				},
				icon: PersonIcon
			}
		]
	},
	{
		sidebarName: { english: "Advertisement", nepali: "विज्ञापन" },
		icon: SearchIcon,
		hasChild: true,
		child: [
			{
				path: "/advertisement/daily-reward",
				sidebarName: { english: "Daily Reward", nepali: "दैनिक इनाम" },
				navbarName: { english: "Daily Reward", nepali: "दैनिक इनाम" },
				icon: PersonIcon
			},

			{
				path: "/advertisement/local-advertisement",
				sidebarName: {
					english: "Local Advertisement",
					nepali: "स्थानीय विज्ञापन"
				},
				navbarName: {
					english: "Local Advertisement",
					nepali: "स्थानीय विज्ञापन"
				},
				icon: PersonIcon
			},
			{
				path: "/advertisement/daily-challenge",
				sidebarName: { english: "Daily Challenge", nepali: "दैनिक चुनौती" },
				navbarName: {
					english: "Daily Challenge",
					nepali: "दैनिक चुनौती"
				},
				icon: PersonIcon
			}
		]
	},

	{
		path: "/jackpot",
		hasChild: false,
		sidebarName: { english: "Jackpot", nepali: "लटरी" },
		navbarName: {
			english: "Jackpot",
			nepali: "लटरी"
		},
		icon: HouseSurveyIcon
	},
	{
		path: "/vendors",
		hasChild: false,
		sidebarName: { english: "Vendors", nepali: "ग्राहक" },
		navbarName: {
			english: "Vendors",
			nepali: "ग्राहक"
		},
		icon: InstitutionSurveyIcon
	},
	{
		path: "/payment",
		hasChild: false,
		sidebarName: { english: "Payment", nepali: "भुक्तानी" },
		navbarName: {
			english: "Payment",
			nepali: "भुक्तानी"
		},
		icon: HomeIcon
	},
	{
		path: "/Analytics",
		hasChild: false,
		sidebarName: { english: "Analytics", nepali: "एनालिटिक्स" },
		navbarName: {
			english: "Analytics",
			nepali: "एनालिटिक्स"
		},
		icon: HomeIcon
	},
	{
		path: "/options",
		hasChild: false,
		sidebarName: { english: "Option", nepali: "सामग्री व्यवस्थापन प्रणाली" },
		navbarName: {
			english: "Option",
			nepali: "सामग्री व्यवस्थापन प्रणाली"
		},
		icon: HomeIcon
	},
	{
		path: "/log-management",
		hasChild: false,
		sidebarName: { english: "Log Management", nepali: "लग" },
		navbarName: {
			english: "Log Management",
			nepali: "लग"
		},
		icon: HomeIcon
	},
	{
		path: "/notification",
		hasChild: false,
		sidebarName: { english: "Notification", nepali: "सूचना" },
		navbarName: {
			english: "Notification",
			nepali: "सूचना"
		},
		icon: HomeIcon
	},
	{
		path: "/report",
		hasChild: false,
		sidebarName: { english: "Report", nepali: "रिपोर्ट" },
		navbarName: {
			english: "Report",
			nepali: "रिपोर्ट"
		},
		icon: HomeIcon
	},
	{
		path: "/admin",
		hasChild: false,
		sidebarName: { english: "Admin", nepali: "व्यवस्थापक" },
		navbarName: {
			english: "Admin",
			nepali: "व्यवस्थापक"
		},
		icon: HomeIcon
	}

	// { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
