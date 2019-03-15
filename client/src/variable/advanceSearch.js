const placeholderName =
	"लिम्चुङ्बुङको विस्त्रित जानकारी। खोज्नुहोस् जस्ताइ: लिङग=पुरुस";
// const languages = ["नेपालि", "English"];
// const selectedLanguage = "nepali";

const casteList = [
	{ nepali: "ब्राहमण/क्षेत्रि", english: "", value: "brahmin_chetri" },
	{ nepali: "जनजाती आदिवासी", english: "", value: "jajati_aadiwas" },
	{ nepali: "पहाडी अन्य जाति", english: "", value: "pahadi_other" },
	{
		nepali: "मधेसी जनजाति तथा आदिबासी ब्राम्हण तथा राजपुत दलित",
		english: "",
		value: "madhesi_jajati"
	},
	{ nepali: "मधेसी ब्राम्हण तथा राजपुत", english: "", value: "madhesi_bramin" },
	{ nepali: "मधेसी दलित", english: "", value: "madhesi_dalit" },
	{ nepali: "परियार (दमाई,दर्जी,सूचिका)", english: "", value: "pariyar" },
	{
		nepali: "विश्वकर्मा (कामि,लोहार,ओड,दर्जी चुनरा,पार्की)",
		english: "",
		value: "biswokarma"
	},
	{ nepali: "सार्की (भिजार,चर्माकार मूल)", english: "", value: "sarki" },
	{ nepali: "अल्पशंख्यक जाति (हायु,बोटे)", english: "", value: "hayu_bote" },
	{ nepali: "ठकुरी", english: "", value: "thakuri" },
	{ nepali: "माझी", english: "", value: "majhi" },
	{ nepali: "मुस्लिम", english: "", value: "muslim" },
	{ nepali: "अन्य", english: "", value: "other_caste" }
];

const religionList = [
	{ nepali: "हिन्दु", english: "", value: "hindu" },
	{ nepali: "बुद्ध", english: "", value: "buddhist" },
	{ nepali: "इस्लाम (मुस्लिम)", english: "", value: "muslim" },
	{ nepali: "इसाई (क्रिश्चियन)", english: "", value: "christian" },
	{ nepali: "किंरात", english: "", value: "kirat" },
	{ nepali: "अन्य", english: "", value: "other_religion" }
];

const educationList = [
	{
		nepali: "बाल विकास कक्षा",
		english: "",
		value: "kinder_garten"
	},
	{
		nepali: "पूर्व प्राथमिक",
		english: "",
		value: "pre_primary"
	},
	{
		nepali: "आधारभूत तह",
		english: "",
		value: "primary"
	},
	{
		nepali: "माध्यमिक तह",
		english: "",
		value: "secondary"
	},
	{
		nepali: "प्राविधिक एस.एल.सी. (Overseer)",
		english: "",
		value: "t_slc"
	},
	{
		nepali: "स्नातक तह",
		english: "",
		value: "bachelors"
	},
	{
		nepali: "स्नाकोत्तर तह",
		english: "",
		value: "masters"
	},
	{
		nepali: "एमफिल",
		english: "",
		value: "m_phil"
	},
	{
		nepali: "विधा बारिधि",
		english: "",
		value: "phd"
	},
	{
		nepali: "साधारण लेखपढ((साक्षर)",
		english: "",
		value: "literate"
	},
	{
		nepali: "निरक्षर (लेखपढ गर्न नसक्ने)",
		english: "",
		value: "illiterate"
	},
	{
		nepali: "बिद्यालय शिक्षा हाशिल नगरेको",
		english: "",
		value: "no_school"
	}
];

const preprimaryList = [
	{
		nepali: "१",
		english: "1",
		value: "class_1"
	},
	{
		nepali: "२",
		english: "2",
		value: "class_2"
	},
	{
		nepali: "३",
		english: "3",
		value: "class_3"
	},
	{
		nepali: "४",
		english: "4",
		value: "class_4"
	},
	{
		nepali: "५",
		english: "5",
		value: "class_5"
	}
];

const primaryList = [
	{
		nepali: "६",
		english: "6",
		value: "class_6"
	},
	{
		nepali: "७",
		english: "7",
		value: "class_7"
	},
	{
		nepali: "८",
		english: "8",
		value: "class_8"
	}
];

const secondaryList = [
	{
		nepali: "९",
		english: "9",
		value: "class_9"
	},
	{
		nepali: "१०",
		english: "10",
		value: "class_10"
	},
	{
		nepali: "११",
		english: "11",
		value: "class_11"
	},
	{
		nepali: "१२",
		english: "12",
		value: "class_12"
	}
];

const occupationList = [
	{
		nepali: "कृषि तथा पशुपालन",
		english: "",
		value: "agriculture"
	},
	{
		nepali: "नोकरी जागिर",
		english: "",
		value: "job"
	},
	{
		nepali: "उद्योग व्यापार",
		english: "",
		value: "industry"
	},
	{
		nepali: "व्यवसायिक कार्य",
		english: "",
		value: "business"
	},
	{
		nepali: "ज्याला मजदुरी",
		english: "",
		value: "labor"
	},
	{
		nepali: "विद्यार्थी (अध्यनरत)",
		english: "",
		value: "student"
	},
	{
		nepali: "गृहणी",
		english: "",
		value: "house_wife"
	},
	{
		nepali: "बैदेशिक रोजगार",
		english: "",
		value: "foreign_job"
	},
	{
		nepali: "बेरोजगार",
		english: "",
		value: "unemployed"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];

const jobList = [
	{
		nepali: "प्राइभेट",
		english: "",
		value: "private"
	},
	{
		nepali: "सरकारी (निजामती कर्मचारी )",
		english: "",
		value: "government"
	},
	{
		nepali: "सरकारी (निजामती बाहेक )",
		english: "",
		value: "government1"
	},
	{
		nepali: "निर्माण सम्बन्धि",
		english: "",
		value: "construction"
	},
	{
		nepali: "सुरक्षा निकाय",
		english: "",
		value: "security"
	},
	{
		nepali: "N.G.O.  I.N.G.O संघ संस्था",
		english: "",
		value: "ngo_ingo"
	},
	{
		nepali: "बैंक तथा वित्तिय संस्था",
		english: "",
		value: "bank_finance"
	},
	{
		nepali: "चिकित्सक तथा स्वास्थकर्मी",
		english: "",
		value: "health"
	},
	{
		nepali: "शिक्षक",
		english: "",
		value: "teacher"
	},
	{
		nepali: "पत्रकार",
		english: "",
		value: "journalist"
	},
	{
		nepali: "वकिल",
		english: "",
		value: "advocate"
	},
	{
		nepali: "परामर्श",
		english: "",
		value: "consulting"
	},
	{
		nepali: "ठेक्का  पट्टा",
		english: "",
		value: "contract"
	},
	{
		nepali: "पुजारी",
		english: "",
		value: "priest"
	},
	{
		nepali: "किराना तथा थोक",
		english: "",
		value: "grocery"
	},
	{
		nepali: "होटेल / लज",
		english: "",
		value: "hotel"
	},
	{
		nepali: "घरेलु उद्योग",
		english: "",
		value: "home_industry"
	},
	{
		nepali: "मासु पसल",
		english: "",
		value: "meat_shop"
	},
	{
		nepali: "तरकारी / फलफुल",
		english: "",
		value: "vege_fruit"
	},
	{
		nepali: "सिलाई बुनाई",
		english: "",
		value: "sewing"
	},
	{
		nepali: "फलाम जन्य कार्य गर्ने",
		english: "",
		value: "iron"
	},
	{
		nepali: "हस्तकला सम्बन्धि",
		english: "",
		value: "handicraft"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];

const healthconditionList = [
	{
		nepali: "स्वस्थ",
		english: "",
		value: "helathy"
	},
	{
		nepali: "सामान्य रोग लागेको",
		english: "",
		value: "normal_patient"
	},
	{
		nepali: "दिर्घ रोग लागेको",
		english: "",
		value: "unhelathy"
	},
	{
		nepali: "मानसिक समस्या भएको",
		english: "",
		value: "mental"
	},
	{
		nepali: "क्यान्सर रोग",
		english: "",
		value: "cancer"
	}
];

const unhealthy = [
	{
		nepali: "उच्च रक्तचाप",
		english: "",
		value: "high_blood_pre"
	},
	{
		nepali: "मुटु रोग",
		english: "",
		value: "heart"
	},
	{
		nepali: "डाइबेटिज/मधुमेह/सुगर",
		english: "",
		value: "diabetes"
	},
	{
		nepali: "आस्थमा/दम",
		english: "",
		value: "aasthama"
	},
	{
		nepali: "मृगोला सम्बन्धी",
		english: "",
		value: "liver"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];

const teacherList = [
	{
		nepali: "स्थानीय श्रोत",
		english: "",
		value: "local"
	},
	{
		nepali: "सामुदायिक",
		english: "",
		value: "government"
	},
	{
		nepali: "राहत",
		english: "",
		value: "rahat"
	},
	{
		nepali: "नेपाल प्रहरी",
		english: "",
		value: "nepal_police"
	},
	{
		nepali: "सशस्त्र प्रहरी",
		english: "",
		value: "a_p_f"
	},
	{
		nepali: "नेपाली सेना",
		english: "",
		value: "nepal_army"
	}
];
const mentaltype = [
	{
		nepali: "जन्मजात",
		english: "",
		value: "by_birth"
	},
	{
		nepali: "रोग",
		english: "",
		value: "disease"
	},
	{
		nepali: "दुर्घटना",
		english: "",
		value: "accident"
	}
];

const mentalcondition = [
	{
		nepali: "दृष्टि सम्बन्धि",
		english: "",
		value: "vision"
	},
	{
		nepali: "सुनाइ सम्बन्धि",
		english: "",
		value: "listening"
	},
	{
		nepali: "शारिरिक अपाङ्गता",
		english: "",
		value: "disability"
	},
	{
		nepali: "बोलाइ सम्बन्धि",
		english: "",
		value: "speak"
	},
	{
		nepali: "मानसिक रुपमा अपाङ्गता",
		english: "",
		value: "mental"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];

const mentalCardYesNo = [
	{
		nepali: "छ",
		english: "yes",
		value: "card_taken"
	},
	{
		nepali: "छैन",
		english: "no",
		value: "card_not_taken"
	}
];

const mentalCardtype = [
	{
		nepali: "रातो (पूर्ण आसक्त) क वर्ग",
		english: "",
		value: "red_card"
	},
	{
		nepali: "निलो (अरुको सहयोगबाट) ख वर्ग",
		english: "",
		value: "blue_card"
	},
	{
		nepali: "पहेलो (कृतिम अंगको ) ग वर्ग",
		english: "",
		value: "yellow_card"
	},
	{
		nepali: "सेतो (सामान्य) घ वर्ग्ग",
		english: "",
		value: "white_card"
	}
];

const mothertongue = [
	{
		nepali: "नेपाली",
		english: "",
		value: "nepali"
	},
	{
		nepali: "राई",
		english: "",
		value: "rai"
	},
	{
		nepali: "किरात",
		english: "",
		value: "kirat"
	},
	{
		nepali: "मगर",
		english: "",
		value: "magar"
	},
	{
		nepali: "तामाङ",
		english: "",
		value: "tamang"
	},
	{
		nepali: "नेपाल भाषा (नेवारी)",
		english: "",
		value: "newari"
	},
	{
		nepali: "गुरुङ",
		english: "",
		value: "gurung"
	},
	{
		nepali: "लिम्बु",
		english: "",
		value: "limbu"
	},
	{
		nepali: "शेर्पा",
		english: "",
		value: "sherpa"
	},
	{
		nepali: "मैथिली",
		english: "",
		value: "maithali"
	},
	{
		nepali: "थारु",
		english: "",
		value: "tharu"
	},
	{
		nepali: "खस",
		english: "",
		value: "khas"
	},
	{
		nepali: "भोजपुरी",
		english: "",
		value: "bhojpuri"
	},
	{
		nepali: "माझी",
		english: "",
		value: "maajhi"
	},
	{
		nepali: "भोटे",
		english: "",
		value: "bhote"
	},
	{
		nepali: "बज्जिका",
		english: "",
		value: "bajjika"
	},
	{
		nepali: "सुनवार",
		english: "",
		value: "sunwar"
	},
	{
		nepali: "बान्तवा",
		english: "",
		value: "bantawa"
	},
	{
		nepali: "खालिंङ",
		english: "",
		value: "khaling"
	},
	{
		nepali: "थुलुंग",
		english: "",
		value: "thulung"
	},
	{
		nepali: "कुलुंग",
		english: "",
		value: "kulung"
	},
	{
		nepali: "याक्खा",
		english: "",
		value: "yakha"
	},
	{
		nepali: "चामलिंङ",
		english: "",
		value: "chamling"
	},
	{
		nepali: "वादीङ",
		english: "",
		value: "wading"
	},
	{
		nepali: "तिलुंङ",
		english: "",
		value: "tilung"
	},
	{
		nepali: "वाम्वुले",
		english: "",
		value: "bambule"
	}
];

const bloodgroup = [
	{
		nepali: "O+",
		english: "",
		value: "o_positive"
	},
	{
		nepali: "O-",
		english: "",
		value: "o_negative"
	},
	{
		nepali: "A+",
		english: "",
		value: "a_positive"
	},
	{
		nepali: "A-",
		english: "",
		value: "a_neagtive"
	},
	{
		nepali: "B+",
		english: "",
		value: "b_positive"
	},
	{
		nepali: "B-",
		english: "",
		value: "b_negative"
	},
	{
		nepali: "AB+",
		english: "",
		value: "ab_positive"
	},
	{
		nepali: "AB-",
		english: "",
		value: "ab_neagtive"
	},
	{
		nepali: "थाहा छैन",
		english: "",
		value: "no_blood_group"
	}
];

const marriage = [
	{
		nepali: "अविवाहित",
		english: "",
		value: "unmarried"
	},
	{
		nepali: "विवाहित",
		english: "",
		value: "married"
	},
	{
		nepali: "बहु बिबाह",
		english: "",
		value: "multi_marriage"
	},
	{
		nepali: "पुन बिबाह",
		english: "",
		value: "re_married"
	},
	{
		nepali: "बिधुर",
		english: "",
		value: "widow"
	},
	{
		nepali: "बिधुवा",
		english: "",
		value: "wido1"
	},
	{
		nepali: "सम्बन्ध बिच्छेद (विवाहित तर अलग बसेको)",
		english: "",
		value: "divorce"
	},
	{
		nepali: "उमेर कम",
		english: "",
		value: "under_age"
	}
];
const livingTypeList = [
	{
		nepali: "अस्थाई",
		english: "",
		value: "temporary"
	},
	{
		nepali: "स्थाई",
		english: "",
		value: "permanent"
	},
	{
		nepali: "सुकुम्बासी",
		english: "",
		value: "squatter"
	}
];
const permanent = [
	{
		nepali: "अर्को वडा",
		english: "",
		value: "next_ward"
	},
	{
		nepali: "यही जिल्ला",
		english: "",
		value: "same_district"
	},
	{
		nepali: "अर्को जिल्ला",
		english: "",
		value: "next_district"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];
const drinkingwaterLists = [
	{
		nepali: "पाइप धारा घरमा",
		english: "",
		value: "pipe_in_home"
	},
	{
		nepali: "पाइप धारा सार्वजनिक",
		english: "",
		value: "public_pipe"
	},
	{
		nepali: "डिप बोरिंग",
		english: "",
		value: "boring"
	},
	{
		nepali: "ट्युबवेल/हेन्डपम्पा",
		english: "",
		value: "hand_tube_pump"
	},
	{
		nepali: "ढाकिएको इनार/कुवाा",
		english: "",
		value: "well"
	},
	{
		nepali: "नढाकिएको इनार/कुव",
		english: "",
		value: "mulko_pani"
	},
	{
		nepali: "नदि खोला",
		english: "",
		value: "river_water"
	},
	{
		nepali: "आकासे पानी",
		english: "",
		value: "rain_water"
	},
	{
		nepali: "जारको पानी",
		english: "",
		value: "jar"
	},
	{
		nepali: "मुलको पानि",
		english: "",
		value: "natural_water"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];
const drinkingwaterplaceLists = [
	{
		nepali: "घर आँगनमा",
		english: "",
		value: "home_courtyard"
	},
	{
		nepali: "१० मिनेट सम्मको पैदला",
		english: "",
		value: "10_min_walk"
	},
	{
		nepali: "आधा घण्टा सम्मको दुरी",
		english: "",
		value: "half_hour_walk"
	},
	{
		nepali: "१ घण्टा वा सो भन्दा माथि",
		english: "",
		value: "1_hour_walk"
	}
];
const cookingresourceLists = [
	{
		nepali: "दाउरा/काठ(साधरण चुलो )",
		english: "",
		value: "wood"
	},
	{
		nepali: "दाउरा/काठ(सुधारिएको चुलो )",
		english: "",
		value: "sudharieko_chu"
	},
	{
		nepali: "मट्टीतेल/स्टोभ",
		english: "",
		value: "kerosene"
	},
	{
		nepali: "एल.पी.जी.ग्यास",
		english: "",
		value: "lpg"
	},
	{
		nepali: "वायो ग्यास",
		english: "",
		value: "bio"
	},
	{
		nepali: "विधुत",
		english: "",
		value: "electric"
	},
	{
		nepali: "सौर्य उर्जा",
		english: "",
		value: "solar"
	},
	{
		nepali: "गुइठा",
		english: "",
		value: "dung"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];
const lightresourceLists = [
	{
		nepali: "बिधुतलाईन",
		english: "",
		value: "electric"
	},
	{
		nepali: "मट्टीतेल/टुकी",
		english: "",
		value: "kerosene"
	},
	{
		nepali: "सोलार",
		english: "",
		value: "solar"
	},
	{
		nepali: "वायो ग्यास",
		english: "",
		value: "bio_gas"
	},
	{
		nepali: "टर्च लाईट /ब्याट्री",
		english: "",
		value: "torch_battery"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];
const toiletresourceLists = [
	{
		nepali: "शौचालय नभएको",
		english: "",
		value: "no_toilet"
	},
	{
		nepali: "फ्लस भएको(सार्वजनिक ढल)",
		english: "",
		value: "public_tank"
	},
	{
		nepali: "फ्लस भएको(सेफ्टी ट्याङ्क)",
		english: "",
		value: "private_tank"
	},
	{
		nepali: "साधारण खाडलमा ढाकेको",
		english: "",
		value: "ordinary_tank"
	},
	{
		nepali: "सामुदायिक चर्पी",
		english: "",
		value: "shared_tolilet"
	},
	{
		nepali: "वाटर सिल",
		english: "",
		value: "water_seal"
	},
	{
		nepali: "शौचालय भएको तर प्रयोग नगरेको",
		english: "",
		value: "toilet_not_use"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];
const roadLists = [
	{
		nepali: "पक्कि/कालोपत्रो सडक",
		english: "",
		value: "black_pitched"
	},
	{
		nepali: "ग्रावेल सडक",
		english: "",
		value: "gravel"
	},
	{
		nepali: "धुले सडक (कच्ची)",
		english: "",
		value: "dusty"
	},
	{
		nepali: "गोरेटो बाटो जोडिएको",
		english: "",
		value: "goreto"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];
const wastemanagementLists = [
	{
		nepali: "आफै व्यवस्थापन गर्ने",
		english: "",
		value: "self_managed"
	},
	{
		nepali: "आफै खाडलमा हाल्ने",
		english: "",
		value: "self_pit"
	},
	{
		nepali: "संकलित फोहोर जलाउनेे",
		english: "",
		value: "burn"
	},
	{
		nepali: "बाहिर खाडलमा हाल्ने",
		english: "",
		value: "others_pit"
	},
	{
		nepali: "मल खादलमाे",
		english: "",
		value: "outside_dispos"
	},
	{
		nepali: "गोबर ग्यास प्लान्ट प्रायोग गर्नेे",
		english: "",
		value: "gobar_gas"
	},
	{
		nepali: "निजि संस्थाले घरबाटै उठाउनेनेे",
		english: "",
		value: "private_org"
	},
	{
		nepali: "अव्यवस्थित तबरले बाहिर जताभावी फ्याल्नेर्नेे",
		english: "",
		value: "unmanaged"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];
const salttypeLists = [
	{
		nepali: "आयोडिन्युक्त नून",
		english: "Iodine Salt",
		value: "iodine_salt"
	},
	{
		nepali: "ढिको नून",
		english: "",
		value: "dhiko_salt"
	},
	{
		nepali: "खुल्ला नून",
		english: "",
		value: "open_salt"
	}
];

const bankAccount = [
	{
		nepali: "छ",
		english: "Yes",
		value: "account_yes"
	},
	{
		nepali: "छैन",
		english: "No",
		value: "account_no"
	}
];

const illTreament = [
	{
		nepali: "धामी झाक्री",
		english: "",
		value: "dhaami_jhakri"
	},
	{
		nepali: "औषधि पसल",
		english: "",
		value: "medical"
	},
	{
		nepali: "क्लिनिक",
		english: "",
		value: "clinic"
	},
	{
		nepali: "स्वस्थ चौकी",
		english: "",
		value: "health_post"
	},
	{
		nepali: "प्राथमिक स्वस्थ केन्द्र",
		english: "",
		value: "primary_health"
	},
	{
		nepali: "जिल्लाका निजि अस्पताल",
		english: "",
		value: "private_hospit"
	},
	{
		nepali: "जिल्ला बाहिर सरकारी अस्पताल",
		english: "",
		value: "public_hospita"
	},
	{
		nepali: "स्थानीय स्वास्थ्यकर्मी",
		english: "",
		value: "healthworker"
	}
];
const bhattaLists = [
	{
		nepali: "ज्येष्ठ नागरिक",
		english: "",
		value: "old_citizen"
	},
	{
		nepali: "एकल महिला",
		english: "",
		value: "single_women"
	},
	{
		nepali: "पूर्ण अपाङ्ग",
		english: "",
		value: "full_disable"
	},
	{
		nepali: "आंसिक अपाङ्ग",
		english: "",
		value: "half_disable"
	},
	{
		nepali: "बाल सुरक्षा अनुदान",
		english: "",
		value: "child_security"
	},
	{
		nepali: "दलित वर्ग",
		english: "",
		value: "dalit"
	}
];
const landUsedliving = [
	{
		nepali: "निजि/नम्बरी",
		english: "",
		value: "self"
	},
	{
		nepali: "गुठि",
		english: "",
		value: "guthi"
	},
	{
		nepali: "सार्वजनिक",
		english: "",
		value: "public_land"
	},
	{
		nepali: "ऐलानी",
		english: "",
		value: "yelani"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];

const housetype = [
	{
		nepali: "आरसीसी",
		english: "",
		value: "rcc"
	},
	{
		nepali: "ढुंगाको घर (सिमेन्टको जोडाइ)",
		english: "",
		value: "stone_cement"
	},
	{
		nepali: "पक्कि इट्टाको घर (सिमेन्टको जोडाइ)",
		english: "",
		value: "brick_cement"
	},
	{
		nepali: "ढुंगाको घर (माटोको जोड़ाई)",
		english: "",
		value: "stone_mud"
	},
	{
		nepali: "काचो इट्टाको घर (माटोको जोड़ाई)",
		english: "",
		value: "brick_mud"
	},
	{
		nepali: "बास/टाटीको घर",
		english: "",
		value: "bamboo"
	},
	{
		nepali: "जस्तापाताले बेरेको",
		english: "",
		value: "jasta_pata"
	},
	{
		nepali: "काठको खम्बा (काठको घर )",
		english: "",
		value: "wooden"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];
const rooftype = [
	{
		nepali: "जस्ता पाता",
		english: "",
		value: "steel"
	},
	{
		nepali: "फुस वा खरको",
		english: "",
		value: "roof_grass"
	},
	{
		nepali: "टायल/खपडा/ढुंगा",
		english: "",
		value: "tiles"
	},
	{
		nepali: "सिमेन्ट/ ढलान",
		english: "",
		value: "rcc"
	},
	{
		nepali: "काठ/ फल्याक",
		english: "",
		value: "wooden"
	},
	{
		nepali: "माटो",
		english: "",
		value: "mud"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];
const hasLanddocument = [
	{
		nepali: "छ",
		english: "yes",
		value: "land_doc_yes"
	},
	{
		nepali: "छैन",
		english: "no",
		value: "land_doc_no"
	}
];
const doHouseCriteriafullfill = [
	{
		nepali: "छ",
		english: "",
		value: "criteria_yes"
	},
	{
		nepali: "छैन",
		english: "",
		value: "criteria_no"
	},
	{
		nepali: "थाहा छैन",
		english: "",
		value: "donot_know_cri"
	}
];
const hasHouseMappass = [
	{
		nepali: "छ",
		english: "",
		value: "map_yes"
	},
	{
		nepali: "छैन",
		english: "",
		value: "map_know"
	}
];
const skillDetail = [
	{
		nepali: "निर्माण सम्बन्धि (मिस्त्री/कार्पेन्टर )",
		english: "",
		value: "construction"
	},
	{
		nepali: "कृषि सम्बन्धि (जे.टि, जे.टि.ए र खद प्रसोधन )",
		english: "",
		value: "agriculture"
	},
	{
		nepali: "बास तथा छाला बाट निर्मित हस्त सामग्री",
		english: "",
		value: "hand_made"
	},
	{
		nepali:
			"सूचना प्रविधि ,इलेक्ट्रोनिकस,इलेक्त्रोनिकल(कम्पुटर /मोबाइल/रेडियो/घडी मर्मत)",
		english: "",
		value: "electric"
	},
	{
		nepali: "सिलाई ,बुनाइ ,बुटिक ,पर्लोर, सृंगार",
		english: "",
		value: "fashion"
	},
	{
		nepali: "जनस्वास्थ सम्बन्धि",
		english: "",
		value: "health"
	},
	{
		nepali: "पशु स्वस्थ सम्बन्धि",
		english: "",
		value: "animal_health"
	},
	{
		nepali: "पर्यटन , टुर गाइड, ट्राभेल र सत्कार सम्बन्धि",
		english: "",
		value: "tourism"
	},
	{
		nepali: "कला सम्बन्धि",
		english: "",
		value: "art"
	},
	{
		nepali: "अन्य",
		english: "",
		value: "other"
	}
];
const birthcertificate = [
	{
		nepali: "छ",
		english: "yes",
		value: "birth_cert_yes"
	},
	{ nepali: "छैन", english: "no", value: "birth_cert_no" }
];
const childvaccine = [
	{
		nepali: "छ",
		english: "yes",
		value: "vaccaine_yes"
	},
	{
		nepali: "छैन",
		english: "no",
		value: "vaccaine_no"
	}
];
const deliveryFromdoctor = [
	{
		nepali: "छ",
		english: "yes",
		value: "delivery_yes"
	},
	{
		nepali: "छैन",
		english: "no",
		value: "delivery_no"
	}
];
const pregnantnutrition = [
	{
		nepali: "छ",
		english: "yes",
		value: "nutrition_yes"
	},
	{
		nepali: "छैन",
		english: "no",
		value: "nutrition_no"
	}
];
const pregnanctcheck = [
	{
		nepali: "छ",
		english: "yes",
		value: "check_yes"
	},
	{
		nepali: "छैन",
		english: "no",
		value: "check_no"
	}
];
const childnutrition = [
	{
		nepali: "छ",
		english: "yes",
		value: "mal_nutri_yes"
	},
	{
		nepali: "छैन",
		english: "no",
		value: "mal_nutri_no"
	}
];
const childlabour = [
	{
		nepali: "छ",
		english: "yes",
		value: "yes"
	},
	{
		nepali: "छैन",
		english: "no",
		value: "no"
	}
];
const earlymarriage = [
	{
		nepali: "छ",
		english: "yes",
		value: "e_marry_yes"
	},
	{
		nepali: "छैन",
		english: "no",
		value: "e_marry_no"
	}
];
const pregnanttetanus = [
	{
		nepali: "छ",
		english: "yes",
		value: "tetanus_yes"
	},
	{
		nepali: "छैन",
		english: "no",
		value: "tetanus_no"
	}
];
const preprimary = [
	{
		nepali: "१",
		english: "1",
		value: "class_1"
	},
	{
		nepali: "२",
		english: "2",
		value: "class_2"
	},
	{
		nepali: "३",
		english: "3",
		value: "class_3"
	},
	{
		nepali: "४",
		english: "4",
		value: "class_4"
	},
	{
		nepali: "५",
		english: "5",
		value: "class_5"
	}
];

const answererRelation = [
	{
		nepali: "घरमुली आफै",
		english: "",
		value: "self_house_own"
	},
	{
		nepali: "श्रीमान",
		english: "",
		value: "husband"
	},
	{
		nepali: "श्रीमती",
		english: "",
		value: "wife"
	},
	{
		nepali: "आमा",
		english: "",
		value: "mother"
	},
	{
		nepali: "बुवा",
		english: "",
		value: "father"
	},
	{
		nepali: "छोरा",
		english: "",
		value: "son"
	},
	{
		nepali: "छोरी",
		english: "",
		value: "daughter"
	},
	{
		nepali: "बुहारी",
		english: "",
		value: "buhari"
	},
	{
		nepali: "ज्वाई",
		english: "",
		value: "jwai"
	},
	{
		nepali: "सासु",
		english: "",
		value: "sashu"
	},
	{
		nepali: "ससुरा",
		english: "",
		value: "sasura"
	},
	{
		nepali: "काका",
		english: "",
		value: "kaka"
	},
	{
		nepali: "काकी",
		english: "",
		value: "kaki"
	},
	{
		nepali: "फुपू",
		english: "",
		value: "fupu"
	},
	{
		nepali: "फुपाजु",
		english: "",
		value: "fupaju"
	},
	{
		nepali: "ममा",
		english: "",
		value: "mama"
	},
	{
		nepali: "माइजु",
		english: "",
		value: "maiju"
	},
	{
		nepali: "नाती",
		english: "",
		value: "nati"
	},
	{
		nepali: "नातिनी",
		english: "",
		value: "natini"
	},
	{
		nepali: "दाजु",
		english: "",
		value: "daju"
	},
	{
		nepali: "भाई",
		english: "",
		value: "bhai"
	},
	{
		nepali: "दिदि",
		english: "",
		value: "didi"
	},
	{
		nepali: "बहिनि",
		english: "",
		value: "bahini"
	},
	{
		nepali: "भाउजु",
		english: "",
		value: "bhauju"
	},
	{
		nepali: "भाई बुहारी",
		english: "",
		value: "bhai_buhari"
	},
	{
		nepali: "जेठान",
		english: "",
		value: "jethan"
	},
	{
		nepali: "ठुलो बुवा",
		english: "",
		value: "thulo_bbuwa"
	},
	{
		nepali: "ठुलो आमा",
		english: "",
		value: "thulo_aama"
	},
	{
		nepali: "हजुर बुवा",
		english: "",
		value: "grand_father"
	},
	{
		nepali: "हजुर आमा",
		english: "",
		value: "grand_mother"
	}
];

const autoSuggetionString = [
	{ nepali: "लिङ्ग", english: "Gender", value: "gender" },
	{ nepali: "उमेर", english: "Age", value: "age" },
	{
		nepali: "घरमुली संगको नाता",
		english: "AnswererRelation",
		value: "answererRelation"
	},
	{ nepali: "जात/जाति", english: "Ethnics", value: "ethnics" },
	{ nepali: "कुन जनजाती", english: "Which Ethnics", value: "caste" },
	{ nepali: "धर्म", english: "Religion", value: "religion" },
	{ nepali: "शिक्षा", english: "Education", value: "educationLevel" },
	{
		nepali: "पूर्व प्राथमिक",
		english: "Preprimary",
		value: "prePrimaryDetails"
	},
	{ nepali: "आधारभूत तह", english: "Primary", value: "primaryDetails" },
	{ nepali: "माध्यमिक तह", english: "Secondary", value: "secondaryDetails" },
	{ nepali: "पेशा", english: "Occupation", value: "levelOneJob" },
	{ nepali: "नोकरी  जागिर", english: "Job", value: "levelTwoJob" },
	{
		nepali: "शिक्षक/सुरक्षा निकाय",
		english: "Teacher/Security",
		value: "levelThreeJob"
	},
	{
		nepali: "स्वास्थ्य",
		english: "Health Condition",
		value: "healthCondition"
	},
	{
		nepali: "दिर्घ रोग",
		english: "Unhealthy Disease",
		value: "unhealthyDisease"
	},
	{ nepali: "अपांगताको किसिम", english: "Disable", value: "type" },
	{
		nepali: "अपांगताको स्थिति",
		english: "Disable Condition",
		value: "condition"
	},
	{ nepali: "अपांगताको कार्ड", english: "Disable Card", value: "hasCard" },
	{ nepali: "कार्डको किसिम", english: "", value: "cardType" },
	{ nepali: "मातृभाषा", english: "MotherTongue", value: "motherTongue" },
	{ nepali: "रगत समुह", english: "Blood Group", value: "bloodGroup" },
	{
		nepali: "बैवाहिक स्थिति",
		english: "MartialStatus",
		value: "martialStatus"
	},
	{ nepali: "बसोवाश को अवस्था", english: "Living Type", value: "livingType" },
	{
		nepali: "इस्थाइ बसोवाश",
		english: "Permanent Living Type",
		value: "permanentLivingAddress"
	},
	{
		nepali: "खानेपानीको श्रोत",
		english: "Drinking Water Resource",
		value: "waterSource"
	},
	{
		nepali: "खानेपानीको उपलब्ध स्थान",
		english: "Drinking Water Place",
		value: "distanceToWaterSource"
	},
	{
		nepali: "खानापकाउने प्रमुख इन्धन/चुल",
		english: "Cooking Resource",
		value: "cookingSource"
	},
	{
		nepali: "वत्तिको मुख्य स्रोत",
		english: "Light Resource",
		value: "electricSource"
	},
	{ nepali: "शौचालयको किसिम", english: "Toilet Type", value: "toilet" },
	{ nepali: "सडक/बाटोको अवास्था", english: "Road Type", value: "road" },
	{
		nepali: "फोहरमहिलाको व्यवस्थापन",
		english: "Waste Management",
		value: "wasteDisposal"
	},
	{ nepali: "नून प्रयोग", english: "Salt Type", value: "saltUsed" },
	{
		nepali: "बैंक तथा वित्तीय सस्थामा खाता",
		english: "Bank Account",
		value: "bankAccount"
	},
	{ nepali: "बिरामी जाच", english: "illTreament", value: "illTreament" },
	{ nepali: "भात्ता को किसिम", english: "Bhatta list", value: "welfare" },
	{
		nepali: "जग्गाको किसिम",
		english: "Land Used Living",
		value: "landUsedLiving"
	},
	{ nepali: "घरको किसिम", english: "House Type", value: "houseType" },
	{ nepali: "घरको छानाको किसिम", english: "Roof Type", value: "roofType" },
	{
		nepali: "जग्गाको कागजपत्र",
		english: "Has Land Document",
		value: "hasLandDocument"
	},
	{
		nepali: "घर मापदण्ड",
		english: "House Criteria",
		value: "doHouseCriteriaFullfill"
	},
	{
		nepali: "घरको नक्सा पास",
		english: "House Map Pass",
		value: "hasHouseMapPass"
	},
	{ nepali: "शिप र तालिम", english: "Skill Detail", value: "detail" },
	{
		nepali: "जन्म दर्ता",
		english: "Birth Certificate Detail",
		value: "birthCertificate"
	},
	{
		nepali: "बालबालिकालाई खोप",
		english: "Child Vaccination",
		value: "childVaccine"
	},
	{
		nepali: "स्वस्थाकर्मी बाट सुत्केरी",
		english: "Delivery From Doctor",
		value: "deliveryFromDoctor"
	},
	{
		nepali: "गर्भवतीलाई पोषणयुक्त खाना",
		english: "Nutrition for Pregnant",
		value: "pregnantNutrition"
	},
	{
		nepali: "गर्भवती महिलाको जाँच ",
		english: "Check-Up of Pregnant",
		value: "pregnanctCheck"
	},
	{
		nepali: "पोषण सम्बन्धी समस्या",
		english: "Child Nutrition",
		value: "childNutrition"
	},
	{ nepali: "वालवालिका श्रम", english: "Child Labour", value: "childLabour" },
	{ nepali: "वाल बिवाह", english: "Early Marriage", value: "earlyMarriage" },
	{
		nepali: "टिटानस खोप",
		english: "Pregnant Tetanus",
		value: "pregnantTetanus"
	}
];

const searchOption = {
	gender: [
		{
			nepali: "पुरुष",
			english: "",
			value: "male"
		},
		{
			nepali: "महिला",
			english: "",
			value: "female"
		},
		{
			nepali: "तेश्रो लिंगी",
			english: "",
			value: "third_gender"
		}
	],
	answererRelation: answererRelation,
	ethnics: casteList,
	caste: [
		{
			nepali: "राई",
			english: "",
			value: "rai"
		},
		{
			nepali: "मगर",
			english: "",
			value: "magar"
		},
		{
			nepali: "शेर्पा",
			english: "",
			value: "sherpa"
		},
		{
			nepali: "गुरुङ्ग",
			english: "",
			value: "gurung"
		},
		{
			nepali: "तामाङ्ग",
			english: "",
			value: "tamang"
		},
		{
			nepali: "नेवार",
			english: "",
			value: "newar"
		},
		{
			nepali: "थकाली",
			english: "",
			value: "thakali"
		},
		{
			nepali: "लिम्बु",
			english: "",
			value: "limbu"
		},
		{
			nepali: "भुजेल",
			english: "",
			value: "bhujel"
		},
		{
			nepali: "जिरेल",
			english: "",
			value: "jirel"
		},
		{
			nepali: "गिरि",
			english: "",
			value: "giri"
		},
		{
			nepali: "पुरी",
			english: "",
			value: "puri"
		},
		{
			nepali: "भारती",
			english: "",
			value: "bharati"
		},
		{
			nepali: "सन्यासी/दशनामी",
			english: "",
			value: "sansayi"
		},
		{
			nepali: "योगी",
			english: "",
			value: "yogi"
		},
		{
			nepali: "कुँवर",
			english: "",
			value: "kunwar"
		}
	],

	religion: religionList,
	educationLevel: educationList,
	prePrimaryDetails: preprimaryList,
	primaryDetails: primaryList,
	secondaryDetails: secondaryList,
	levelOneJob: occupationList,
	levelTwoJob: jobList,
	levelThreeJob: teacherList,
	healthCondition: healthconditionList,
	unhealthyDisease: unhealthy,
	type: mentaltype,
	condition: mentalcondition,
	hasCard: mentalCardYesNo,
	cardType: mentalCardtype,
	motherTongue: mothertongue,
	bloodGroup: bloodgroup,
	martialStatus: marriage,
	livingType: livingTypeList,
	permanentLivingAddress: permanent,
	waterSource: drinkingwaterLists,
	distanceToWaterSource: drinkingwaterplaceLists,
	cookingSource: cookingresourceLists,
	electricSource: lightresourceLists,
	toilet: toiletresourceLists,
	road: roadLists,
	wasteDisposal: wastemanagementLists,
	saltUsed: salttypeLists,
	bankAccount: bankAccount,
	illTreament: illTreament,
	welfare: bhattaLists,
	landUsedLiving: landUsedliving,
	houseType: housetype,
	roofType: rooftype,
	hasLandDocument: hasLanddocument,
	doHouseCriteriaFullfill: doHouseCriteriafullfill,
	hasHouseMapPass: hasHouseMappass,
	detail: skillDetail,
	birthCertificate: birthcertificate,
	childVaccine: childvaccine,
	deliveryFromDoctor: deliveryFromdoctor,
	pregnantNutrition: pregnantnutrition,
	pregnanctCheck: pregnanctcheck,
	childNutrition: childnutrition,
	childLabour: childlabour,
	earlyMarriage: earlymarriage,
	pregnantTetanus: pregnanttetanus
};

const searchTableHeader = [
	"क्र.श",
	"वडा न.",
	"घर न.",
	"मृत्युहुनेको नाम थर",
	"लिङ्ग",
	"उमेर ",
	"मृत्युको कारण "
];

const genderList = [
	{ nepali: "पुरुष", english: "Male", value: "male" },
	{ nepali: "महिला", english: "Female", value: "female" },
	{ nepali: "तेस्रो लिङ्गी", english: "Third Gender", value: "third_gender" }
];

const mapData = {
	house: [],
	family: [
		// "house",
		// "fullName",
		"gender",
		// "dateOfBirth",
		"age",
		"answererRelation",
		// "citizenshipNumber",
		// "citizenshipfront",
		// "citizenshipBack",
		// "contactNumber",
		"livingStatus",
		"ethnics",
		"caste",
		"religion",
		"motherTongue",
		"martialStatus",
		"healthCondition",
		"unhealthyDisease",
		"bloodGroup",
		"voterId"
	],
	education: [
		"educationLevel",
		"prePrimaryDetails",
		"primaryDetails",
		"secondaryDetails"
	],
	occupation: ["levelOneJob", "levelTwoJob", "levelThreeJob"],
	disable: ["isDisable", "type", "condition", "hasCard", "cardType"],
	abroad: ["abroadReason", "bideshiyekoYear", "foreignCountry"],
	death: [],
	insurance: [],
	houseFacility: [],
	rent: [],
	land: [],
	agriculture: [],
	agricultureDetail: [],
	liveStock: [],
	beeFishSilk: [], //contains nested fields to be searched
	economics: [],
	skill: [],
	business: [],
	womenChild: [],
	welfare: []
};

const rangeValue = ["age"];
module.exports = {
	rangeValue,
	mapData,
	placeholderName,
	searchTableHeader,
	genderList,
	casteList,
	religionList,
	drinkingwaterLists,
	autoSuggetionString,
	searchOption
};
