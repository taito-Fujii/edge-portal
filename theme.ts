import { createMuiTheme } from "@material-ui/core/styles";
import { Theme as MuiTheme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

const options = {
	palette: {
		type: "light",
		primary: {
			main: "#faaf4a",
			red: "#fe2911",
			teal: "#19A5A2",
			blue: "#0085eb",
			purple: "#673ab7",
		},
		secondary: {
			main: "#faaf4a",
			red: "#bf1f0d",
			teal: "#137C7A",
			blue: "#0064b0",
			purple: "#9933cc",
		},
		background: {
			grey: "#f6f6f6",
			white: "#ffffff",
		},
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: "'Open Sans', 'Helvetica', 'Arial', sans-serif",
		fontWeightBold: 600,
	},
	overrides: {
		MuiTooltip: {
			tooltip: { fontSize: "14px !important" },
		},
		MuiTypography: {
			caption: { fontSize: "0.9rem" },
		},
	},
};
const Theme: MuiTheme = createMuiTheme(options as ThemeOptions);
export default Theme;