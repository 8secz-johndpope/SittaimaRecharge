// ##############################
// global variable name
// #############################
const geoCode = { lat: 27.704206, lng: 85.331871 };
const gaupalikaNepali = "लिम्चुङ्बुङ";
const gaupalikaEnglish = "Limchungbung";
const ruralMunicipalNepali = "गाउँपालिका";
const ruralMunicipalEnglish = "Rural municipal";
const gaupalika = { nepali: gaupalikaNepali, english: gaupalikaEnglish };

const gaupalikaWard = {
	english: gaupalikaEnglish + " " + ruralMunicipalEnglish,
	nepali: gaupalikaNepali + " " + ruralMunicipalNepali
};
const wadaBibaranName = "लिम्चुङ्बुङ वडा विवरण";
const familyDetails = [
	{
		nepali: gaupalikaNepali + " पारिवारिक विवरण",
		english: gaupalikaEnglish + ""
	},
	{ nepali: "वडा १ पारिवारिक विवरण", english: "" },
	{ nepali: "वडा २ पारिवारिक विवरण", english: "" },
	{ nepali: "वडा ३ पारिवारिक विवरण", english: "" },
	{ nepali: "वडा ४ पारिवारिक विवरण", english: "" },
	{ nepali: "वडा ५ पारिवारिक विवरण", english: "" }
];
const houseDetails = [
	{ nepali: gaupalikaNepali + " घर धुरी विवरण", english: "" },
	{ nepali: "वडा १ घर धुरी विवरण", english: "" },
	{ nepali: "वडा २ घर धुरी विवरण", english: "" },
	{ nepali: "वडा ३ घर धुरी विवरण", english: "" },
	{ nepali: "वडा ४ घर धुरी विवरण", english: "" },
	{ nepali: "वडा ५ घर धुरी विवरण", english: "" }
];
const ward = [
	{
		backgroundColor: "#f44336",
		key: 1,
		value: 1,
		ward: "वडा न. १",
		english: "Basabote",
		nepali: "बाँस्बोटे"
	},
	{
		key: 2,
		value: 2,
		backgroundColor: "#ff5722",
		ward: "वडा न. २ ",
		english: "Tamlichha",
		nepali: "ताम्लिछा"
	},
	{
		key: 3,
		value: 3,
		backgroundColor: "#673ab7",
		ward: "वडा न. ३",
		english: "Baraha",
		nepali: "बराहा"
	},
	{
		key: 4,
		value: 4,
		backgroundColor: "#e91e63",
		ward: "वडा न. ४",
		english: "Balamta",
		nepali: "बलम्ता"
	},
	{
		key: 5,
		value: 5,
		backgroundColor: "#9c27b0",
		ward: "वडा न. ५",
		english: "Jante",
		nepali: "जाते"
	}
];
const janasankhyaBibaranName = [
	{ nepali: gaupalikaNepali + " जनसंख्या विवरण", english: "" },
	{ nepali: "वडा १ जनसंख्या विवरण", english: "" },
	{ nepali: "वडा २ जनसंख्या विवरण", english: "" },
	{ nepali: "वडा ३ जनसंख्या विवरण", english: "" },
	{ nepali: "वडा ४ जनसंख्या विवरण", english: "" },
	{ nepali: "वडा ५ जनसंख्या विवरण", english: "" }
];

const statisticsAnalysisName = [
	{ nepali: gaupalikaNepali + " तथ्यांक विवरण", english: "" },
	{ nepali: "वडा १ तथ्यांक विवरण", english: "" },
	{ nepali: "वडा २ तथ्यांक विवरण", english: "" },
	{ nepali: "वडा ३ तथ्यांक विवरण", english: "" },
	{ nepali: "वडा ४ तथ्यांक विवरण", english: "" },
	{ nepali: "वडा ५ तथ्यांक विवरण", english: "" }
];
const sansthagatBibaranName = [
	{ nepali: gaupalikaNepali + " संस्थागत विवरण", english: "" },
	{ nepali: "वडा १ संस्थागत विवरण", english: "" },
	{ nepali: "वडा २ संस्थागत विवरण", english: "" },
	{ nepali: "वडा ३ संस्थागत विवरण", english: "" },
	{ nepali: "वडा ४ संस्थागत विवरण", english: "" },
	{ nepali: "वडा ५ संस्थागत विवरण", english: "" }
];

const janasankhyaBibaranListName = [
	{ name: "जम्मा जनसंख्या", value: "totalMember", icon: "users" },
	{ name: "महिला जनसंख्या", value: "femaleMember", icon: "female" },
	{ name: "पुरुष जनसंख्या", value: "maleMember", icon: "male" },
	{ name: "तेस्रो लिङ्गी", value: "thirdGenderNumber", icon: "user" },
	{ name: "जम्मा घर संख्या", value: "totalHouse", icon: "home" }
];
const sansthagatBibaranListName = [
	{ name: "जम्मा बिद्यालय", value: "2" },
	{ name: "जम्मा सन्संस्था", value: "3" },
	{ name: "जम्मा INGO", value: "1" },
	{ name: "जम्मा बैंक", value: "2" },
	{ name: "जम्मा सन्संस्था", value: "4" },
	{ name: "जम्मा बिद्यालय", value: "5" }
];
const deathTableHeader = [
	"क्र.श",
	"वडा न.",
	"घर न.",
	"मृत्युहुनेको नाम थर",
	"लिङ्ग",
	"उमेर ",
	"मृत्युको कारण "
];

const searchByNameTableHeader = [
	{ english: "S.N", nepali: "क्र.श" },
	{ english: "", nepali: "वडा न" },
	{ english: "", nepali: "घर न" },
	{ english: "", nepali: " नाम थर" },
	{ english: "", nepali: "लिङ्ग" },
	{ english: "", nepali: "उमेर" },
	{ english: "", nepali: "घरमुली संगको नाता" }
];
const deathReasonLists = [
	{ key: 1, name: "माहामारी", value: "epidimics" },
	{ key: 2, name: "सर्नेरोग ( टीबी, जण्डिस, आदि)", value: "tranferable" },
	{ key: 3, name: "काल गति", value: "aged" },
	{ key: 4, name: "HIVAIDS", value: "aids" },
	{ key: 5, name: "क्यान्सर", value: "cancer" },
	{ key: 6, name: "मधुमेह", value: "diabetes" },
	{ key: 7, name: "दम", value: "asthma" },
	{ key: 8, name: "रक्तचाप", value: "blood_pressure" },
	{ key: 9, name: "दुर्घटना", value: "accident" },
	{ key: 10, name: "आत्महत्या", value: "suicide" },
	{ key: 11, name: "अन्य", value: "death_other" }
];

const genderList = [
	{ key: 1, value: "महिला" },
	{ key: 2, value: "पुरुष" },
	{ key: 3, value: "तेस्रो लिङ्गी" }
];

const gender = [
	{ nepali: "महिला", english: "", value: "" },
	{ nepali: "पुरुष", english: "", value: "" },
	{ nepali: "तेस्रो लिङ्गी", english: "", value: "" }
];

const yes = {
	nepali: "छ",
	english: "yes"
};

const no = {
	nepali: "छैन",
	english: "no"
};

// yes[selectedLanguage]

const languages = ["नेपालि", "english"];
const selectedLanguage = "nepali";

const casteList = [
	{ key: 1, value: "ब्राहमण/क्षेत्रि" },
	{ key: 2, value: "जनजाती आदिवासी" },
	{ key: 3, value: "पहाडी अन्य जाति" },
	{ key: 4, value: "मधेसी जनजाति तथा आदिबासी" },
	{ key: 5, value: "मधेसी ब्राम्हण तथा राजपुत" },
	{ key: 6, value: "मधेसी दलित" },
	{ key: 7, value: "परियार (दमाई,दर्जी ,सूचिका)" },
	{ key: 8, value: "विश्वकर्मा (कामि,लोहार,ओड,दर्जी चुनरा,पार्की )" },
	{ key: 9, value: "सार्की (भिजार,चर्माकार मूल )" },
	{ key: 10, value: "अल्पशंख्यक जाति (हायु ,बोटे)" },
	{ key: 11, value: "ठकुरी" },
	{ key: 12, value: "माझी" },
	{ key: 13, value: "मुस्लिम" },
	{ key: 14, value: "अन्य" }
];

const religionList = [
	{ key: 1, value: "हिन्दु" },
	{ key: 2, value: "बुद्ध" },
	{ key: 3, value: "इस्लाम (मुस्लिम)" },
	{ key: 2, value: "इसाई (क्रिश्चियन)" },
	{ key: 2, value: "किंरात" },
	{ key: 2, value: "अन्य" }
];

const required = {
	english: "Required *",
	nepali: "अनिबार्य *"
};
const otherQuestion = {
	english: "",
	nepali: "अन्य भए उल्लेख गर्नुहोस |"
};

const privilege = [
	{
		nepali: "गाउँपलिका प्रमुख",
		english: "",
		value: 0
	},
	{
		nepali: "गाउँपलिका उपप्रमुख",
		english: "villageSubHead",
		value: 1
	},
	{
		nepali: "प्रससकिय प्रमुख",
		english: "adminHead",
		value: 2
	},
	{
		nepali: "सूचना प्रविधि अधिकृत",
		english: "information",
		value: 3
	},
	{
		nepali: "शाखा अधिकृत",
		english: "it",
		value: 4
	},
	{
		nepali: "वडा अध्यक्ष",
		english: "wardHead",
		value: 5
	},
	{
		nepali: "वडा सचिव",
		english: "wardSubHead",
		value: 6
	}
];

const whichWard = { nepali: "कुन वार्ड ?", english: "" };

const email = { nepali: "ईमेल", english: "email", value: "" };

const username = { nepali: "प्रयोगकर्तानाम", english: "username", value: "" };

const password = { nepali: "पस्स्वर्ड", english: "password", value: "" };

const firstname = { nepali: "नाम", english: "first name", value: "" };

const lastname = { nepali: "थर", english: "last name", value: "" };

const genderText = { nepali: "लिङ्ग", english: "gender" };
const searchOptionTab = [
	{ english: "", nepali: "घर न. द्वारा खोज्नूहोस " },
	{ english: "", nepali: "नामद्वारा खोज्नूहोस" },
	{ english: "", nepali: "फोन न.द्वारा खोज्नूहोस" },
	{ english: "", nepali: "बृस्तित खोजी" }
];
const gharNumber = {
	nepali: "घर न.",
	english: ""
};
const name = {
	english: "",
	nepali: "नाम"
};

const phoneNumber = {
	english: "",
	nepali: "फोन न."
};
module.exports = {
	name,
	phoneNumber,
	gaupalika,
	wadaBibaranName,
	ward,
	gaupalikaWard,
	janasankhyaBibaranName,
	statisticsAnalysisName,
	sansthagatBibaranName,
	janasankhyaBibaranListName,
	sansthagatBibaranListName,
	familyDetails,
	deathTableHeader,
	deathReasonLists,
	genderList,
	gender,
	yes,
	no,
	selectedLanguage,
	casteList,
	religionList,
	required,
	otherQuestion,
	geoCode,
	houseDetails,
	privilege,
	email,
	username,
	genderText,
	firstname,
	lastname,
	password,
	searchOptionTab,
	gharNumber,
	whichWard,
	searchByNameTableHeader
};
