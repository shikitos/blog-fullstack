import React from "react";
import styles from "./page.module.scss";

const AuthPage: React.FC = () => {

	return (
		<main className={styles.auth}>
			<h1>Auth 123</h1>
			<form >
				<div>
					<label htmlFor="email">Email:</label>
					<input id="email" type="email" name="email" />
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input id="password" type="password" name="password" />
				</div>
				<button type="submit">Login</button>
			</form>
		</main>
	);
};

export default AuthPage;
