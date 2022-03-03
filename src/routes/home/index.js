import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<div class={style.nada}>
			<p>The Arcade you lost.</p>
			<img src = '../../assets/ea.png'></img>
		</div>
	</div>
);

export default Home;
