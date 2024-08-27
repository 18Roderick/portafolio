import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Roderick</title>
				<meta name="description" content="PORTAFOLIO" />
				<link rel="icon" href="/favicon.ico" />
		<script defer src="https://cloud.umami.is/script.js" data-website-id="f5104e48-e0c8-47be-bc0f-7a9b694c191f"></script>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome</h1>
			</main>
		</div>
	);
}
