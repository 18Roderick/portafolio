import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script id="plausible-analytics" src="https://plausible.roderickromero.dev/js/plausible.js" />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
