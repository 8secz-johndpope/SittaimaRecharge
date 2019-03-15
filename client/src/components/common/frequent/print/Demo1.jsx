import { Fab } from "@material-ui/core";
import PrintIcon from "@material-ui/icons/Print";
import React from "react";
import ReactToPrint from "react-to-print";

function ComponentToPrint(props) {
	return <p>Hello</p>;
}
class Example extends React.Component {
	handleAfterPrint = () => {
		console.log("after print!"); // eslint-disable-line no-console
	};

	handleBeforePrint = () => {
		console.log("before print!"); // eslint-disable-line no-console
	};

	renderContent = () => {
		// eslint-disable-line arrow-body-style
		return this.componentRef;
	};

	renderTrigger = () => {
		// eslint-disable-line arrow-body-style
		return (
			<Fab variant="extended" aria-label="Delete">
				<PrintIcon />
			</Fab>
		);
	};

	setRef = ref => {
		this.componentRef = ref;
	};

	render() {
		return (
			<div>
				<ReactToPrint
					trigger={this.renderTrigger}
					content={() => this.componentRef}
					onBeforePrint={this.handleBeforePrint}
					onAfterPrint={this.handleAfterPrint}
				/>
				<ComponentToPrint ref={el => (this.componentRef = el)} />
			</div>
		);
	}
}

export default Example;
