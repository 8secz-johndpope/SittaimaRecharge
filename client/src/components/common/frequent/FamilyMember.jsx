import { Avatar, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import DisbaleIcon from "@material-ui/icons/Accessible";
import OccupationIcon from "@material-ui/icons/BusinessCenter";
import AbroadIcon from "@material-ui/icons/Flight";
import PersonIcon from "@material-ui/icons/Person";
import EducationIcon from "@material-ui/icons/School";
import classnames from "classnames";
import getNepalNumber from "get-nepali-number";
import React, { Component } from "react";
import { no, selectedLanguage, yes } from "../../../variable/global";
import { QuestionAnswer } from "./QuestionAnswer";

function mapValue(value, obj) {
	return obj[value];
}

class FamilyMember extends Component {
	getYesNo = data =>
		data === true ? yes[selectedLanguage] : no[selectedLanguage];

	getJobComponent = (occupation, fullName) => {
		var job = "";
		if (occupation.levelThreeJob)
			job =
				mapValue(occupation.levelThreeJob, {
					journalist: "पत्रकार",
					advocate: "वकिल",
					consulting: "परामर्श",
					contract: "ठेक्का  पट्टा",
					priest: "पुजारी",
					grocery: "किराना तथा थोक",
					hotel: "होटेल / लज",
					home_industry: "घरेलु उद्योग",
					meat_shop: "मासु पसल",
					vege_fruit: "तरकारी / फलफुल",
					sewing: "सिलाई बुनाई",
					iron: "फलाम जन्य कार्य गर्ने",
					handicraft: "हस्तकला सम्बन्धि"
				}) + " ";
		if (occupation.levelTwoJob)
			job +=
				mapValue(occupation.levelTwoJob, {
					private: "प्राइभेट",
					government: "सरकारी (निजामती कर्मचारी )",
					government1: "सरकारी (निजामती बाहेक )",
					construction: "निर्माण सम्बन्धि",
					security: "सुरक्षा निकाय",
					ngo_ingo: "N.G.O.  I.N.G.O संघ संस्था",
					bank_finance: "बैंक तथा वित्तिय संस्था",
					health: "चिकित्सक तथा स्वास्थकर्मी",
					teacher: "शिक्षक"
				}) + " ";
		if (occupation.levelOneJob)
			job +=
				mapValue(occupation.levelOneJob, {
					agriculture: "कृषि तथा पशुपालन",
					job: "नोकरी जागिर",
					industry: "उद्योग व्यापार",
					business: "व्यवसायिक कार्य",
					labor: "ज्याला मजदुरी",
					student: "विद्यार्थी (अध्यनरत)",
					house_wife: "गृहणी",
					foreign_job: "बैदेशिक रोजगार",
					unemployed: "बेरोजगार"
				}) + " ";
		return (
			<Grid item xs={4}>
				<QuestionAnswer question={`${fullName} को पेशा`} answer={job} />
			</Grid>
		);
	};

	render() {
		const { member, classes } = this.props;

		// GLOBAL VARIABLE
		const personalDetail = { english: "", nepali: "व्यक्तिगत विवरण" };
		const educationDetail = { english: "", nepali: "सैछिक विवरण" };
		const occupationDetail = { english: "", nepali: "पेशा विवरण" };
		const abroadDetail = { english: "", nepali: "वैदशिक रोजगार" };
		const disableDetail = { english: "", nepali: "अपाङ्गता स्तिथि" };

		const fullName = { english: "", nepali: "पुरा नाम" };
		const linga = { english: "", nepali: "लिङ्ग" };
		const ethnics = { english: "", nepali: "जात" };
		const dobBS = { english: "", nepali: "जन्ममिति (B.S.)" };
		const dobAD = { english: "", nepali: "जन्ममिति (A.D.)" };
		const age = { english: "", nepali: "उमेर" };
		const martialStatus = { english: "", nepali: "बैबाहिक स्तिथि" };
		const religion = { english: "", nepali: "धर्म" };
		const motherTongue = { english: "", nepali: "मातृभाषा " };
		const bloodGroup = { english: "", nepali: "रगत समुह" };
		const relationWithOwner = {
			english: "",
			nepali: "घरमुली संगको नाता"
		};
		const voteId = { english: "", nepali: " मतदाता परिचय पत्र" };
		const healthCondition = { english: "", nepali: "स्वास्थ्य स्थिति" };
		const healthDisease = { english: "", nepali: "किसिम" };
		const phoneNumber = { english: "", nepali: "सम्पर्क नम्बर" };
		// const healthCondition = { english: "", nepali: "खाना पकाउने मुख्य श्रोत" };
		// const healthCondition = { english: "", nepali: "खाना पकाउने मुख्य श्रोत" };
		return (
			<Grid item container direction="column" className={classes.container}>
				<Grid
					item
					container
					direction="row"
					justify="flex-end"
					alignItems="flex-start"
					className={classes.titleParent}
				>
					<Grid
						item
						container
						alignItems="center"
						className={classnames(classes.personalbg, classes.titlebg)}
					>
						<Typography variant="h6" className={classes.white}>
							{personalDetail[selectedLanguage]}
						</Typography>
						<Avatar className={classnames(classes.personalIcon, classes.icon)}>
							<PersonIcon />
						</Avatar>
					</Grid>
				</Grid>
				<Grid container direction="column">
					{/* first */}
					<Grid item container direction="row" className={classes.eachQnAns}>
						<Grid item xs={4}>
							<QuestionAnswer
								question={fullName[selectedLanguage]}
								answer={member.detail.fullName}
							/>
						</Grid>
						<Grid item xs={4}>
							<QuestionAnswer
								question={linga[selectedLanguage]}
								answer={mapValue(member.detail.gender, {
									male: "पुरुष",
									female: "महिला",
									third_gender: "तेश्रो लिंगी"
								})}
							/>
						</Grid>
						<Grid item xs={4}>
							<QuestionAnswer
								question={ethnics[selectedLanguage]}
								answer={mapValue(member.detail.ethnics, {
									brahmin_chetri: "ब्राहमण/क्षेत्रि",
									jajati_aadiwas: "जनजाती आदिवासी",
									pahadi_other: "पहाडी अन्य जाति",
									madhesi_jajati: "मधेसी जनजाति तथा आदिबासी",
									madhesi_bramin: "मधेसी ब्राम्हण तथा राजपुत",
									madhesi_dalit: "मधेसी दलित",
									pariyar: "परियार (दमाई,दर्जी ,सूचिका)",
									biswokarma: "विश्वकर्मा (कामि,लोहार,ओड,दर्जी चुनरा,पार्की )",
									sarki: "सार्की (भिजार,चर्माकार मूल )",
									hayu_bote: "अल्पशंख्यक जाति (हायु ,बोटे)",
									thakuri: "ठकुरी",
									majhi: "माझी",
									muslim: "मुस्लिम"
								})}
							/>
						</Grid>
					</Grid>
					{/* end */}

					{/* first */}
					<Grid item container direction="row" className={classes.eachQnAns}>
						{member.detail.dateOfBirth && (
							<Grid item xs={4}>
								<QuestionAnswer
									question={dobBS[selectedLanguage]}
									answer={member.detail.dateOfBirth}
								/>
							</Grid>
						)}
						{member.detail.dateOfBirth && (
							<Grid item xs={4}>
								<QuestionAnswer
									question={dobAD[selectedLanguage]}
									answer={getNepalNumber("1997")}
								/>
							</Grid>
						)}
						<Grid item xs={4}>
							<QuestionAnswer
								question={age[selectedLanguage]}
								answer={getNepalNumber(member.detail.age)}
							/>
						</Grid>
					</Grid>
					{/* end */}

					{/* first */}
					<Grid item container direction="row" className={classes.eachQnAns}>
						{member.detail.martialStatus && (
							<Grid item xs={4}>
								<QuestionAnswer
									question={martialStatus[selectedLanguage]}
									answer={mapValue(member.detail.martialStatus, {
										unmarried: "अविवाहित",
										married: "विवाहित",
										multi_marriage: "बहु बिबाह",
										re_married: "पुन बिबाह",
										widow: "बिधुर",
										wido1: "बिधुवा",
										divorce: "सम्बन्ध बिच्छेद (विवाहित तर अलग बसेको)",
										under_age: "उमेर कम"
									})}
								/>
							</Grid>
						)}
						<Grid item xs={4}>
							<QuestionAnswer
								question={religion[selectedLanguage]}
								answer={mapValue(member.detail.religion, {
									hindu: "हिन्दु",
									buddhist: "बुद्ध",
									muslim: "इस्लाम (मुस्लिम)",
									christian: "इसाई (क्रिश्चियन)",
									kirat: "किंरात"
								})}
							/>
						</Grid>
						<Grid item xs={4}>
							<QuestionAnswer
								className={classes.personalIcon}
								question={motherTongue[selectedLanguage]}
								answer={mapValue(member.detail.motherTongue, {
									nepali: "नेपाली",
									rai: "राई",
									kirat: "किरात",
									magar: "मगर",
									tamang: "तामाङ",
									newari: "नेपाल भाषा (नेवारी)",
									gurung: "गुरुङ",
									limbu: "लिम्बु",
									sherpa: "शेर्पा",
									maithali: "मैथिली",
									tharu: "थारु",
									khas: "खस",
									bhojpuri: "भोजपुरी",
									maajhi: "माझी",
									bhote: "भोटे",
									bajjika: "बज्जिका",
									sunwar: "सुनवार"
								})}
							/>
						</Grid>
					</Grid>
					{/* end */}

					{/* first */}
					<Grid item container direction="row" className={classes.eachQnAns}>
						<Grid item xs={4}>
							<QuestionAnswer
								question={bloodGroup[selectedLanguage]}
								answer={mapValue(member.detail.bloodGroup, {
									o_positive: "O+",
									o_negative: "O-",
									a_positive: "A+",
									a_neagtive: "A-",
									b_positive: "B+",
									b_negative: "B-",
									ab_positive: "AB+",
									ab_neagtive: "AB-",
									no_blood_group: "थाहा छैन"
								})}
							/>
						</Grid>
						<Grid item xs={4}>
							<QuestionAnswer
								question={relationWithOwner[selectedLanguage]}
								answer={mapValue(member.detail.answererRelation, {
									self_house_own: "घरमुली",
									husband: "श्रीमान",
									wife: "श्रीमती",
									mother: "आमा",
									father: "बुवा",
									son: "छोरा",
									daugher: "छोरी",
									buhari: "बुहारी",
									jwai: "ज्वाई",
									sashu: "सासु",
									sasura: "ससुरा",
									kaka: "काका",
									kaki: "काकी",
									fupu: "फुपू",
									fupaju: "फुपाजु",
									mama: "ममा",
									maiju: "माइजु",
									nati: "नाती",
									natini: "नातिनी",
									daju: "दाजु",
									bhai: "भाई",
									didi: "दिदि",
									bahini: "बहिनि",
									bhauju: "भाउजु",
									bhai_buhari: "भाई बुहारी",
									jethan: "जेठान",
									thulo_bbuwa: "ठुलो बुवा",
									thulo_aama: "ठुलो आमा",
									grand_father: "हजुर बुवा",
									grand_mother: "हजुर आमा"
								})}
							/>
						</Grid>
						<Grid item xs={4}>
							<QuestionAnswer
								question={voteId[selectedLanguage]}
								answer={this.getYesNo(member.detail.voterId)}
							/>
						</Grid>
					</Grid>
					{/* end */}

					{/* first */}
					<Grid item container direction="row" className={classes.eachQnAns}>
						<Grid item xs={4}>
							<QuestionAnswer
								question={healthCondition[selectedLanguage]}
								answer={mapValue(member.detail.healthCondition, {
									helathy: "स्वस्थ",
									normal_patient: "सामान्य रोग लागेको",
									unhelathy: "दिर्घ रोग लागेको",
									mental: "मानसिक समस्या भएको",
									cancer: "क्यान्सर रोग"
								})}
							/>
						</Grid>
						{member.detail.healthCondition === "unhelathy" && (
							<Grid item xs={4}>
								<QuestionAnswer
									question={healthDisease[selectedLanguage]}
									answer={member.detail.unhealthyDisease.join(", ")}
								/>
							</Grid>
						)}
						{member.detail.contactNumber && (
							<Grid item xs={4}>
								<QuestionAnswer
									question={phoneNumber[selectedLanguage]}
									answer={member.detail.contactNumber}
								/>
							</Grid>
						)}
					</Grid>
					{/* end */}
				</Grid>

				{/* Education  */}
				<Grid
					item
					container
					direction="row"
					justify="flex-end"
					alignItems="flex-start"
					className={classes.titleParent}
				>
					<Grid
						item
						container
						alignItems="center"
						className={classnames(classes.educationbg, classes.titlebg)}
					>
						<Typography variant="h6" className={classes.white}>
							{educationDetail[selectedLanguage]}
						</Typography>
						<Avatar className={classnames(classes.eduIcon, classes.icon)}>
							<EducationIcon />
						</Avatar>
					</Grid>
				</Grid>

				<Grid container direction="column">
					{/* first */}
					<Grid item container direction="row" className={classes.eachQnAns}>
						<Grid item xs={4}>
							<QuestionAnswer
								question={`${member.detail.fullName} को शिक्षा`}
								answer={mapValue(member.education.educationLevel, {
									kinder_garten: "बाल विकास कक्षा",
									pre_primary: "पूर्व प्राथमिक",
									primary: "आधारभूत तह",
									secondary: "माध्यमिक तह",
									t_slc: "प्राविधिक एस.एल.सी. (Overseer)",
									bachelors: "स्नातक तह",
									masters: "स्नाकोत्तर तह",
									m_phil: "एमफिल",
									phd: "विधा बारिधि",
									literate: "साधारण लेखपढ((साक्षर)",
									illiterate: "निरक्षर (लेखपढ गर्न नसक्ने)",
									no_school: "बिद्यालय शिक्षा हाशिल नगरेको"
								})}
							/>
						</Grid>
						{member.education.educationLevel === "pre_primary" && (
							<Grid item xs={4}>
								<QuestionAnswer
									question={"पूर्व प्राथमिक कक्षा"}
									answer={getNepalNumber(member.education.prePrimaryDetails)}
								/>
							</Grid>
						)}
						{member.education.educationLevel === "primary" && (
							<Grid item xs={4}>
								<QuestionAnswer
									question={"आधारभूत तहको कक्षा"}
									answer={getNepalNumber(member.education.primaryDetails)}
								/>
							</Grid>
						)}
						{member.education.educationLevel === "secondary" && (
							<Grid item xs={4}>
								<QuestionAnswer
									question={"माध्यमिक तहको कक्षा"}
									answer={getNepalNumber(member.education.secondaryDetails)}
								/>
							</Grid>
						)}
					</Grid>
					{/* end */}
				</Grid>

				{/* Occupation  */}
				<Grid
					item
					container
					direction="row"
					justify="flex-end"
					alignItems="flex-start"
					className={classes.titleParent}
				>
					<Grid
						item
						container
						alignItems="center"
						className={classnames(classes.occupationbg, classes.titlebg)}
					>
						<Typography variant="h6" className={classes.white}>
							{occupationDetail[selectedLanguage]}
						</Typography>
						<Avatar className={classnames(classes.occIcon, classes.icon)}>
							<OccupationIcon />
						</Avatar>
					</Grid>
				</Grid>

				{member.detail.age > 15 && (
					<Grid container direction="column">
						{/* first */}
						<Grid item container direction="row" className={classes.eachQnAns}>
							{this.getJobComponent(member.occupation, member.detail.fullName)}
						</Grid>
						{/* end */}
					</Grid>
				)}

				{/* abroad  */}
				{member.detail.livingStatus === "foreign" && (
					<div>
						<Grid
							item
							container
							direction="row"
							justify="flex-end"
							alignItems="flex-start"
							className={classes.titleParent}
						>
							<Grid
								item
								container
								alignItems="center"
								className={classnames(classes.abroadbg, classes.titlebg)}
							>
								<Typography variant="h6" className={classes.white}>
									{abroadDetail[selectedLanguage]}
								</Typography>
								<Avatar
									className={classnames(classes.abroadIcon, classes.icon)}
								>
									<AbroadIcon />
								</Avatar>
							</Grid>
						</Grid>

						<Grid container direction="column">
							<Grid
								item
								container
								direction="row"
								className={classes.eachQnAns}
							>
								<Grid item xs={4}>
									<QuestionAnswer
										question={`${member.detail.fullName} को वसोवासको स्थिति`}
										answer={"विदेश"}
									/>
								</Grid>
								<Grid item xs={4}>
									<QuestionAnswer
										question={"विदेश गएको देश"}
										answer={mapValue(member.abroad.foreignCountry, {
											india: "भारत",
											quatar: "कतार",
											saarc: "भारत बाहेक अन्य सार्क राष्ट्र",
											saudi_arab: "साउदी अरब",
											malaysia: "मलेसिया",
											japan: "जापान",
											uae: "यु.ए.ई. (दुबई)",
											south_korea: "दक्षिण कोरिया",
											australia: "अष्ट्रेलिया",
											usa: "अमेरिका",
											iraq: "इराक",
											england: "बेलायत",
											canada: "क्यानाडा",
											germany: "जर्मनी"
										})}
									/>
								</Grid>
							</Grid>

							<Grid
								item
								container
								direction="row"
								className={classes.eachQnAns}
							>
								<Grid item xs={4}>
									<QuestionAnswer
										question={"विदेशिएको वर्ष"}
										answer={getNepalNumber(member.abroad.bideshiyekoYear)}
									/>
								</Grid>

								<Grid item xs={4}>
									<QuestionAnswer
										question={"विदेश गएको कारण"}
										answer={mapValue(member.abroad.abroadReason, {
											education: "शिक्षा",
											employment: "रोजगार",
											house_worker: "घरेलु कामदार (महिला)",
											dv_lottery: "डी.भी. चिठ्ठा"
										})}
									/>
								</Grid>
							</Grid>
						</Grid>
					</div>
				)}

				{/* disable  */}
				{member.disable.isDisable === true && (
					<div>
						<Grid
							item
							container
							direction="row"
							justify="flex-end"
							alignItems="flex-start"
							className={classes.titleParent}
						>
							<Grid
								item
								container
								alignItems="center"
								className={classnames(classes.disablebg, classes.titlebg)}
							>
								<Typography variant="h6" className={classes.white}>
									{disableDetail[selectedLanguage]}
								</Typography>
								<Avatar
									className={classnames(classes.disableIcon, classes.icon)}
								>
									<DisbaleIcon />
								</Avatar>
							</Grid>
						</Grid>

						<Grid container direction="column">
							<Grid
								item
								container
								direction="row"
								className={classes.eachQnAns}
							>
								<Grid item xs={4}>
									<QuestionAnswer
										question={`${member.detail.fullName} को अपांगता`}
										answer={"छ"}
									/>
								</Grid>
								<Grid item xs={4}>
									<QuestionAnswer
										question={`${member.detail.fullName} को अपांगताको स्थिति`}
										answer={mapValue(member.disable.condition, {
											vision: "दृष्टि सम्बन्धि",
											listening: "सुनाइ सम्बन्धि",
											disability: "शारिरिक अपाङ्गता",
											speak: "बोलाइ सम्बन्धि",
											mental: "मानसिक रुपमा अपाङ्गता"
										})}
									/>
								</Grid>
								<Grid item xs={4}>
									<QuestionAnswer
										question={"अपांगताको किसिम"}
										answer={mapValue(member.disable.type, {
											by_birth: "जन्मजात",
											disease: "रोग",
											accident: "दुर्घटना"
										})}
									/>
								</Grid>
							</Grid>

							<Grid
								item
								container
								direction="row"
								className={classes.eachQnAns}
							>
								<Grid item xs={4}>
									<QuestionAnswer
										question={"अपांगताको परिचय पत्र"}
										answer={this.getYesNo(member.disable.hasCard)}
									/>
								</Grid>

								{member.disable.hasCard === true && (
									<Grid item xs={4}>
										<QuestionAnswer
											question={"परिचय पत्रको वर्ग"}
											answer={mapValue(member.disable.cardType, {
												red_card: "रातो (पूर्ण आसक्त) क वर्ग",
												blue_card: "निलो (अरुको सहयोगबाट) ख वर्ग",
												yellow_card: "पहेलो (कृतिम अंगको ) ग वर्ग",
												white_card: "सेतो (सामान्य) घ वर्ग"
											})}
										/>
									</Grid>
								)}
							</Grid>
						</Grid>
					</div>
				)}
			</Grid>
		);
	}
}
const styles = theme => ({
	container: {
		// padding: theme.spacing.unit * 2
	},
	eachQnAns: {
		// marginTop: theme.spacing.unit * 1
	},
	titleParent: {
		paddingBottom: 10,
		borderBottom: "1px solid #ddd"
	},
	sectionHeading: {
		fontSize: "1.2rem"
	},
	personalIcon: {
		color: "#F44336"
	},
	eduIcon: {
		color: "#57B05B"
	},
	occIcon: {
		color: "#673AB7"
	},
	abroadIcon: {
		color: "#00ACC1"
	},
	disableIcon: {
		color: "#E91E63"
	},
	icon: {
		backgroundColor: "#FFF",
		marginLeft: 10
	},
	titlebg: {
		padding: "10px 10px 10px 15px",
		width: "auto",
		borderRadius: "40px"
	},
	personalbg: {
		backgroundColor: "#F44336"
	},
	educationbg: {
		backgroundColor: "#57B05B"
	},
	occupationbg: {
		backgroundColor: "#673AB7"
	},
	abroadbg: {
		backgroundColor: "#00ACC1"
	},
	disablebg: {
		backgroundColor: "#E91E63"
	},
	white: {
		color: "#FFF"
	}
});
export default withStyles(styles)(FamilyMember);
