import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
	typography: {
		useNextVariants: true,
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(","),
		caption: {
			fontFamily: "sans-serif"
		},
		h4: {
			fontFamily: "sans-serif"
		}
	},
	palette: {
		primary: {
			main: "#006DF0"
		},
		secondary: {
			light: "#ffa733",
			main: "#ff9100",
			dark: "#b26500"
			// contrastText: "#4d95ff"
		}
	},
	button: {
		textDecoration: "none"
	}
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
