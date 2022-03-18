import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Footer = () => (
	<footer class={style.footer}>
		Website by <Link activeClassName={style.active} href="https://github.com/sKaiCzar">Gyan Ujjwal</Link>.
        Electron Arcade by <Link activeClassName={style.active} href="https://github.com/sKaiCzar">Gyan Ujjwal</Link>, <Link activeClassName={style.active} href="https://github.com/Rajiv7479">Srirajiv Ranjan</Link> and <Link activeClassName={style.active} href="https://github.com/iamakhileshmishra">Akhilesh Kumar Mishra</Link>
	</footer>
);

export default Footer;
