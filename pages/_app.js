import "../styles/globals.css";
import Script from "next/script";

import { Analytics } from '@vercel/analytics/react';

function MyApp ({ Component, pageProps }) {
	return (
		<>
			<Script id="plausible-analytics" src="https://plausible.roderickromero.dev/js/plausible.js" />
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}

export default MyApp;
