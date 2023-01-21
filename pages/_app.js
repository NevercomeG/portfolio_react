import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/custom.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
