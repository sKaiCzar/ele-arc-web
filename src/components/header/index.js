import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Electron Arcade</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile/sKaiCzar">sKaiCzar</Link>
			<Link activeClassName={style.active} href="/profile/Srirajiv">Srirajiv</Link>
		</nav>
	</header>
);

export default Header;
